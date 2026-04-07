import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload, MdArrowBack } from "react-icons/md";

const MobilePDFViewer = ({ pdfUrl }) => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-4 space-y-6">
      {/* Back to Home Button */}
      <div className="w-full flex justify-start">
        <Link
          to="/"
          className="px-5 py-2 bg-card/80 backdrop-blur-xl border border-brand/20 rounded-full flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
        >
          <MdArrowBack className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* PDF Container */}
      <div className="w-full aspect-[1/1.41] bg-card rounded-2xl overflow-hidden border border-border shadow-2xl relative">
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          title="Resume Preview"
          className="w-full h-full border-none min-w-full"
        />
      </div>
      
      {/* Download Button */}
      <a
        href={pdfUrl}
        download
        className="px-8 py-3 bg-card/80 backdrop-blur-xl border border-brand/20 rounded-full flex items-center gap-3 text-brand font-semibold shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <MdOutlineFileDownload className="w-6 h-6" />
        Download Resume
      </a>
    </div>
  );
};

export default MobilePDFViewer;
