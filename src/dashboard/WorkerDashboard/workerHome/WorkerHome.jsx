import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import useAxios from "../../../hooks/useAxios";
import ApprovedSubmissions from "./components/ApprovedSubmissions";
import WorkerDash from "./components/WorkerDash";

const WorkerHome = () => {
  // const axiosBase = useAxios();
  // const { data: allSubmission } = useQuery();

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
