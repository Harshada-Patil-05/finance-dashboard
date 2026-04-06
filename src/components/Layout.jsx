import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children, role, setRole }) => {
  const [open, setOpen] = useState(false); // mobile sidebar toggle

  return (
    <div className="flex h-screen overflow-hidden">

      {/* 🔥 Mobile Sidebar Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* 🔥 Sidebar */}
      <div
        className={`
          fixed z-50 inset-y-0 left-0 transform 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 
          md:translate-x-0 md:static md:block
        `}
      >
        <Sidebar />
      </div>

      {/* 🔥 Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* 🔝 Top Bar */}
        <div className="flex justify-between items-center 
                        p-4 md:p-6 
                        bg-white/80 backdrop-blur-lg 
                        shadow-md border-b">

          {/* LEFT: Menu + Title */}
          <div className="flex items-center gap-3">
            
            {/* 🍔 Hamburger (mobile only) */}
            <button
              className="md:hidden text-xl"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>

            <h1 className="text-lg md:text-xl font-semibold">
              {role === "admin" ? "Admin Dashboard" : "Viewer Dashboard"}
            </h1>
          </div>

          {/* RIGHT: Role Switch */}
          <select
            className="border px-2 md:px-3 py-1 md:py-2 rounded-lg text-sm md:text-base"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>

        </div>

        {/* 📄 Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-br from-gray-100 to-gray-200">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Layout;