import React from "react";
import { Link } from "react-router";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[500px] mx-auto">
      <div className="flex  justify-between mt-10">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="w-full mx-auto">{children}</div>
    </div>
  );
};

export default MainLayout;
