import { FileDown } from "lucide-react";
export const DownloadCVButton = () => {
  return (
    <a
      href="/cv.pdf"
      download="CV-HUYNH_TAN_PHAT.pdf"
      className="w-full lg:w-fit rounded-full bg-primary/20 py-1 px-3 text-sm font-semibold flex gap-1 items-center  cursor-pointer"
    >
      <FileDown className="size-5" />
      My CV
    </a>
  );
};
