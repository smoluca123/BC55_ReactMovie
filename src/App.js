// Trong một thành phần hoặc file cấu hình chính
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './styles/tailwind.css';

// Thêm icon vào thư viện
library.add(fas, far);
function App() {
  return <div></div>;
}

export default App;
