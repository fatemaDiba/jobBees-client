import { FaUserCircle } from "react-icons/fa";
import useUser from "../hooks/useUser";
import Title from "../components/Title";

const Profile = () => {
  const [userData, userLoading] = useUser();
  console.log(userData);
  return (
    <div>
      <Title title="Profile"></Title>
      <section className="py-16 px-6 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl flex items-center">
          {userData?.photo ? (
            <img
              src={userData.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-lg border border-gray-300"
            />
          ) : (
            <FaUserCircle className="text-gray-400 text-8xl" />
          )}
          <div className="w-2/3 text-left pl-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {userData?.displayName}
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Role: {userData?.userType}
            </p>
            <p className="text-gray-500 mt-2">{userData?.email}</p>
            <div className="mt-6">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
