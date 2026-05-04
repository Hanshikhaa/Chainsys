import React from 'react';
import { AppProvider } from './context/AppContext';
import { useAppContext } from './context/useAppContext';
import { useLocation, BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/shop/Home';
import Products from './pages/shop/Products';
import ProductDetail from './pages/shop/ProductDetail';
import Cart from './pages/shop/Cart';
import Checkout from './pages/shop/Checkout';
import Payment from './pages/shop/Payment';
import Orders from './pages/shop/Orders';
import Returns from './pages/shop/Returns';
import Inventory from './pages/shared/Inventory';
import Vendors from './pages/shared/Vendors';
import About from './pages/shop/About';
import Login from './pages/shop/Login';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminOverview from './pages/admin/AdminOverview';
import AdminUpload from './pages/admin/AdminUpload';
import AdminInquiries from './pages/admin/AdminInquiries';
import AdminFeedback from './pages/admin/AdminFeedback';
import AdminLayout from './components/layout/AdminLayout';
import Wishlist from './pages/shop/Wishlist';
import Profile from './pages/shop/Profile';
import Contact from './pages/shop/Contact';
import ChatWidget from './components/features/chat/ChatWidget';
import GlobalNotification from './components/layout/GlobalNotification';
import ScrollToTop from './components/layout/ScrollToTop';
import JobRollingBanner from './components/features/jobs/JobRollingBanner';
import CareerResponseNotifier from './components/features/jobs/CareerResponseNotifier';

const UserLayout = () => {
  const { user } = useAppContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role === 'admin' && location.pathname !== '/admin') {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="app">
      <JobRollingBanner />
      <CareerResponseNotifier />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <GlobalNotification />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Public Storefront Routes with standard Header/Footer */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
            <Route path="orders" element={<Orders />} />
            <Route path="returns" element={<Returns />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="about" element={<About />} />
            <Route path="categories" element={<Home />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="profile" element={<Profile />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Standalone Admin Login (No Header/Footer) */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Secure Admin Dashboard Routes (Unique UI, No Header/Footer) */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminOverview />} />
            <Route path="catalog" element={<AdminDashboard />} />
            <Route path="upload" element={<AdminUpload />} />
            <Route path="inquiries" element={<AdminInquiries />} />
            <Route path="feedback" element={<AdminFeedback />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="vendors" element={<Vendors />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
