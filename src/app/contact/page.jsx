function Contact() {
  return (
    <div className="contact-container flex justify-center items-center h-screen">
        <div className="contact-info h-125 w-auto text-center mr-8 bg-red-400 p-6" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p className="text-white">danbriggs81@gmail.com</p>
        </div>
        <div>
          <img
          src="/art/drawings/fozzy.webp"
          alt="Fozzy"
          className="h-125 w-auto"
        />
        </div>
        
    </div>
  );
}
 

export default Contact;