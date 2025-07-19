import ProjectsList from "./_components/projects";
import TechnicalSkill from "./_components/technical";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full py-4 max-w-2xl mx-auto">
      {/* Always two columns, text on left, pic on right */}
      <div className="flex items-start justify-between border-1 border-black-500  p-4 shadow-md bg-white  ">
        {/* Left: text takes ~2/3 */}
        <div className="w-2/3 pr-4">
          <p className="text-black text-base leading-tight">
            This is the homepage of <span className="font-bold">Aman Sharma</span>.<br/>
            <hr className="m-.5 border-transparent" />
            Software Engineer at <span className="font-bold">Ethos</span>
            <img
              src="/ethos_logo.jpg"
              alt="Ethos Logo"
              className="inline-block h-5 w-5 ml-1 align-text-bottom"
            />
            <br/>
            <hr className="m-.5 border-transparent" />
            <span className="font-bold ">Knight</span> at LeetCode
            <img
              src="/leetcode_logo.png"
              alt="LeetCode Logo"
              className="inline-block h-5 w-5 ml-1 align-text-bottom"
            />
            <br/>
            <hr className="m-.5 border-transparent" />
            <span className="font-bold text-[#808080]">Newbie</span> at Codeforces 
            <img
              src="/codeforces_logo.png"
              alt="Codeforces Logo"
              className="inline-block h-5 w-5 ml-1 align-text-bottom"
            />
            <br/>
            <hr className="m-.5 border-transparent" />
            Experienced in backend (Go) and frontend (React.js, Next.js) development.
          </p>
        </div>

        {/* Right: profile pic takes ~1/3 */}
        <div className="w-1/3 flex justify-end">
          <img
            src="/aman.jpeg"
            alt="Aman Sharma"
            className="w-28 h-28 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Rest of your page */}
      <div className="mt-4 border-1 border-black-500  p-4 shadow-md bg-white ">
        <ProjectsList />
      </div>
      <div className="mt-2 border-1 border-black-500  p-4 shadow-md bg-white ">
        <TechnicalSkill />
      </div>
    </div>
  );
}

