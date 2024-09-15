const Card = (props) => {
    return (
      <div className="flex flex-col max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden gap-6 p-4" key={props.id}>
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
          <p className="text-gray-600 mb-4">
            {props.description}
          </p>
  
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
      </div>
    );
  };
  
  export default Card;
  