import cafe from "../assets/cafe.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'; // Importing the CSS file

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
          Hey..........! <br></br> I am  Rohit  Dhadambe!
            <br />
            <span className="typewriter-container text-blue-500">
              <br></br>
              <Typewriter
                words={['Web Developer','Softwere Developer']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-white py-5 max-w-l">
          I am a dedicated 3rd-year Computer Engineering student at G.H. 
          Raisoni College of Engineering and Management, Pune 🎓 - (Autonomous Institute). I
          possess foundational knowledge in the computer field 💻, with practical experience in 
          both front-end 🌟 and back-end development 🔧. Currently, I am engaged in a project that 
          integrates these skills, demonstrating a solid understanding of full-stack development 🌐.
          My passion for technology fuels my desire to innovate and create impactful solutions 🌍✨.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative w-2/3 md:w-full">
          <img
            src={cafe}
            alt="my profile"
            className="rounded-3xl mx-auto mb-20 ml-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;