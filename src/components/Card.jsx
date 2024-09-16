import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import StackIcon from "tech-stack-icons";

const Card = (props) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: sectionInView ? 1 : 0, x: sectionInView ? 0 : -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative flex flex-col max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{}}
      key={props.id}
    >
      {/* Gambar */}
      <motion.img
        className="w-full h-64 object-cover"
        src={props.image}
        alt="Gambar"
        animate={{ opacity: isHovered ? 0.8 : 1 }} // Menggelapkan gambar saat hover
        transition={{ duration: 0.5 }}
      />

      {/* Overlay Konten */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-center text-center bg-black bg-opacity-70 text-white ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }} // Kondisi awal sebelum animasi
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -16 }} // Animasi saat hover pada parent
          transition={{ duration: 0.3 }}
        >
          {/* Judul */}
          <h2 className="text-xl font-semibold mb-2">{props.title}</h2>

          {/* Deskripsi */}
          <p className="text-gray-200 mb-4">{props.description}</p>
        </motion.div>

        <motion.div
          className="flex flex-row justify-center mt-8 space-x-4"
          initial={{ opacity: 0, y: 16 }} // Kondisi awal sebelum animasi
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 16 }} // Animasi saat hover pada parent
          transition={{ duration: 0.3 }}
        >
          {props.tech.map((techItem, index) => (
            <StackIcon key={index} name={techItem} className="h-8 w-8" />
          ))}
        </motion.div>

        {/* Tombol */}
        <motion.div
          className="flex flex-row justify-center mt-4"
          initial={{ opacity: 0, y: 16 }} // Kondisi awal sebelum animasi
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 16 }} // Animasi saat hover pada parent
          transition={{ duration: 0.3 }}
        >
          {props.link ? (
            <a
              href={props.link}
              target="_blank" // Buka di tab baru
              rel="noopener noreferrer" // Untuk keamanan
              className="text-white py-2 px-4 rounded focus:outline-none"
            >
              Demo
            </a>
          ) : (
            <p className="text-gray-400">No link available</p> // Tampilkan pesan fallback jika tidak ada link
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
