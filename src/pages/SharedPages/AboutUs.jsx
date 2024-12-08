// import React from 'react';
// import { Building, Users, Shield, Clock, ChartBar, Star } from 'lucide-react';

import { FaBuilding, FaChartBar, FaClock, FaStar, FaUsers } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
// import SharedTitle from "../../components/Shared/SharedTitle";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* <SharedTitle heading="About Us"/> */}
      <div className="relative py-16 bg-gradient-to-r from-[#06b6d4] to-[#06b6d4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to ManageNest
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Transforming Building Management Through Innovation and Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At ManageNest, we're dedicated to revolutionizing building management through 
            cutting-edge technology and exceptional service. Our goal is to create 
            seamless experiences for property owners, managers, and residents alike.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaBuilding className="w-8 h-8 text-[#06b6d4]" />}
            title="Comprehensive Management"
            description="End-to-end solutions for all your building management needs, from maintenance to tenant relations."
          />
          <FeatureCard 
            icon={<FaUsers className="w-8 h-8 text-[#06b6d4]" />}
            title="Community Focus"
            description="Building stronger communities through effective communication and resident engagement."
          />
          <FeatureCard 
            icon={<FiShield className="w-8 h-8 text-[#06b6d4]" />}
            title="Security First"
            description="Advanced security measures to protect your property and ensure resident safety."
          />
          <FeatureCard 
            icon={<FaClock className="w-8 h-8 text-[#06b6d4]" />}
            title="24/7 Support"
            description="Round-the-clock assistance for all your building management emergencies."
          />
          <FeatureCard 
            icon={<FaChartBar className="w-8 h-8 text-[#06b6d4]" />}
            title="Data-Driven Insights"
            description="Leverage analytics to make informed decisions and optimize building operations."
          />
          <FeatureCard 
            icon={<FaStar className="w-8 h-8 text-[#06b6d4]" />}
            title="Quality Service"
            description="Committed to delivering excellence in every aspect of building management."
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r from-[#06b6d4] to-[#06b6d4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose ManageNest?
          </h2>
          <div className="prose prose-lg mx-auto text-white">
            <p className="mb-4">
              With over a decade of experience in building management, ManageNest 
              has established itself as a leader in the industry. Our innovative 
              approach combines traditional property management expertise with 
              modern technology to deliver unparalleled service.
            </p>
            <p className="mb-4">
              We understand that each property is unique, which is why we offer 
              customized solutions tailored to your specific needs. Our team of 
              experts works tirelessly to ensure your building operates at its 
              highest potential while maintaining cost efficiency.
            </p>
            <p>
              Join the growing number of satisfied property owners who trust 
              ManageNest with their building management needs. Experience the 
              difference that professional, technology-driven management can make 
              for your property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
