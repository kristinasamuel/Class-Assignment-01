// Navbar 
// Placed navbar in layout.tsx file 
//import links
import Link from "next/link";

export default function Navbar() {
  return (
    <>
    {/* navbar */}
      <nav className=" flex flex-grow text-center justify-center p-2">
        {/* unordered list , set space between the list items */}
        <ul className="flex space-x-4 uppercase ">
          {/* list items ,hover effects on list items */}
          <li className=" hover:text-red-700">
            <Link href={"/"}>home</Link>
          </li>
          <li className=" hover:text-red-700">
            <Link href={"/about"}>about </Link>
          </li>
          <li className=" hover:text-red-700">
            <Link href={"/project"}>project</Link>
          </li>
          <li className=" hover:text-red-700">
            <Link href={"/contact"}> contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
