import ScrollToTop from './components/ScrollToTop';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ComingSoonPage from './pages/ComingSoonPage';
import ForEmployersPage from './pages/ForEmployersPage';
import ForEmployeesPage from './pages/ForEmployeesPage';
import SecurityPage from './pages/SecurityPage';

function App() {
	return (
		<BrowserRouter>
      <ScrollToTop />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="careers" element={<ComingSoonPage page="careers" />} />
          <Route path="blog" element={<ComingSoonPage page="blog" />} />
          <Route path="press" element={<ComingSoonPage page="press" />} />
          <Route path="for-employers" element={<ForEmployersPage />} />
          <Route path="for-employees" element={<ForEmployeesPage />} />
          <Route path="security" element={<SecurityPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
