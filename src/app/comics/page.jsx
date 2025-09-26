function Comics() {
  return (
    <div className="comic-page flex flex-col w-full lg:w-1/2 md:w-1/2 sm:w-full mx-auto pt-" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="video-container flex flex-col">
        <video controls className="w-full">
          <source src="/art/comics/lost_woods/lost-woods-horizontal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="comic-info sm:px-10 md:px-10">
        <h2>The Lost Woods</h2>
        <p>Writer: Jason Perun</p>
        <p>Art: Daniel Briggs</p>
      </div>
    </div>
  );
}
 

export default Comics;