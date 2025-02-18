import { useState } from "react";
import { FaUsers, FaTasks, FaBriefcase } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SocialProof = () => {
  const [stats, setStats] = useState({ users: 300, tasks: 1500, Workers: 800 });

  const data = [
    { name: "Users", value: stats.users },
    { name: "Tasks Completed", value: stats.tasks },
    { name: "Workers", value: stats.Workers },
  ];

  return (
    <section className="py-16 px-6 text-center bg-gray-100 rounded-lg shadow-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">Our Growth</h2>
        <p className="mt-3 text-lg text-gray-600">
          Empowering Workers and clients with micro-tasking opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 text-gray-700">
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaUsers className="text-5xl text-blue-500" />
            <h3 className="text-3xl font-bold mt-2">{stats.users}+</h3>
            <p className="text-lg">Active Users</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaTasks className="text-5xl text-green-500" />
            <h3 className="text-3xl font-bold mt-2">{stats.tasks}+</h3>
            <p className="text-lg">Tasks Completed</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaBriefcase className="text-5xl text-yellow-500" />
            <h3 className="text-3xl font-bold mt-2">{stats.Workers}+</h3>
            <p className="text-lg">Workers Onboarded</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Platform Statistics
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#4A90E2"
                barSize={50}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
