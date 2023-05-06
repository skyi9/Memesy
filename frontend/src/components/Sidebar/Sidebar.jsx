import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../../utils/Sidebar/utils";
import PropTypes from "prop-types";

const SidebarButtons = ({ buttonLabel, fontAwesomeIconClass, to }) => {
  const isActive = useLocation().pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center ${isActive
        ? "bg-purple-700 hover:bg-purple-800"
        : "bg-red-700 hover:bg-red-800"
        } text-white font-bold py-2 pl-16 rounded-full mb-4 w-full`}
    >
      <i className={fontAwesomeIconClass} />
      <span className="flex-grow text-left">{buttonLabel}</span>
    </Link>
  );
};

SidebarButtons.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  fontAwesomeIconClass: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const Sidebar = () => {
  return (
    // <div className="h-full flex ">
    <div className="flex flex-col h-full justify-between shadow-md w-full overflow-hidden bg-white">
      <div className="p-4">
        {sidebarItems.map((item) => (
          <SidebarButtons
            key={item.id}
            buttonLabel={item.buttonLabel}
            to={item.to}
            fontAwesomeIconClass={item.fontAwesomeIconClass}
          />
        ))}
      </div>
      <div className="p-4">
        <div className="flex items-center bg-white w-full rounded-lg shadow p-2">
          <div className="flex-shrink-0">
            <img src="https://picsum.photos/id/237/40/40" alt="Profile Picture" className="w-12 h-12 rounded-full" />
          </div>
          <div className="ml-3">
            <h4 className="text-gray-900 font-semibold">Username</h4>
            <p className="text-gray-500 text-sm">Handle</p>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Sidebar;
