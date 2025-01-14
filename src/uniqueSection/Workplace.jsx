import {
  FaBell,
  FaMoneyBill,
  FaShieldAlt,
  FaQuestionCircle,
  FaGlobe,
  FaWifi,
} from "react-icons/fa";

const Workplace = () => {
  const features = [
    {
      icon: <FaGlobe className="text-4xl  fill-light-accent" />,
      title: "Find the Right Job",
      description:
        "No matter where you are or how much time you have, JobBees ensures you find the perfect job tailored to your needs.",
    },
    {
      icon: <FaBell className="text-4xl fill-light-accent" />,
      title: "Never Miss a Job",
      description:
        "Activate push notifications to get instant alerts for new opportunities. You'll always be the first to know.",
    },
    {
      icon: <FaMoneyBill className="text-4xl fill-light-accent" />,
      title: "Track Your Earnings",
      description:
        "Monitor your account balance and see exactly how much you’ve earned, anytime, anywhere.",
    },
    {
      icon: <FaWifi className="text-4xl fill-light-accent" />,
      title: "Work Offline",
      description:
        "Each accepted job is reserved for a fixed time, so you can work offline and submit when you're back online.",
    },
    {
      icon: <FaShieldAlt className="text-4xl fill-light-accent" />,
      title: "Secure Environment",
      description:
        "We prioritize your data security, ensuring a safe environment for you to focus on your work without worries.",
    },
    {
      icon: <FaQuestionCircle className="text-4xl fill-light-accent" />,
      title: "Dedicated Support",
      description:
        "Our helpdesk is here to assist you with any queries or concerns, ensuring a smooth experience on JobBees.",
    },
  ];

  return (
    <div className="w-11/12 md:container xl:w-10/12 mx-auto mt-16 mb-16">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center text-light-text mb-3">
        Workplace Features
      </h1>
      <p className="text-center text-gray-700 mb-10">
        Explore the features that make JobBees the perfect platform to find and
        manage your work opportunities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 shadow-light-accent"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-primary-new mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workplace;
