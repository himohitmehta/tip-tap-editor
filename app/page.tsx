import Image from "next/image";
import TipTapEditor from "components/TipTapEditor";
import Editor from "ui/editor";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
      <Editor />
      {/* <TipTapEditor /> */}
    </div>
  );
}
