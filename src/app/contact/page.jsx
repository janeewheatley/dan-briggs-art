function Contact() {
  return (
    <div className="contact-container flex flex-col md:flex-row justify-center items-center md:items-start pt-10 px-6">
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img
          src="/art/drawings/fozzy.webp"
          alt="Fozzy"
          className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto max-w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="contact-info text-center md:text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Contact Info</h1>
        <div className="space-y-4">
          <p className="text-lg">
            <a href="mailto:danbriggs81@gmail.com" className="hover:text-blue-800 underline">
              danbriggs81@gmail.com
            </a>
          </p>
          <p className="text-gray-600 max-w-md">
            Feel free to reach out for commissions, collaborations, or any questions about my work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;