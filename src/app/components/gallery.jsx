function Gallery() {
  const images = [
    "/art/drawings/melting.webp",
    "/art/drawings/faces.webp",
    "/art/drawings/escher-eyeball.webp",
    "/art/drawings/nun.webp",
    "/art/drawings/skeksies.webp",
    "/art/drawings/swoosh lady.webp",
    "/art/drawings/third eye.webp",
    "/art/drawings/explosion.webp",
    "/art/drawings/Wise Henson.webp",
    "/art/drawings/Sun Ra.webp",
    "/art/drawings/fortune-teller.webp",
    "/art/drawings/frida.webp",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-14 h-screen overflow-y-auto">
        {images.map((src, index) => (
            <img
                key={index}
                src={src}
                alt={`Artwork ${index + 1}`}
                className="w-full object-contain"
            />
        ))}
    </div>
  );
}   

export default Gallery;