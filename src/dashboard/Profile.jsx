import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <section className="py-16 px-6 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl flex items-center">
        <div className="w-1/3 flex justify-center">
          <FaUserCircle className="text-gray-500 text-8xl" />
        </div>
        <div className="w-2/3 text-left pl-6">
          <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
          <p className="text-lg text-gray-600 mt-2">Software Developer</p>
          <p className="text-gray-500 mt-2">johndoe@example.com</p>
          <div className="mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
