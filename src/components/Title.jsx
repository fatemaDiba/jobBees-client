import { Helmet } from "react-helmet-async";
const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title}`}-JobBees</title>
    </Helmet>
  );
};

export default Title;
