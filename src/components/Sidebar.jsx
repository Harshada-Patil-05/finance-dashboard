import { NavLink } from "react-router-dom";
import { FaHome, FaExchangeAlt, FaChartPie } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col">
      <h2 className="text-xl font-bold mb-8">Finance Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            <FaHome />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            <FaExchangeAlt />
            Transactions
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            <FaChartPie />
            Insights
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;