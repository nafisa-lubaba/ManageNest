// import React from 'react';
// import { MapPin } from 'lucide-react';
import { Map, Marker } from "pigeon-maps";
import { FaMapPin } from 'react-icons/fa';
import SharedTitle from "../Shared/SharedTitle";

const LocationMapSection = () => {
  const buildings = [
    {
      id: 1,
      name: "Tower Heights",
      address: "123 Main Street, Downtown",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 2,
      name: "Park View Residences",
      address: "456 Park Avenue, Midtown",
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    // Add more buildings as needed
  ];

  return (
    <section className="py-2 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <SharedTitle heading="Our Locations"/>
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2> */}
         
        </div>

        {/* Map and Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Container */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white ">
            <Map  defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
              <Marker  anchor={[50.879, 4.6997]} />
            </Map>
          </div>

          {/* Buildings List */}
          <div className="space-y-4">
            {buildings.map(building => (
              <div
                key={building.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <FaMapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {building.name}
                    </h3>
                    <p className="text-gray-600">{building.address}</p>
                    {/* <button className="mt-4 text-cyan-600 hover:text-cyan-700 font-medium flex items-center gap-2">
                      Get Directions
                      <span className="text-lg">→</span>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMapSection;