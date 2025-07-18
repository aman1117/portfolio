import ProjectsList from "./_components/projects";
import TechnicalSkill from "./_components/technical";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full py-4 max-w-2xl mx-auto">
      {/* Always two columns, text on left, pic on right */}
      <div className="flex items-start justify-between">
        {/* Left: text takes ~2/3 */}
        <div className="w-2/3 pr-4 mt-2">
          <p className="text-black text-base leading-tight">
            This is the homepage of <span className="font-bold">Aman Sharma</span>.<br/>
            Software Engineer at <span className="font-bold">Ethos</span>
            <img
              src="/ethos_logo.jpg"
              alt="Ethos Logo"
              className="inline-block h-5 w-5 ml-1 align-text-bottom"
            />
            <br/>
            <span className="font-bold">Knight</span> at LeetCode
            <img
              src="/leetcode_logo.png"
              alt="LeetCode Logo"
              className="inline-block h-5 w-5 ml-1 align-text-bottom"
            />
            <br/>
            Experienced in backend (Go) and frontend (React.js, Next.js) development.
          </p>
        </div>

        {/* Right: profile pic takes ~1/3 */}
        <div className="w-1/3 flex justify-end mt-2">
          <img
            src="/aman.jpeg"
            alt="Aman Sharma"
            className="w-28 h-28 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Rest of your page */}
      <div className="mt-4">
        <ProjectsList />
      </div>
      <div className="mt-2">
        <TechnicalSkill />
      </div>
    </div>
  );
}

