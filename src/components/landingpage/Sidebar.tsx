import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4 p-4 bg-gray-100 min-h-screen">
      {/* User Profile Section */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <img
          src="https://via.placeholder.com/40" // 
          alt="Profile"
          className="h-10 w-10 rounded-full mb-2"
        />
        <h3 className="text-lg font-semibold text-gray-700">John Doe</h3>
        <p className="text-sm text-gray-500">Senior Software Engineer</p>
        <p className="text-sm text-gray-700">1,234 Connections • 89 Posts</p>
      </div>

      {/* People You May Know */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">People You May Know</h3>
        <ul className="space-y-2">
          <li className="flex items-center justify-between text-sm">
            <span>Sarah Johnson (12 mutual)</span>
            <button className="text-blue-500 hover:underline">Connect</button>
          </li>
          <li className="flex items-center justify-between text-sm">
            <span>Mike Chen (8 mutual)</span>
            <button className="text-blue-500 hover:underline">Connect</button>
          </li>
          <li className="flex items-center justify-between text-sm">
            <span>Alex Rodriguez (15 mutual)</span>
            <button className="text-blue-500 hover:underline">Connect</button>
          </li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="p-4 bg-white rounded-lg shadow">
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-700">
            <span role="img" aria-label="Events" className="mr-2">📅</span> Events
          </li>
          <li className="flex items-center text-sm text-gray-700">
            <span role="img" aria-label="Saved Posts" className="mr-2">🔖</span> Saved Posts
          </li>
          <li className="flex items-center text-sm text-gray-700">
            <span role="img" aria-label="Groups" className="mr-2">👥</span> Groups
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;