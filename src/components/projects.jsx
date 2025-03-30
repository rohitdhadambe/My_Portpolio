import greencredit from "../assets/portfolio/greencredit.jpg";
import opensource from "../assets/portfolio/Opensource.jpg"
import Voting from "../assets/portfolio/Voting.jpg"
import Tracking from "../assets/portfolio/Tracking.jpg"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: greencredit,
      name: "Green Credit Management",
      demoLink: "https://greencreditmanagement102.netlify.app/",
      codeLink: "https://github.com/rohitdhadambe/GREEN_CREDIT_MANAGEMENT__7",
    },
    {
      id: 2,
      src: opensource,
      name: "Open Source Platform",
      demoLink: "https://inovate-togother.web.app",
      codeLink: "https://github.com/rohitdhadambe/INNOVATE_TOGOTHER__7",
    },
    {
      id: 3,
      src: Voting,
      name: "AI-Based Voting System",
      demoLink: "https://github.com/rohitdhadambe/AI_BASED_VOTING_SYSTEM_",
      codeLink: "https://github.com/rohitdhadambe/AI_BASED_VOTING_SYSTEM_",
    },
    {
      id: 4,
      src: Tracking,
      name: "Real-Time Project Tracking System (Ministry of Coal)",
      demoLink: "https://github.com/rohitdhadambe/ProjectTrackingSystem",
      codeLink: "https://github.com/rohitdhadambe/ProjectTrackingSystem",
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full">
        <div className="pb-8 pt-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6 text-lg">Check out some of my work below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, name, demoLink, codeLink }) => (
            <div key={id} className="bg-gray-900 rounded-lg shadow-md shadow-gray-700 overflow-hidden">
              <img
                src={src}
                alt={name}
                className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-center text-lg font-semibold">{name}</p>
                <div className="flex justify-center mt-4">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg transition duration-200"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg transition duration-200 ml-2"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
