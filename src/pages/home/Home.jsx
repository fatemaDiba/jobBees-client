import JobRecommendationQuiz from "../../uniqueSection/JobRecommendationQuiz";
import Tips from "../../uniqueSection/Tips";
import Workplace from "../../uniqueSection/Workplace";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
import SocialProof from "./components/SocialProof";
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
      <SocialProof></SocialProof>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
