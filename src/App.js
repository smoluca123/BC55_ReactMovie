import { BrowserRouter, Routes, Route } from 'react-router-dom';

// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

//Material UI Config
import materialConfig from './config/material.config';
import { ThemeProvider } from '@mui/material/styles';

// Import Components
import Home from './modules/home/pages/Home';

//Import tailwind css
import './styles/tailwind.css';

import MainLayout from './modules/layout/pages/MainLayout';
import NotFound from './Components/NotFound/NotFound';
import User from './modules/user/pages/User';
import Login from './modules/user/components/Login';
import SignUp from './modules/user/components/SignUp';
import PrivateRoute from './routers/PrivateRoute';
import Profile from './modules/profile/pages/Profile';
import Detail from './modules/details/pages/Detail';
import Purchase from './modules/purchase/pages/Purchase';
import HistoryBooking from './modules/history/pages/HistoryBooking';
import Admin from './modules/admin/pages/Admin';
import AdminLayout from './modules/layout/pages/AdminLayout';
import PrivateAdminRoute from './routers/PrivateAdminRoute';
import MovieManagement from './modules/admin/components/MovieManagement';

// Thêm icon vào thư viện
library.add(fas, far);
function App() {
  return (
    <ThemeProvider theme={materialConfig}>
      <BrowserRouter>
        {/* Router */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* Add bí danh vào path cho đẹp */}
            <Route path="/details/:biDanh/:movieId" element={<Detail />} />
            <Route path="user" element={<User />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route
                path="history"
                element={
                  <PrivateRoute>
                    <HistoryBooking />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/purchase/:maLichChieu"
              element={
                <PrivateRoute>
                  <Purchase />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route
            path="/admin"
            element={
              <PrivateAdminRoute>
                <AdminLayout />
              </PrivateAdminRoute>
            }
          >
            <Route index element={<Admin />} />
            <Route path="movie-management" element={<MovieManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
