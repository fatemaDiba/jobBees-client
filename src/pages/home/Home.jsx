import JobRecommendationQuiz from "../../uniqueSection/JobRecommendationQuiz";
import Tips from "../../uniqueSection/Tips";
import Workplace from "../../uniqueSection/Workplace";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Testimonials></Testimonials>
      <Workplace></Workplace>
      <JobRecommendationQuiz></JobRecommendationQuiz>
      <Tips></Tips>
    </div>
  );
};

export default Home;
