// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Card = ({ card }) => {
//   const { _id, image, rentPerMonth, apartmentNo, blockName } = card;
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative group h-[400px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 mb-8"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       data-aos="fade-up"
//       data-aos-duration="1000"
//     >
//       <div className="absolute inset-0 w-full h-full">
//         <img 
//           src={image} 
//           alt={blockName}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
//       </div>

//       <div className="relative h-full flex flex-col justify-between p-6">
//         {/* Top Section */}
//         <div className="space-y-2">
//           <span className="inline-block px-3 py-1 bg-cyan-500/80 backdrop-blur-sm text-white text-sm rounded-full">
//             Apartment {apartmentNo}
//           </span>
//           <h2 className={`text-2xl font-bold text-white transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
//             {blockName}
//           </h2>
//         </div>

//         {/* Bottom Section */}
//         <div className={`space-y-4 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//           {/* Price Tag */}
//           <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg">
//             <span className="text-gray-800 font-bold text-lg">
//               ${rentPerMonth}
//             </span>
//             <span className="text-gray-600 text-sm ml-1">
//               / night
//             </span>
//           </div>

//           {/* Book Now Button */}
//           <Link
//             to={`/apartment/${_id}`}
//             className="group/btn flex items-center gap-2 w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-xl transition-all duration-300"
//           >
//             <span className="flex-1 text-center font-semibold">Book Now</span>
//             <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover/btn:translate-x-1">
//               →
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full" />
//       <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-full" />
//     </div>
//   );
// };

// export default Card;
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const { _id, image, rentPerMonth, apartmentNo, blockName } = card;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 mb-4 sm:mb-6 md:mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={blockName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 sm:opacity-80" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-5 md:p-6">
        {/* Top Section */}
        <div className="space-y-2">
          <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-cyan-500/80 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full">
            Apartment {apartmentNo}
          </span>
          <h2 className={`text-xl sm:text-2xl font-bold text-white transition-all duration-500 
            ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
            {blockName}
          </h2>
        </div>

        {/* Bottom Section */}
        <div className={`space-y-3 sm:space-y-4 transition-all duration-500 
          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {/* Price Tag */}
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm rounded-lg">
            <span className="text-gray-800 font-bold text-base sm:text-lg">
              ${rentPerMonth}
            </span>
            <span className="text-gray-600 text-xs sm:text-sm ml-1">
              / night
            </span>
          </div>

          {/* Book Now Button */}
          <Link
            to={`/apartment/${_id}`}
            className="group/btn flex items-center gap-2 w-full bg-cyan-500 hover:bg-cyan-600 text-white 
            p-2 sm:p-3 rounded-xl transition-all duration-300 text-sm sm:text-base"
          >
            <span className="flex-1 text-center font-semibold">Book Now</span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full 
            bg-white/20 transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 
      bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 
      bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-full" />
    </div>
  );
};

export default Card;