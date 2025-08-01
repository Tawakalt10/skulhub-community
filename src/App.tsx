import React from 'react';
import Sidebar from './components/landingpage/Sidebar';
import Feed from './components/landingpage/Feed';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    
      <div className="flex flex-1">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;