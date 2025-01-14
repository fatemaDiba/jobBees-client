import { FaRegLifeRing, FaLaptop, FaHandPeace } from "react-icons/fa";

const Tips = () => {
  const tips = [
    {
      icon: <FaRegLifeRing className="fill-light-accent  text-4xl" />,
      title: "Stress Management Techniques",
      description:
        "Learn various techniques such as deep breathing, meditation, and mindfulness to manage stress effectively.",
      link: "https://www.mentalhealth.org.uk/explore-mental-health/publications/our-best-mental-health-tips",
    },
    {
      icon: <FaLaptop className="fill-light-accent  text-4xl" />,
      title: "Remote Work Tips",
      description:
        "Find out how to set up a productive remote workspace, establish work hours, and avoid burnout while working from home.",
      link: "https://www.indeed.com/career-advice/career-development/tips-for-working-remotely",
    },
    {
      icon: <FaHandPeace className="fill-light-accent text-4xl" />,
      title: "Mental Health Resources",
      description:
        "Access resources to support your mental well-being, including professional help, stress-relief apps, and online communities.",
      link: "https://www.mentalhealth.org.uk/explore-mental-health/publications/our-best-mental-health-tips",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 pb-20">
      <div className=" w-11/12 md:container xl:w-10/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary-new">
            Your Well-being Matters
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Find tips and resources to maintain a healthy work-life balance and
            nurture your mental well-being.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="hover:scale-110 transition-transform delay-100 ease-in-out bg-white shadow-xl rounded-lg p-4 flex flex-col items-center text-center"
            >
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-primary-new">
                {tip.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{tip.description}</p>
              <a
                href={tip.link}
                target="_blank"
                className="mt-4 inline-block text-light-primary hover:text-blue-700 font-semibold"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
