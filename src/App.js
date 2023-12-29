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
            <Route path="/details/:moveId" element={<Detail />} />
            <Route path="user" element={<User />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
