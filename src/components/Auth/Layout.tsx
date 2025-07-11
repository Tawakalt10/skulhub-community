import React, { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  position?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, position }) => {
  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      {/* Left section: logo + image */}
      <div className="flex flex-col justify-center items-center bg-white p-4">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="logo"
            width={215}
            height={124}
            className="mb-6"
          />
        </a>
        <img
          src="/images/students.png"
          alt="students"
          width={450}
          height={547}
        />
      </div>

      {/* Right section: auth form */}
      <div
        className={`bg-[#1261B2] p-9 h-full flex flex-col justify-center ${
          position ?? "items-center"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
