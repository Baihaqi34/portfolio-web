import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Card = (props) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={sectionRef} // Menghubungkan elemen dengan observer
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: sectionInView ? 1 : 0, x: sectionInView ? 0 : -50 }} // Animasi berdasarkan visibilitas
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden"
      key={props.id}
    >
      {/* Gambar */}
      <img
        className="w-full h-48 object-cover"
        src={props.image} // Gunakan curly braces untuk ekspresi JavaScript
        alt="Gambar"
      />

      {/* Konten */}
      <div className="p-4">
        {/* Judul */}
        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>

        {/* Deskripsi */}
        <p className="text-gray-600 mb-4">{props.description}</p>

        {/* Tombol */}
        <div className="flex flex-row justify-end">
          <a
            href="#"
            className="text-gray-500 py-2 px-4 rounded hover:text-gray-400 focus:outline-none"
          >
            Play Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
