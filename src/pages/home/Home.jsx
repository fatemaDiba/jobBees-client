import JobRecommendationQuiz from "../../uniqueSection/JobRecommendationQuiz";
import Tips from "../../uniqueSection/Tips";
import Workplace from "../../uniqueSection/Workplace";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import TopWorkers from "./components/TopWorkers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopWorkers></TopWorkers>
      <Testimonials></Testimonials>
      <Workplace></Workplace>
      <JobRecommendationQuiz></JobRecommendationQuiz>
      <Tips></Tips>
    </div>
  );
};

export default Home;
