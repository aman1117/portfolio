import ProjectsList from "./_components/projects";
import TechnicalSkill from "./_components/technical";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full py-4 max-w-2xl mx-auto">
      <div>
        <p className="text-black md:text-lg md:leading-5 leading-tight">
          This is the homepage of <span className="font-bold"> Aman Sharma</span>. <br/> Software Engineer at  <span className="font-bold">Ethos</span><img src="/ethos_logo.jpg" alt="Ethos Logo" className="inline-block h-5 w-5 ml-1 align-text-bottom" /><br />
          <span className="font-bold">
            Knight
          </span> at LeetCode<img src="/leetcode_logo.png" alt="LeetCode Logo" className="inline-block h-5 w-5 ml-1 align-text-bottom" />
          <br />
          Experienced in backend (Go) and frontend (React.js, Next.js) development.
        </p>
      </div>
      <div className="mt-4">
        <ProjectsList />
      </div>
      <div className="mt-2">
        <TechnicalSkill />
      </div>
    </div>
  );
}
