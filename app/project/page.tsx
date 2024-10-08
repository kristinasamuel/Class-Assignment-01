// import links from next
import Link from "next/link";
//  Project Page
export default function ProjectPage() {
  return (
    <>
      {/* give style to the text and align items center of the screen */}
      <div className="flex items-center justify-center h-screen ">
        <div>
          {/* heading */}
          <h1 className="font-bold text-3xl"> My Projects</h1>
          <p className="text-xl italic mb-4">
            Click here to view nested page.
          </p>
          {/* link nested page (MY latest Project), give specific color,text-size and hover effect */}
          <Link
            href={"/project/latestproject"}
            className=" text-xl bg-black text-white hover:bg-slate-900 p-2 rounded-lg"
          >
          Explore Now
          </Link>
        </div>
      </div>
    </>
  );
}
