import ProjectsList from "./_components/projects";
import TechnicalSkill from "./_components/technical";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full py-4 max-w-2xl mx-auto">
      {/* Always two columns, text on left, pic on right */}
      <div className="flex items-start justify-between">
        {/* Left: text takes ~2/3 */}
        <div className="w-2/3 pr-4">
          <div className="text-black text-base leading-tight">
            <span>
              This is the homepage of <span className="font-bold">Aman Sharma</span>.
            </span>
            <br />
            <hr className="m-.5 border-transparent" />
            <span>
              Software Engineer at <span className="font-bold">Microsoft</span>
              <img
                src="/microsoft_logo.png"
                alt="Microsoft Logo"
                className="inline-block h-5 w-5 ml-1 align-text-bottom"
              />
            </span>
            <br />
            <hr className="m-.5 border-transparent" />
            <span>
              <span className="font-bold ">Knight</span> at LeetCode
              <img
                src="/leetcode_logo.png"
                alt="LeetCode Logo"
                className="inline-block h-5 w-5 ml-1 align-text-bottom"
              />
            </span>
            <br />
            <hr className="m-.5 border-transparent" />
            <span>
              Experienced in backend (Go) and frontend (React.js, Next.js) development.
            </span>
          </div>
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
      <div className="mt-2">
        <ProjectsList />
      </div>
      <div className="mt-2">
        <TechnicalSkill />
      </div>
    </div>
  );
}

