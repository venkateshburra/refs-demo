import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoprojectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="an emty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-4">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
