import Title from "../../../components/Title";
import ApprovedSubmissions from "./components/ApprovedSubmissions";
import WorkerDash from "./components/WorkerDash";

const WorkerHome = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <Title title="Worker-Home"></Title>
      <div>
        <WorkerDash></WorkerDash>
        <ApprovedSubmissions></ApprovedSubmissions>
      </div>
    </div>
  );
};

export default WorkerHome;
