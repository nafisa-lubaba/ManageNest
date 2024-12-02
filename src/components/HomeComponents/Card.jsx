import { FaArrowRight } from "react-icons/fa";
import { RiPriceTag2Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { _id, image, rentPerMonth, apartmentNo, 
        blockName } = card;
    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    };
    return (
    //     <div data-aos="fade-up-right" data-aos-duration="4000"
    //     className="card mb-10 shadow-lg hover:shadow-2xl transform hover:scale-105"
    //     style={cardStyle}
    // >
    //     {/* Card content with gradient overlay */}
    //     <div className="card-details p-5 text-white h-full">
    //         <div className="flex flex-col justify-between h-full">
    //             <div data-aos="fade-up-right" data-aos-duration="3000" className="pt-40 pb-5">
    //                 {/* Title */}
    //                 <h2 className="text-2xl font-bold mb-2">{title}</h2>

    //                 {/* Description */}
    //                 <div className="flex items-center gap-2 mb-4">
    //                     <TbListDetails
    //                     className="text-white text-3xl" />
    //                     <p className="text-lg leading-tight">{room_description}</p>
    //                 </div>

    //                 {/* Price */}
    //                 <div className="flex items-center gap-2">
    //                     <RiPriceTag2Line className="text-white text-2xl" />
    //                     <p className="text-xl font-semibold">${price_per_night} / night</p>
    //                 </div>
    //             </div>

    //             {/* Button to book now */}
    //             <Link
    //                 // to={`/rooms/${_id}`}
    //                 className="self-end mt-4 transform transition-transform duration-300 hover:scale-105"
    //             >
    //                 <div className="bg-[#158260] text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md hover:bg-[#0f6750]">
    //                     <p className="text-sm font-semibold uppercase">Book now</p>
    //                     <FaArrowRight />
    //                 </div>
    //             </Link>
    //         </div>
    //     </div>
    // </div>
    <div
    data-aos="zoom-in"
    data-aos-duration="2000"
    className="card mb-10 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-lg overflow-hidden"
    style={cardStyle}
>
    {/* Image Section */}
    <div className="relative">
        <img 
            src={image} 
            alt={apartmentNo} 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </div>

    {/* Content Section */}
    <div className="card-details p-6 bg-white">
        <div className="flex flex-col justify-between h-full">
            {/* Title */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{blockName}</h2>

            {/* Description */}
            {/* <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                <TbListDetails className="inline-block mr-2 text-gray-500 text-lg" />
                {}
            </p> */}

            {/* Price Section */}
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-cyan-500">${rentPerMonth} / night</p>
                <Link
                    to={`/apartment/${_id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white shadow-md hover:bg-cyan-700 transition-transform duration-300"
                >
                    <p className="text-sm font-semibold uppercase">Book Now</p>
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    </div>
</div>

    );
};

export default Card;

