import Title from "../../../components/Title";
import SubmissionTable from "./components/SubmissionTable";

const MySubmission = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <Title title="My Submissions"></Title>
      <div>
        <SubmissionTable></SubmissionTable>
      </div>
    </div>
  );
};

export default MySubmission;
