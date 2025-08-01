import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">SchoolCommunity Hub</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-secondary">About Us</a>
          <a href="#" className="hover:text-secondary">Contact</a>
          <a href="#" className="hover:text-secondary">Privacy Policy</a>
        </div>
        <p className="mt-4 text-sm">© 2025 SchoolCommunity Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;