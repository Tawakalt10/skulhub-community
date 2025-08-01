import React from 'react';

const Feed: React.FC = () => {
  return (
    <main className="w-3/4 p-4">
      {/* Post Creation */}
      <div className="bg-white p-4 mb-4 rounded-lg shadow">
        <textarea
          className="w-full p-2 border rounded mb-2 text-gray-700"
          placeholder="What's on your mind?"
        />
        <div className="flex justify-end space-x-2">
          <button className="text-blue-500 hover:underline">Photo</button>
          <button className="text-blue-500 hover:underline">Video</button>
          <button className="text-blue-500 hover:underline">Document</button>
          <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
            Post
          </button>
        </div>
      </div>

      {/* Sample Post 1 */}
      <div className="bg-white p-4 mb-4 rounded-lg shadow">
        <div className="flex items-center mb-2">
         Clients <img
            src="https://via.placeholder.com/40" // Replace with profile pic
            alt="Profile"
            className="h-10 w-10 rounded-full mr-2"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-700">Mike Chen</h4>
            <p className="text-xs text-gray-500">UX Designer at DesignStudio • about 4h ago</p>
          </div>
        </div>
        <p className="text-gray-700 mb-2">
          Working on a new design system for our team. The challenge is balancing consistency with flexibility. How do you handle component variations in your design systems?
        </p>
        <div className="flex space-x-4 text-sm text-gray-500">
          <button>❤️ 18</button>
          <button>💬 12</button>
          <button>↗️ 5</button>
        </div>
      </div>

      {/* Sample Post 2 */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-2">
          <img
            src="https://via.placeholder.com/40" // Replace with profile pic
            alt="Profile"
            className="h-10 w-10 rounded-full mr-2"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-700">Alex Rodriguez</h4>
            <p className="text-xs text-gray-500">Product Manager at StartupXYZ • about 6h ago</p>
          </div>
        </div>
        <p className="text-gray-700 mb-2">
          Just finished reading 'The Design of Everyday Things' by Don Norman. Such valuable insights on user-centered design! Highly recommend it to anyone working in product development.
        </p>
        <div className="flex space-x-4 text-sm text-gray-500">
          <button>❤️ 31</button>
          <button>💬 6</button>
          <button>↗️ 9</button>
        </div>
      </div>
    </main>
  );
};

export default Feed;