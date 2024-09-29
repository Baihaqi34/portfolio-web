import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import { useInView } from "react-intersection-observer";
import StackIcon from "tech-stack-icons";

const Home = () => {
  const { ref: refHome, inView: homeInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const projects = [
    {
      id: 1,
      title: "Konversi Suhu",
      description: "ini adalah project pertama yang saya buat xixixix hehe haha hhihdia hadah",
      image: "https://picsum.photos/200",
      link: "https://baihaqi34.github.io/",
      tech: ["html5", "css3", "js"],
    },
    {
      id: 2,
      title: "Konversi Suhu",
      description: "Description for Project 1",
      image: "https://picsum.photos/204",
      link: "https://baihaqi34.github.io/",
      tech: ["reactjs", "php", "laravel"],
    },
    {
      id: 3,
      title: "Konversi Suhu",
      description: "Description for Project 1",
      image: "https://picsum.photos/345",
      link: "https://baihaqi34.github.io/",
      tech: ["html5", "css3", "laravel"],
    },
    {
      id: 4,
      title: "Konversi Suhu",
      description: "Description for Project 4",
      image: "https://picsum.photos/200",
      link: "https://baihaqi34.github.io/",
      tech: ["reactjs", "php", "laravel"],
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col min-h-screen" id="home">
        <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
          <motion.img
            src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
            alt=""
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <div className="mt-4 text-center">
            <p className="text-base sm:text-lg md:text-xl">Hello I'm</p>
            <h1 className="text-xl sm:text-2xl md:text-5xl font-medium">
              Ahmad <span className="text-blue-400">Baihaqi</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-medium">
              Software Engineer
            </p>
            <p className="text-xs sm:text-xl md:text-base mt-2 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              A passionate and skilled software engineer with a proven ability
              to design, develop, and implement high-quality software solutions.
            </p>
          </div>
          <div className="mt-4 sm:mt-6">
            <ul className="flex gap-4">
              {[
                {
                  icon: faInstagram,
                  link: "https://www.instagram.com/ahmadbaihqii_/",
                },
                { icon: faGithub, link: "https://github.com/Baihaqi34" },
                { icon: faEnvelope, link: "mailto:ahmadbaihaqii274@gmail.com" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, color: "rgb(147 197 253)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mt-4 sm:mt-6 flex gap-4">
            <motion.button
              className="p-2 border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 transition-colors duration-300 rounded-lg w-24 sm:w-28 md:w-32 text-xs sm:text-sm md:text-base"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Hire Me
            </motion.button>
            <motion.button
              className="p-2 border-2 bg-blue-400 text-white hover:border-blue-400 hover:bg-transparent hover:text-blue-400 transition-colors duration-300 rounded-lg w-24 sm:w-28 md:w-32 text-xs sm:text-sm md:text-base"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              CV
            </motion.button>
          </div>
        </div>
      </div>

      <div
        className="bg-gray-100 p-4 sm:p-8 md:p-16 h-screen min-w-full flex flex-col justify-between"
        id="additional-section"
      >
        {/* Removed container class */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
          Latest Projects
        </h2>
        <p className="text-md sm:text-lg md:text-lg mb-4">
          Berikut adalah beberapa proyek yang pernah saya kerjakan:
        </p>

        <Slider {...settings} className="">
          {" "}
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tech={project.tech}
            />
          ))}
        </Slider>
      </div>
      <div
        className="bg-gray-100 p-4 sm:p-8 md:p-16 h-screen min-w-full flex flex-col justify-center"
        id="tech"
      >
        {/* Removed container class */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
          Technologies I've Been Using Lately
        </h2>
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center mt-6"
          ref={refHome} // Menghubungkan elemen dengan observer
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: homeInView ? 1 : 0,
            y: homeInView ? -1 : 50,
          }} // Animasi berdasarkan visibilitas
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="h-24 w-24 rounded-lg flex items-center justify-center"
            whileHover={{
              rotate: -16,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <StackIcon name="js" className="" />
          </motion.div>
          <motion.div
            className="h-24 w-24 rounded-lg flex items-center justify-center"
            whileHover={{
              rotate: 20,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            }}
          >
            <StackIcon name="css3" className="" />
          </motion.div>
          <motion.div
            className="h-24 w-24 rounded-lg flex items-center justify-center"
            whileHover={{
              rotate: 18,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            }}
          >
            <StackIcon name="reactjs" className="" />
          </motion.div>
          <motion.div
            className="h-24 w-24 rounded-lg flex items-center justify-center"
            whileHover={{
              rotate: 20,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            }}
          >
            <StackIcon name="laravel" />
          </motion.div>
          <motion.div
            className="h-24 w-24 rounded-lg flex items-center justify-center"
            whileHover={{
              rotate: -20,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            }}
          >
            <StackIcon name="tailwindcss" className="" />
          </motion.div>
          <motion.div
            className="h-24 w-24 rounded-lg flex items-center justify-center"
            whileHover={{
              rotate: 16,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            }}
          >
            <StackIcon name="php" className="" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
