function Comics() {
  return (
    <div>
      <div className="comic-page flex flex-col w-full lg:w-3/4 md:w-1/2 sm:w-full mx-auto pt-8 px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="video-container flex flex-col mb-6">
          <video controls className="w-full rounded-md">
            <source src="/art/comics/lost_woods/lost-woods-horizontal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="comic-info mx-5 md:mx-0">
          <h2 className="text-xl font-bold mb-2">The Lost Woods</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-medium">Writer:</span> Jason Perun</p>
            <p><span className="font-medium">Art:</span> Daniel Briggs</p>
          </div>
        </div>
      </div>
      <div className="comic-pages flex flex-col sm:flex-row pt-10">
        <img src="/art/comics/lost_woods/03_Publish_page_1.png" alt="The Lost Woods Page 1" className="w-full sm:w-1/3 object-contain" />
        <img src="/art/comics/lost_woods/04_Publish_page_2.png" alt="The Lost Woods Page 2" className="w-full sm:w-1/3 object-contain" />
        <img src="/art/comics/lost_woods/08_Publish_page_6.png" alt="The Lost Woods Page 6" className="w-full sm:w-1/3 object-contain" />
      </div>
    </div>
  );
}

export default Comics;