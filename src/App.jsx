import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import Education from './components/Education';
import "regenerator-runtime/runtime";
import 'react-toastify/dist/ReactToastify.css';
import Cursor from './components/Cursor';
import Review from './components/Review';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0">
          <div>
            <Navbar />
            <Hero />
          </div>

          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <About />
          </div>

          <div
            className="bg-experience bg-cover bg-center bg-no-repeat">
            <div
              className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat">
              <Education />
            </div>
          </div>

          <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
            <Tech />
          </div>

          <Projects />

          <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
            <div
              className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Experience />
            </div>
          </div>

          <div className="pt-10 pb-4">
            <Review />
          </div>

          <div className="relative z-0 pt-4">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
      <Cursor />
    </>
  );
};

export default App;
