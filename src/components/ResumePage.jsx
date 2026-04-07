import React from "react";
import MobilePDFViewer from "./MobilePDFViewer";

const ResumePage = () => {
  const pdfUrl = "/ABHIJEET_GAUTAM_SDE.pdf";

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto pt-20 md:pt-0">
      <div className="md:hidden">
        <MobilePDFViewer pdfUrl={pdfUrl} />
      </div>
      <div className="hidden md:block w-full h-full">
        <iframe
          src={pdfUrl}
          title="Resume"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

export default ResumePage;
