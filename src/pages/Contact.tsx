import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-black to-indigo-800 text-white py-10 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Get in Touch</h2>
          <ul className="space-y-4">
            <li>
              📧 <span className="text-gray-300">Email</span>{" "}
              <a
                href="akkarinjujaiboon11087@gmail.com"
                className="text-blue-300 underline hover:text-yellow-400 transition duration-300"
              >
                akkarinjujaiboon11087@gmail.com
              </a>
            </li>
            <li>
              📞 <span className="text-gray-300">Phone</span>{" "}
              <a
                href="tel:+66958397021"
                className="text-blue-300 underline hover:text-yellow-400 transition duration-300"
              >
                (+66)95-839-7021
              </a>
            </li>
            <li>
              🏠 <span className="text-gray-300">Address:</span>{" "}
              <span>Thailand Udonthani</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-indigo-800 font-semibold py-3 rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;