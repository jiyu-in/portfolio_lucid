import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import ParallaxSection from './component/ParallaxSection';
import Lms from './page/projects/OnlineEduSystem';


function App() {
  const BASE_URL = import.meta.evn.BASE_URL;
  
  return (
    <Router basename={BASE_URL}>
        <Routes>
          <Route path="/" element={<ParallaxSection />} />
          <Route path="/lms" element={<Lms />} />
        </Routes>
    </Router>
  );
}

export default App;
