'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, UserCircle } from 'lucide-react';

const slides = [
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const services = [
  {
    title: 'Web Development',
    description: 'Build responsive and modern websites tailored to your needs.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Graphic Design',
    description: 'Creative designs to make your brand stand out.',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Digital Marketing',
    description: 'Promote your business effectively across digital platforms.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Dashboard() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  // Manual controls
  const goToPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  const handleChoose = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I am ${name} from ${location}. I am interested in your ${selectedService} service.`;
    const whatsappURL = `https://wa.me/9645917277?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setShowModal(false);
    setName('');
    setLocation('');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
      {/* Top Banner */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="font-semibold text-lg">Team 1</span>
          <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">Free</span>
        </div>
        <div className="flex items-center space-x-4">
          <UserCircle className="w-6 h-6 rounded-full" />
        </div>
      </div>


      {/* Banner Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-6 font-poppins">
        {/* First Banner */}
        <div className="relative rounded-xl overflow-hidden w-full lg:col-span-8 sm:h-[50vh] h-[90vh] flex flex-col sm:flex-row justify-between items-center px-8 py-6 bg-gradient-to-br from-black via-green-900 to-green-600 text-white shadow-lg">
          <div className="flex-1 flex flex-col justify-center text-center sm:text-left items-center sm:items-start">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Welcome back 👋</h2>
            <p className="text-lg md:text-xl font-light mb-4">Jaydon Frankie</p>
            <p className="text-sm md:text-base text-gray-300 mb-6 max-w-md">
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
            </p>
            <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-2 rounded-lg w-fit">
              Go now
            </button>
          </div>

          {/* 3D Character Image */}
          <div className="flex-1 flex justify-center items-end mt-6 sm:mt-0">
            <Image
              src="/images/banner.png"
              alt="3D Character"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Banner - Slideshow */}
        <div className="relative w-full lg:col-span-4 bg-white rounded-xl overflow-hidden sm:h-[50vh] h-[50vh]">
          <Image
            src={slides[current]}
            alt="Slide"
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />

          {/* Slide indicators */}
          <div className="absolute top-2 left-2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${current === index
                  ? 'bg-gradient-to-r from-green-400 to-green-600'
                  : 'bg-white/50'
                  } ring-1 ring-black`}
              ></div>
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="absolute bottom-2 right-2 flex space-x-2 z-10">
            <button
              onClick={goToPrev}
              className="bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow hover:shadow-lg active:shadow-xl active:bg-opacity-90 transition duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow hover:shadow-lg active:shadow-xl active:bg-opacity-90 transition duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>





      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>

            <button
              onClick={() => handleChoose(service.title)}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-lg border border-gray-300 shadow-md hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 backdrop-blur-lg hover:bg-opacity-80 hover:scale-105"
            >
              Choose
            </button>
          </div>
        ))}
      </div>




      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-green-50 via-white to-white/90 shadow-xl backdrop-blur-md rounded-xl p-6 w-full max-w-md border border-white/40 mx-4 sm:mx-0"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Provide Your Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                  placeholder="Your location"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}




      {/* About Section */}
      <section className="mt-12 rounded-xl bg-gradient-to-br from-green-50 via-white to-white p-8 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We’re a passionate team of creatives and tech experts dedicated to delivering top-notch digital solutions.
            From web design to marketing, we blend innovation with elegance to build your digital presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">📍 Location</h3>
              <p className="text-gray-600">123 Innovation Street, Green Valley, KL</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">📞 Mobile</h3>
              <p className="text-gray-600">+91 96459 17277</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">✉️ Email</h3>
              <p className="text-gray-600">hello@team1.dev</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t py-6 text-center text-sm text-gray-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Lexora. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-600 transition">Terms</a>
            <a href="#" className="hover:text-green-600 transition">Contact</a>
          </div>
        </div>
      </footer>


    </div>
  );
}
