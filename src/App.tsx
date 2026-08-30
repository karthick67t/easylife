import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider, useAccessibility } from './context/AccessibilityContext';
import { LanguageProvider } from './context/LanguageContext';
import { AppProvider } from './context/AppContext';

// Layout & Components
import { Header } from './components/Header';
import { PersistentBottomBar } from './components/PersistentBottomBar';
import { OnboardingModal } from './components/OnboardingModal';
import { ImStuckModal } from './components/ImStuckModal';
import { EmergencyModal } from './components/EmergencyModal';
import { ShowMeOverlay } from './components/ShowMeOverlay';
import { ExplainThisModal } from './components/ExplainThisModal';
import { ConfidenceCheckModal } from './components/ConfidenceCheckModal';
import { HackathonDemoBar } from './components/HackathonDemoBar';

// Pages
import { Home } from './pages/Home';
import { PromptLab } from './pages/PromptLab';
import { ProblemPage } from './pages/ProblemPage';
import { UserResearch } from './pages/UserResearch';
import { GuidedDemoPage } from './pages/GuidedDemoPage';
import { Healthcare } from './pages/Healthcare';
import { MoneyBanking } from './pages/MoneyBanking';
import { Travel } from './pages/Travel';
import { GovernmentServices } from './pages/GovernmentServices';
import { EmergencyPage } from './pages/EmergencyPage';
import { TrustedCircle } from './pages/TrustedCircle';
import { MyDay } from './pages/MyDay';
import { ScamShield } from './pages/ScamShield';
import { AccessibilitySettingsPage } from './pages/AccessibilitySettings';
import { HelpCenter } from './pages/HelpCenter';
import { WhyWeBuilt } from './pages/WhyWeBuilt';
import { DesignPrinciples } from './pages/DesignPrinciples';
import { AccessibilityAudit } from './pages/AccessibilityAudit';

const AppContent: React.FC = () => {
  const { language } = useAccessibility();

  return (
    <LanguageProvider language={language}>
      <AppProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#101814] selection:bg-[#16834B] selection:text-white">
            {/* Sticky 90-Sec Hackathon Pitch Demo Bar */}
            <HackathonDemoBar />

            {/* Accessible Header */}
            <Header />

            {/* Interactive Show Me Guided Tour Overlay */}
            <ShowMeOverlay />

            {/* Main Content Area */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 mb-24 focus:outline-none" tabIndex={-1}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prompt-lab" element={<PromptLab />} />
                <Route path="/problem" element={<ProblemPage />} />
                <Route path="/research" element={<UserResearch />} />
                <Route path="/demo" element={<GuidedDemoPage />} />
                <Route path="/healthcare" element={<Healthcare />} />
                <Route path="/money" element={<MoneyBanking />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/government" element={<GovernmentServices />} />
                <Route path="/emergency" element={<EmergencyPage />} />
                <Route path="/family" element={<TrustedCircle />} />
                <Route path="/my-day" element={<MyDay />} />
                <Route path="/scam-shield" element={<ScamShield />} />
                <Route path="/accessibility" element={<AccessibilitySettingsPage />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/why-we-built" element={<WhyWeBuilt />} />
                <Route path="/design-principles" element={<DesignPrinciples />} />
                <Route path="/accessibility-audit" element={<AccessibilityAudit />} />
              </Routes>
            </main>

            {/* Modals & Overlays */}
            <OnboardingModal />
            <ImStuckModal />
            <EmergencyModal />
            <ExplainThisModal />
            <ConfidenceCheckModal />

            {/* Persistent Accessibility Bottom Action Bar */}
            <PersistentBottomBar />
          </div>
        </Router>
      </AppProvider>
    </LanguageProvider>
  );
};

export const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <AppContent />
    </AccessibilityProvider>
  );
};

export default App;
