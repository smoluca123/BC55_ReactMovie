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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
