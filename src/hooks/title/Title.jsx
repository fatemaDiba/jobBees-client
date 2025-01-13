import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{}-JobBees</title>
    </Helmet>
  );
};

export default Title;
