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
    "/art/drawings/frog-prince.webp",
    "/art/drawings/gorilla.webp",
    "/art/drawings/tiger fight.webp",
    "/art/drawings/octopus.webp",
    "/art/drawings/psych-skull.webp",
    "/art/drawings/iguana.webp",
    "/art/drawings/demon.webp",
    "/art/drawings/scientist.webp",
    "/art/drawings/mars-attack.webp",
    "/art/drawings/sailor.webp",
    "/art/drawings/skull.webp",
    "/art/drawings/knight.webp",

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:overflow-x-auto gap-2 lg:gap-12 px-4 lg:px-14 overflow-y-auto">
        {images.map((src, index) => (
            <img
                key={index}
                src={src}
                alt={`Artwork ${index + 1}`}
                className="w-full lg:w-auto lg:max-h-[calc(100vh-200px)] lg:flex-shrink-0 object-contain"
            />
        ))}
    </div>
  );
}   

export default Gallery;