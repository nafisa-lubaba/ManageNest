import React, { useState, useEffect } from 'react';
import useAxiosPublic from '../../hooks/UseAxiosPublic';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DashboardSharedTitle from '../../components/Shared/DashboardSharedTitle';

const Announcements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const axiosPublic = useAxiosPublic();
  const [announcements, setAnnouncements] = useState([]);

  // Fetch announcements from database
  useEffect(() => {
    axiosPublic
      .get("/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((error) => console.error("Failed to fetch announcements:", error));
  }, [axiosPublic]);

  // Auto-slide timer
  useEffect(() => {
    if (announcements.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === announcements.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === announcements.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1
    );
  };

  if (!announcements.length) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 h-48 flex items-center justify-center text-gray-500">
        Loading announcements...
      </div>
    );
  }

  return (
    <div className="min-h-screen relative w-full max-w-4xl mx-auto p-4">
      <DashboardSharedTitle heading="Announcement" />
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 shadow-xl">
        {announcements.map((announcement, index) => (
          <div
            key={announcement._id}
            className={`transform transition-all duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 hidden'}`}
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#06b6d4] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Announcement
                </div>
                <div className="text-gray-500 text-sm">
                  {formatDate(announcement.createdAt)}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {announcement.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {announcement.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  {announcements.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full transition-colors ${dotIndex === currentIndex ? 'bg-[#06b6d4]' : 'bg-[#06b6d4]/30'}`}
                    ></span>
                  ))}
                </div>
                <button className="text-[#06b6d4] hover:text-[#06b6d4]/80 font-medium">
                  Read More → 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {announcements.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors md:left-4 md:p-4 lg:left-6"
          >
            <FaChevronLeft className="w-6 h-6 text-[#06b6d4]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors md:right-4 md:p-4 lg:right-6"
          >
            <FaChevronRight className="w-6 h-6 text-[#06b6d4]" />
          </button>
        </>
      )}
    </div>
  );
};

export default Announcements;