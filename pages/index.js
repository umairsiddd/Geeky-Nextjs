import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, pagination } = config.settings;

// Publication Item Component with dropdown
const PublicationItem = ({ authors, title, venue, year, badge, pdfUrl, abstract, bibtex }) => {
  const [showDownload, setShowDownload] = useState(false);
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const handleDownloadClick = () => {
    setShowDownload(!showDownload);
    if (!showDownload) {
      setShowAbstract(false);
      setShowBibtex(false);
    }
  };

  const handleAbstractClick = () => {
    setShowAbstract(!showAbstract);
    if (!showAbstract) {
      setShowDownload(false);
      setShowBibtex(false);
    }
  };

  const handleBibtexClick = () => {
    setShowBibtex(!showBibtex);
    if (!showBibtex) {
      setShowDownload(false);
      setShowAbstract(false);
    }
  };

  const anyDropdownOpen = showDownload || showAbstract || showBibtex;
  
  return (
    <div className="mb-[70px]">
      <p className="text-text dark:text-darkmode-light mb-3">{authors}</p>
      <p className="font-bold text-dark dark:text-white mb-3">{title}</p>
      <p className="text-text dark:text-darkmode-light italic mb-3">
        {venue} {year} <span className="pub-badge conference ml-2">{badge}</span>
      </p>
      
      {/* Buttons Row */}
      <div className={`flex flex-wrap gap-2 ${!anyDropdownOpen ? 'mb-[70px]' : 'mb-2'}`}>
        {/* Download Button */}
        <button
          onClick={handleDownloadClick}
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
            showDownload
              ? "bg-[#2bbec3] text-white"
              : "bg-[#2bbec3] text-white hover:bg-[#249fa3]"
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
          <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${showDownload ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Abstract Button */}
        <button
          onClick={handleAbstractClick}
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
            showAbstract
              ? "bg-[#5dd3d7] text-white"
              : "bg-[#e0f7f8] text-[#2bbec3] hover:bg-[#c5f0f2] dark:bg-[#1a4a4c] dark:text-[#5dd3d7] dark:hover:bg-[#2a5a5c]"
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Abstract
          <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${showAbstract ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* BibTeX Button */}
        <button
          onClick={handleBibtexClick}
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
            showBibtex
              ? "bg-[#5dd3d7] text-white"
              : "bg-[#e0f7f8] text-[#2bbec3] hover:bg-[#c5f0f2] dark:bg-[#1a4a4c] dark:text-[#5dd3d7] dark:hover:bg-[#2a5a5c]"
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          BibTeX
          <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${showBibtex ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Download Dropdown */}
      {showDownload && (
        <div className="mt-3 p-4 mb-[70px] bg-[#e0f7f8] dark:bg-[#1a4a4c] border-l-4 border-[#2bbec3] rounded-r-md">
          <h4 className="text-sm font-bold text-[#2bbec3] dark:text-[#5dd3d7] mb-3">Downloads</h4>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#2bbec3] bg-white dark:bg-[#0d2526] border border-[#2bbec3] rounded hover:bg-[#2bbec3] hover:text-white transition-colors duration-200 no-underline"
          >
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Paper (PDF)
          </a>
        </div>
      )}

      {/* Abstract Dropdown */}
      {showAbstract && (
        <div className="mt-3 p-4 mb-[70px] bg-[#e0f7f8] dark:bg-[#1a4a4c] border-l-4 border-[#2bbec3] rounded-r-md">
          <h4 className="text-sm font-bold text-[#2bbec3] dark:text-[#5dd3d7] mb-2">Abstract</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {abstract}
          </p>
        </div>
      )}

      {/* BibTeX Dropdown */}
      {showBibtex && (
        <div className="mt-3 p-4 mb-[70px] bg-gray-700 dark:bg-gray-800 border-l-4 border-[#2bbec3] rounded-r-md">
          <h4 className="text-sm font-bold text-[#5dd3d7] mb-2">BibTeX</h4>
          <pre className="text-xs text-white font-mono overflow-x-auto whitespace-pre-wrap">
            {bibtex}
          </pre>
        </div>
      )}
    </div>
  );
};

const Home = ({
  banner,
  posts,
  featured_posts,
  recent_posts,
  categories,
  promotion,
  experience,
}) => {
  // define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />

        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className={banner.image_enable ? "mt-12 text-center lg:mt-0 lg:text-left lg:col-6" : "mt-12 text-center lg:mt-0 lg:text-left lg:col-12"}>
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                {markdownify(banner.title_small, "span")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                  <Link
                    className="btn btn-primary mt-6"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    {banner.button.label}
                  </Link>
              )}
            </div>
            {banner.image_enable && (
                <div className="col-9 lg:col-6">
                  <ImageFallback
                    className="mx-auto object-contain"
                    src={banner.image}
                    width={548}
                    height={443}
                    priority={true}
                    alt="Banner Image"
                  />
                </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {experience?.enable && (
        <section className="section pt-[100px]">
          <div className="container">
            {/* Industry */}
            {experience.industry && (
              <div className="mb-20">
                <h2 className="section-title mb-[70px]">{experience.industry.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  {experience.industry.items.map((item, index) => (
                    <div key={index} className="text-center">
                      <h4 className="font-bold text-dark dark:text-white text-base mb-1">
                        {item.company}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        {item.location}
                      </p>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-40 flex items-center justify-center mb-6 hover:opacity-80 transition-opacity"
                      >
                        <ImageFallback
                          src={item.logo}
                          alt={item.company}
                          width={180}
                          height={180}
                          className="object-contain w-[180px] h-[180px] rounded-lg"
                          style={{ borderRadius: '8px' }}
                        />
                      </a>
                      <p className="text-base text-primary font-medium">
                        {item.role}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        {item.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Academia */}
            {experience.academia && (
              <div>
                <h2 className="section-title mb-[70px]">{experience.academia.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                  {experience.academia.items.map((item, index) => (
                    <div key={index} className="text-center">
                      <h4 className="font-bold text-dark dark:text-white text-base mb-1">
                        {item.degree}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        {item.institution}
                      </p>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-40 flex items-center justify-center mb-6 hover:opacity-80 transition-opacity"
                      >
                        <ImageFallback
                          src={item.logo}
                          alt={item.institution}
                          width={180}
                          height={180}
                          className="object-contain w-[180px] h-[180px] rounded-lg"
                          style={{ borderRadius: '8px' }}
                        />
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.location}
                      </p>
                      <p className="text-sm text-primary italic">
                        {item.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Selected Recent Publications Section */}
      <section className="section pt-[100px]">
        <div className="container">
          <h2 className="section-title mb-[60px]">
            Selected Recent Publications{" "}
            <Link href="/publications" className="pub-badge conference no-underline hover:opacity-80">
              See All...
            </Link>
          </h2>
          
          <PublicationItem
            authors="S. Kumar, S. Haresh, A. Ahmed, A. Konin, M.Z. Zia, Q.H. Tran."
            title="Unsupervised Action Segmentation by Joint Representation Learning and Online Clustering."
            venue="CVPR"
            year="2022"
            badge="Conference"
            pdfUrl="https://openaccess.thecvf.com/content/CVPR2022/papers/Kumar_Unsupervised_Action_Segmentation_by_Joint_Representation_Learning_and_Online_Clustering_CVPR_2022_paper.pdf"
            abstract="We present a novel approach for unsupervised activity segmentation which uses video frame clustering as a pretext task and simultaneously performs representation learning and online clustering. This is in contrast with prior works where representation learning and clustering are often performed sequentially. We leverage temporal information in videos by employing temporal optimal transport. In particular, we incorporate a temporal regularization term which preserves the temporal order of the activity into the standard optimal transport module for computing pseudo-label cluster assignments. The temporal optimal transport module enables our approach to learn effective representations for unsupervised activity segmentation. Furthermore, previous methods require storing learned features for the entire dataset before clustering them in an offline manner, whereas our approach processes one mini-batch at a time in an online manner. Extensive evaluations on three public datasets, ie 50-Salads, YouTube Instructions, and Breakfast, and our dataset, ie, Desktop Assembly, show that our approach performs on par with or better than previous methods, despite having significantly less memory constraints."
            bibtex={`@inproceedings{kumar22cvpr,
 author = {S. Kumar and S. Haresh and A. Ahmed and A. Konin and M.Z. Zia and Q.H. Tran},
 title = {Unsupervised Action Segmentation by Joint Representation Learning and Online Clustering.},
 booktitle = {CVPR},
 year = {2022}
}`}
          />
          
          <PublicationItem
            authors="S. Haresh, S. Kumar, H. Coskun, S.N. Syed, A. Konin, M.Z. Zia, Q.H. Tran."
            title="Learning by Aligning Videos in Time."
            venue="CVPR"
            year="2021"
            badge="Conference"
            pdfUrl="https://openaccess.thecvf.com/content/CVPR2021/papers/Haresh_Learning_by_Aligning_Videos_in_Time_CVPR_2021_paper.pdf"
            abstract="We present a self-supervised approach for learning video representations using temporal video alignment as a pretext task, while exploiting both frame-level and video-level information. We leverage a novel combination of temporal alignment loss and temporal regularization terms, which can be used as supervision signals for training an encoder network. Specifically, the temporal alignment loss (ie, Soft-DTW) aims for the minimum cost for temporally aligning videos in the embedding space. However, optimizing solely for this term leads to trivial solutions, particularly, one where all frames get mapped to a small cluster in the embedding space. To overcome this problem, we propose a temporal regularization term (ie, Contrastive-IDM) which encourages different frames to be mapped to different points in the embedding space. Extensive evaluations on various tasks, including action phase classification, action phase progression, and fine-grained frame retrieval, on three datasets, namely Pouring, Penn Action, and IKEA ASM, show superior performance of our approach over state-of-the-art methods for self-supervised representation learning from videos. In addition, our method provides significant performance gain where labeled data is lacking."
            bibtex={`@inproceedings{haresh21cvpr,
 author = {S. Haresh and S. Kumar and H. Coskun and S.N. Syed and Andrey Konin and M.Z. Zia and Q.H. Tran},
 title = {Learning by Aligning Videos in Time},
 booktitle = {CVPR},
 year = {2021}
}`}
          />
        </div>
      </section>

      {/* Home main */}
      <section className="section">
        <div className="container">
          <div className="row items-start">
            <div className="mb-12 lg:mb-0 lg:col-8">
              {/* Featured posts */}
              {featured_posts.enable && (
                <div className="section">
                  {markdownify(featured_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border p-6 dark:border-darkmode-border">
                    <div className="row">
                      <div className="md:col-6">
                        <Post post={featuredPosts[0]} />
                      </div>
                      <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0 md:col-6">
                        {featuredPosts
                          .slice(1, featuredPosts.length)
                          .map((post, i, arr) => (
                            <div
                              className={`mb-6 flex items-center pb-6 ${
                                i !== arr.length - 1 &&
                                "border-b border-border dark:border-darkmode-border"
                              }`}
                              key={`key-${i}`}
                            >
                              {post.frontmatter.image && (
                                <ImageFallback
                                  className="mr-3 h-[85px] rounded object-cover"
                                  src={post.frontmatter.image}
                                  alt={post.frontmatter.title}
                                  width={105}
                                  height={85}
                                />
                              )}
                              <div>
                                <h3 className="h5 mb-2">
                                  <Link
                                    href={`/${blog_folder}/${post.slug}`}
                                    className="block hover:text-primary"
                                  >
                                    {post.frontmatter.title}
                                  </Link>
                                </h3>
                                <p className="inline-flex items-center font-bold">
                                  <FaRegCalendar className="mr-1.5" />
                                  {dateFormat(post.frontmatter.date)}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Promotion */}
              {promotion.enable && (
                <Link href={promotion.link} className="section block pt-0">
                  <ImageFallback
                    className="h-full w-full"
                    height="115"
                    width="800"
                    src={promotion.image}
                    alt="promotion"
                  />
                </Link>
              )}

              {/* Recent Posts */}
              {recent_posts.enable && (
                <div className="section pt-0">
                  {markdownify(recent_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
                    <div className="row">
                      {sortPostByDate.slice(0, showPosts).map((post) => (
                        <div className="mb-8 md:col-6" key={post.slug}>
                          <Post post={post} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <Pagination
                totalPages={Math.ceil(posts.length / showPosts)}
                currentPage={1}
              />
            </div>
            {/* sidebar */}
            <Sidebar
              className={"lg:mt-[9.5rem]"}
              posts={posts}
              categories={categories}
            />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion, experience } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      experience: experience || null,
      categories: categoriesWithPostsCount,
    },
  };
};
