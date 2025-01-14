import { FaBriefcase, FaGlobe, FaUsers } from "react-icons/fa";
import Title from "../components/Title";

const About = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      name: "John Smith",
      role: "Head of Talent Acquisition",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Michael Lee",
      role: "Career Consultant",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];

  return (
    <div className="w-11/12 md:container xl:w-10/12 mx-auto mt-24">
      <Title title="About Us"></Title>
      {/* Who We Are Section */}
      <section className="text-center my-8 md:my-16 space-y-2">
        <div className="md:w-8/12 mx-auto space-y-2 mb-10 md:mb-12">
          <h4 className="text-lg font-semibold">About Us</h4>
          <h2 className="text-2xl md:text-3xl text-primary-new">Who We Are</h2>
          <p className="text-base md:text-lg">
            JobBees is your trusted partner in finding career opportunities and
            connecting top talent with leading employers. We bridge the gap
            between job seekers and organizations, empowering individuals and
            companies to thrive.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8 md:mt-16">
          <div className="flex items-center space-x-4 flex-col">
            <FaBriefcase className="text-primary-new text-4xl" />
            <div>
              <h4 className="font-semibold text-lg">Diverse Opportunities</h4>
              <p className="text-sm text-gray-600">
                Explore a variety of job openings across industries and
                locations.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-col">
            <FaGlobe className="text-primary-new text-4xl" />
            <div>
              <h4 className="font-semibold text-lg">Global Reach</h4>
              <p className="text-sm text-gray-600">
                Connecting talent and employers worldwide for greater
                possibilities.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-col">
            <FaUsers className="text-primary-new text-4xl" />
            <div>
              <h4 className="font-semibold text-lg">Community Driven</h4>
              <p className="text-sm text-gray-600">
                Building a network of support for job seekers and employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-light-secondary/50 py-12 rounded-lg">
        <div className="mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-new">
            Our Mission
          </h2>
          <p className="my-4 text-gray-700 text-sm md:text-base">
            To empower individuals to achieve their career aspirations and help
            businesses find the talent they need to succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-6 w-10/12 mx-auto">
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-primary-new">
                Empower Job Seekers
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Equip individuals with tools, resources, and guidance for career
                success.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-primary-new">
                Support Employers
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Provide tailored solutions to help organizations find the right
                talent.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-primary-new">
                Foster Growth
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Create an ecosystem that supports professional and
                organizational growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-new">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-lg">
            A dedicated team of professionals working to connect talent with
            opportunity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {teamMembers?.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-lg p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-lg font-semibold text-primary-new mt-4">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
