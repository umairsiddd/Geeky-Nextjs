import { useState } from "react";

const PublicationButtons = ({ downloads, abstract, bibtex, hideAbstract, hideBibtex }) => {
  const [showDownloads, setShowDownloads] = useState(false);
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const handleDownloadsClick = () => {
    setShowDownloads(!showDownloads);
    if (!showDownloads) {
      setShowAbstract(false);
      setShowBibtex(false);
    }
  };

  const handleAbstractClick = () => {
    setShowAbstract(!showAbstract);
    if (!showAbstract) {
      setShowDownloads(false);
      setShowBibtex(false);
    }
  };

  const handleBibtexClick = () => {
    setShowBibtex(!showBibtex);
    if (!showBibtex) {
      setShowDownloads(false);
      setShowAbstract(false);
    }
  };

  // Parse downloads - can be array of {label, url} objects
  const downloadLinks = downloads || [];

  return (
    <div className="publication-buttons my-6">
      {/* Buttons Row */}
      <div className="flex flex-wrap gap-2 mb-2">
        {/* Download Button */}
        {downloadLinks.length > 0 && (
          <button
            onClick={handleDownloadsClick}
            className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
              showDownloads
                ? "bg-[#2bbec3] text-white"
                : "bg-[#2bbec3] text-white hover:bg-[#249fa3]"
            }`}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
            <svg
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                showDownloads ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}

        {/* Abstract Button */}
        {!hideAbstract && (
          <button
            onClick={handleAbstractClick}
            className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
              showAbstract
                ? "bg-[#5dd3d7] text-white"
                : "bg-[#e0f7f8] text-[#2bbec3] hover:bg-[#c5f0f2] dark:bg-[#1a4a4c] dark:text-[#5dd3d7] dark:hover:bg-[#2a5a5c]"
            }`}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Abstract
            <svg
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                showAbstract ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}

        {/* BibTeX Button */}
        {!hideBibtex && (
          <button
            onClick={handleBibtexClick}
            className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
              showBibtex
                ? "bg-[#5dd3d7] text-white"
                : "bg-[#e0f7f8] text-[#2bbec3] hover:bg-[#c5f0f2] dark:bg-[#1a4a4c] dark:text-[#5dd3d7] dark:hover:bg-[#2a5a5c]"
            }`}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            BibTeX
            <svg
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                showBibtex ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Downloads Dropdown */}
      {showDownloads && downloadLinks.length > 0 && (
        <div className="mt-3 p-4 bg-[#e0f7f8] dark:bg-[#1a4a4c] border-l-4 border-[#2bbec3] rounded-r-md">
          <h4 className="text-sm font-bold text-[#2bbec3] dark:text-[#5dd3d7] mb-3">
            Downloads
          </h4>
          <div className="flex flex-wrap gap-2">
            {downloadLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#2bbec3] bg-white dark:bg-[#0d2526] border border-[#2bbec3] rounded hover:bg-[#2bbec3] hover:text-white transition-colors duration-200 no-underline"
              >
                <svg
                  className="w-3 h-3 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Abstract Dropdown */}
      {showAbstract && !hideAbstract && (
        <div className="mt-3 p-4 bg-[#e0f7f8] dark:bg-[#1a4a4c] border-l-4 border-[#2bbec3] rounded-r-md">
          <h4 className="text-sm font-bold text-[#2bbec3] dark:text-[#5dd3d7] mb-2">
            Abstract
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {abstract || "Abstract not available."}
          </p>
        </div>
      )}

      {/* BibTeX Dropdown */}
      {showBibtex && !hideBibtex && (
        <div className="mt-3 p-4 bg-gray-700 dark:bg-gray-800 border-l-4 border-[#2bbec3] rounded-r-md">
          <h4 className="text-sm font-bold text-[#5dd3d7] mb-2">
            BibTeX
          </h4>
          <pre className="text-xs text-white font-mono overflow-x-auto whitespace-pre-wrap">
            {bibtex || "BibTeX citation not available."}
          </pre>
        </div>
      )}
    </div>
  );
};

export default PublicationButtons;
