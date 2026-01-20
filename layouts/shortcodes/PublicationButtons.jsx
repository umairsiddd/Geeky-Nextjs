import { useState } from "react";

const PublicationButtons = ({ downloadUrl, abstract, bibtex }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const handleAbstractClick = () => {
    setShowAbstract(!showAbstract);
    if (!showAbstract) setShowBibtex(false); // Close bibtex when opening abstract
  };

  const handleBibtexClick = () => {
    setShowBibtex(!showBibtex);
    if (!showBibtex) setShowAbstract(false); // Close abstract when opening bibtex
  };

  return (
    <div className="publication-buttons my-4">
      {/* Buttons Row */}
      <div className="flex flex-wrap gap-2 mb-2">
        {/* Download Button */}
        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#2bbec3] rounded-md hover:bg-[#249fa3] transition-colors duration-200 no-underline"
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
          </a>
        )}

        {/* Abstract Button */}
        <button
          onClick={handleAbstractClick}
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
            showAbstract
              ? "bg-[#6366f1] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
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

        {/* BibTeX Button */}
        <button
          onClick={handleBibtexClick}
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
            showBibtex
              ? "bg-[#f59e0b] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
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
      </div>

      {/* Abstract Dropdown */}
      {showAbstract && (
        <div className="mt-3 p-4 bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-[#6366f1] rounded-r-md">
          <h4 className="text-sm font-bold text-[#6366f1] dark:text-indigo-300 mb-2">
            Abstract
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {abstract || "Abstract not available."}
          </p>
        </div>
      )}

      {/* BibTeX Dropdown */}
      {showBibtex && (
        <div className="mt-3 p-4 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-[#f59e0b] rounded-r-md">
          <h4 className="text-sm font-bold text-[#f59e0b] dark:text-amber-300 mb-2">
            BibTeX
          </h4>
          <pre className="text-xs text-gray-700 dark:text-gray-300 font-mono overflow-x-auto whitespace-pre-wrap">
            {bibtex || "BibTeX citation not available."}
          </pre>
        </div>
      )}
    </div>
  );
};

export default PublicationButtons;
