import { markdownify } from "@lib/utils/textConverter";

const AwardCard = ({ icon, title, description, status }) => {
  return (
    <div className="mb-6 rounded-lg border border-border p-8 dark:border-darkmode-border bg-white dark:bg-darkmode-theme-dark shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center min-h-[280px]">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E8EBF5] dark:bg-[#2a3561] text-[#4159A3] dark:text-[#E5F4F4] mb-5">
        {icon}
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-dark dark:text-white mb-3">
          {title}
          {status && (
            <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              [{status}]
            </span>
          )}
        </h3>
        {description && (
          <p className="text-text dark:text-darkmode-light text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const Awards = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  // Award icons as SVG components
  const FellowshipIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const MedalIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  const TrophyIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );

  const AwardIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );

  const AcademicIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );

  const CodeIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  const GlobeIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const awards = [
    {
      icon: FellowshipIcon,
      title: "NTNU Onsager Fellowship in Robotic Vision",
      description: "Tenure-track faculty position + 2 PhD studentships at NTNU in Trondheim, Norway",
      status: "passed"
    },
    {
      icon: MedalIcon,
      title: "ETH Medal 2014",
      description: "Outstanding doctoral dissertation (~top 5% of all PhD theses at ETH-Zurich)",
      status: null
    },
    {
      icon: TrophyIcon,
      title: "Best PhD Student Award",
      description: "By IAPR, out of ~130 pre-screened candidates at ICVSS 2012",
      status: null
    },
    {
      icon: AwardIcon,
      title: "Qualcomm Innovation Fellowship (QInF) 2012",
      description: "Worth 10,000 EUR on my research proposal",
      status: null
    },
    {
      icon: TrophyIcon,
      title: "Best Paper Award",
      description: "For my 3dRR 2011 paper by Microsoft Research",
      status: null
    },
    {
      icon: AcademicIcon,
      title: "2nd Position in Bachelor of Engineering (Electronics)",
      description: "Out of 140 students in programme at NEDUET (99.7th percentile overall amongst ~1500 students in Engineering faculty)",
      status: null
    },
    {
      icon: CodeIcon,
      title: "National Software Competitions",
      description: "Prizes at six national level software competitions/olympiads (1998-2001)",
      status: null
    },
    {
      icon: GlobeIcon,
      title: "International Programming Olympiads",
      description: "Member of Pakistan-I team at three international programming olympiads (SEARCC ISSC 2000-02 in Singapore/Philippines/New Zealand)",
      status: null
    }
  ];

  return (
    <section className="section mt-16">
      <div className="container">
        <h1 className="section-title text-4xl lg:text-[55px] mb-28">
          {title}
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {awards.map((award, index) => (
            <AwardCard
              key={index}
              icon={award.icon}
              title={award.title}
              description={award.description}
              status={award.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
