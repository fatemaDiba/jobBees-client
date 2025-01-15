import { FaBars } from "react-icons/fa";

const Sidebar = ({ handleSidebar }) => {
  return (
    <div>
      <FaBars onClick={handleSidebar}></FaBars>
      Sidebar
    </div>
  );
};

export default Sidebar;
