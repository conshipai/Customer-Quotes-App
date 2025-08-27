// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QuoteProvider } from './contexts/QuoteContext';
import MainDashboard from './components/MainDashboard';
import ExportDashboard from './components/exports/ExportDashboard';
import ImportDashboard from './components/imports/ImportDashboard';
import GroundDashboard from './components/ground/GroundDashboard';

// Export Routes
import ExportAirQuote from './components/exports/air/ExportAirQuote';
import ExportOceanQuote from './components/exports/ocean/ExportOceanQuote';

// Import Routes  
import ImportAirQuote from './components/imports/air/ImportAirQuote';
import ImportOceanQuote from './components/imports/ocean/ImportOceanQuote';

// Ground Routes
import LTLQuote from './components/ground/ltl/LTLQuote';
import FTLQuote from './components/ground/ftl/FTLQuote';
import ExpediteQuote from './components/ground/expedite/ExpediteQuote';

function App({ shellContext }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (shellContext?.isDarkMode) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, [shellContext]);

  return (
    <QuoteProvider>
      <BrowserRouter basename="/app/customer-quotes">
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <Routes>
            {/* Main Dashboard */}
            <Route path="/" element={<MainDashboard />} />
            
            {/* Export Routes */}
            <Route path="/exports" element={<ExportDashboard />} />
            <Route path="/exports/air/new" element={<ExportAirQuote />} />
            <Route path="/exports/ocean/new" element={<ExportOceanQuote />} />
            
            {/* Import Routes */}
            <Route path="/imports" element={<ImportDashboard />} />
            <Route path="/imports/air/new" element={<ImportAirQuote />} />
            <Route path="/imports/ocean/new" element={<ImportOceanQuote />} />
            
            {/* Ground Routes */}
            <Route path="/ground" element={<GroundDashboard />} />
            <Route path="/ground/ltl/new" element={<LTLQuote />} />
            <Route path="/ground/ftl/new" element={<FTLQuote />} />
            <Route path="/ground/expedite/new" element={<ExpediteQuote />} />
            
            {/* Quote Management */}
            <Route path="/quotes/:requestId" element={<QuoteDetails />} />
            <Route path="/quotes/compare" element={<QuoteComparison />} />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QuoteProvider>
  );
}

export default App;
