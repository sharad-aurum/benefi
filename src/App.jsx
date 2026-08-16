import ScrollToTop from './components/ScrollToTop';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
	return (
		<BrowserRouter>
      <ScrollToTop />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="pricing" element={<HomePage />} /> {/* Fallback to home anchor */}
          <Route path="faq" element={<HomePage />} /> {/* Fallback to home anchor */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;