import { link } from "fs";
import { links } from "./_documents/data";
import Image from "next/image";
export default function Home() {
  return (
    <main className="md:mx-10">
      {/* SET THE MAX WIDTH FOR THE CONTENT IN DESKTOP BREAKPOINT */}
      {/* CONTAINER SET WITH BREAKPOINT MAKE THE MAX-WIDTH:BREAKPOINT */}
      <div className="flex gap-y-5 flex-col items-center justify-center bg-pink-50 xl:max-w-[1200px] xl:mx-auto">
        <h1>HEADING</h1>
        {/* USE ARBITRARY VALUE TO CREATE CUSTOM VALUE */}
        {/* USE ARBITRARY VARIANT TO CREATE CUSTOM CLASS FOR CHILD ELEMENTS */}
        {/* IF YOU DO NOT WANT TAILWIND TO CONVERT _ TO SPACE, USE \_ */}
        <ul className="bg-[blue] [&_li]:text-pink-500">
          {/* USE ARBITRARY VARIANT TO CREATE CUSTOM CLASS FOR NTH CHILD */}
          <li className="[&:nth-child(2)]:text-red-500">1</li>
          <li className="[&:nth-child(2)]:text-red-500">2</li>
          <li className="[&:nth-child(2)]:text-red-500">3</li>
        </ul>
        <input type="text" />
        {/* CONTAINER SET INDIVIDUALLY MAKE THE WIDTH:100% */}
        <button className="btn-red border-red-400 border container">
          Button
        </button>
        {/* <p className="hover:break-before-column">
          Break page before this p tag when hover
        </p> */}
        {/* USE COLUMNS TO SHOW IMAGES WITH DIFFERENT RATIOS*/}
        {/* SET COLUMN NUMBER AND GAP */}
        {/* USE BREAK BEFORE AND BREAK AFTER COLUMN TO CREATE A NEW COLUMN */}
        <div className="gap-[7.5px] columns-3 w-full">
          <img
            className="w-full border-red-400 border-2 hover:break-after-column "
            src={links[0]}
          />
          <img className="w-full  border-green-400 border-2" src={links[0]} />
          <img
            className="w-full aspect-video  border-blue-400 border-2"
            src={links[1]}
          />
          <img className="w-full border-pink-400 border-2" src={links[0]} />
          <img className="w-full " src={links[0]} />
        </div>
        {/* FLEX */}
        <div className="flex justify-between items-start">
          <img className="w-[calc(100%/3-5px)]" src={links[0]} />
          <img className="w-[calc(100%/3-5px)]" src={links[1]} />
          <img className="w-[calc(100%/3-5px)]" src={links[0]} />
        </div>
        {/* FLEX */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <img className="w-full" src={links[0]} />
          </div>

          <div className="flex-1">
            <img className="w-full" src={links[1]} />
          </div>

          <div className="flex-1">
            <img className="w-full" src={links[0]} />
          </div>
        </div>

        {/* USE INLINE FLEX TO CREATE FLEX CONTAINER IN THE TEXT FLOW */}
        <p>
          <span className="inline-flex items-center gap-1">
            I am{" "}
            <Image
              priority={false}
              src={links[2]}
              alt="avatar"
              loading="lazy"
              //SHOW BLURDATA WHEN WAITING FOR THE IMAGE
              // placeholder="blur"
              // blurDataURL={links[0]}
              width={30}
              height={30}
            />
          </span>
          . I am a good developer.
        </p>
      </div>
    </main>
  );
}
