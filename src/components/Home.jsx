import cafe from "../assets/cafe.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'; // Importing the CSS file

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full px-2 sm:px-4 md:flex-row gap-4 md:gap-8">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Hey! <br className="hidden sm:block"></br> I'm Rohit Dhadambe
            <br />
            <span className="typewriter-container text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <br></br>
              <Typewriter
                words={['Web Developer','Software Developer']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-white py-4 sm:py-5 text-sm sm:text-base md:text-lg leading-relaxed">
          I am a dedicated 3rd-year Computer Engineering student at G.H. Raisoni College of Engineering and Management, Pune 🎓. I possess foundational knowledge in computer science 💻 with practical experience in both front-end 🌟 and back-end development 🔧. Currently working on projects that integrate full-stack development 🌐. Passionate about creating impactful solutions 🌍✨
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

        <div className="relative w-full sm:w-4/5 md:w-1/2 flex justify-center">
          <img
            src={cafe}
            alt="my profile"
            className="rounded-2xl sm:rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;