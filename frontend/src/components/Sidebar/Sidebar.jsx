import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../../utils/Sidebar/utils";
import PropTypes from "prop-types";

const SidebarButtons = ({ buttonLabel, fontAwesomeIconClass, to }) => {
  const isActive = useLocation().pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center ${
        isActive
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
    <div className="h-screen flex overflow-hidden bg-white">
      <div className="flex-shrink-0 shadow-md w-full">
        <div className="p-4 mt-auto">
          {sidebarItems.map((item) => (
            <SidebarButtons
              key={item.id}
              buttonLabel={item.buttonLabel}
              to={item.to}
              fontAwesomeIconClass={item.fontAwesomeIconClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
