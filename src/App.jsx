import React, { useEffect, useState } from 'react';
import { Package } from 'lucide-react';

function App({ shellContext }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (shellContext?.isDarkMode) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, [shellContext]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Package className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Customer Quote Portal
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Deployment test successful! Shell context: {shellContext ? 'Connected' : 'Standalone'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
