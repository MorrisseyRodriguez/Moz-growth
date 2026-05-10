import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ExoticCarPage from './components/ExoticCarPage';
import LimoPage from './components/LimoPage';

export type ActiveTab = 'exotic' | 'limo';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('exotic');

  return (
    <div className="bg-dark-900 text-white overflow-x-hidden pb-24 md:pb-0">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div key={activeTab} className="animate-tab-fade">
        {activeTab === 'exotic' ? <ExoticCarPage /> : <LimoPage />}
      </div>
    </div>
  );
}

export default App;
