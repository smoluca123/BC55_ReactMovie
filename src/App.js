// Trong một thành phần hoặc file cấu hình chính
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

//Material UI Config
import materialConfig from './config/material.config';
import { ThemeProvider } from '@mui/material/styles';

//Import tailwind css
import './styles/tailwind.css';
import AppLayout from './Components/AppLayout';

//Slick React
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

// Thêm icon vào thư viện
library.add(fas, far);
function App() {
  return (
    <ThemeProvider theme={materialConfig}>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
