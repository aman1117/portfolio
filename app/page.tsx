import ProjectsList from "./_components/projects";
import TechnicalSkill from "./_components/technical";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full py-4 max-w-2xl mx-auto">
      <div>
        <p className="text-black md:text-lg md:leading-5 leading-tight">
          This is the homepage of Aman Sharma, a 4th year BTech CSE student.<br />
          <span className="font-bold">
            Knight
          </span> at LeetCode with a passion for competitive programming.
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
