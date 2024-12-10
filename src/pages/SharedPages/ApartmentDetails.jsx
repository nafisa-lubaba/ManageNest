
import { useState, useEffect } from "react";
import { FaArrowLeft, FaBath, FaBed, FaSquare, FaCheckCircle } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

import { useNavigate, useParams } from "react-router-dom";
import "./ApartmentDetails.css";
import axios from "axios";
import { MdOutlinePets } from "react-icons/md";
import UseAuth from "../../hooks/UseAuth";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import toast from "react-hot-toast";

const ApartmentDetails = () => {
    const { id } = useParams();
    const { user } = UseAuth();
    // console.log(user);
    
    const navigate = useNavigate();
    console.log(id);

    const [apartment, setApartment] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchApartmentDetails = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/apartments/${id}`);
                setApartment(data);
            } catch (error) {
                setError("Failed to fetch apartment details. Please try again.");
                console.error("Fetch error:", error);
            }
        };

        fetchApartmentDetails();
    }, [id]);

    if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
    if (!apartment) return <div className="text-center p-4">Loading...</div>;

    const handleAgreement = async () => {
        const agreementDetails ={
            apartmentNo : apartment.apartmentNo,
            status : apartment.availabilityStatus,
            blockNo : apartment.blockName,
            category : apartment.category,
            facilities : apartment.facilities,
            floorNo : apartment.floorNo,
            gallery : apartment.gallery,
            image : apartment.image,
            nearbyAmenities : apartment.nearbyAmenities,
            rentDeposit : apartment.rentDeposit,
            rentPerMonth : apartment.rentPerMonth,
            rooms : apartment.rooms,
            size : apartment.size,
            userName : user.displayName,
            userEmail : user.email,
            ownerEmail : apartment.ownerEmail,
            ownerName : apartment.ownerName
        }
        axiosPublic.post("/bookedAppartment", agreementDetails).then((res) => {
            if (res.data.insertedId) {
              console.log("User added to the database");
              toast.success("Aggrement Request Sent successfully");
              navigate("/");
            }
          });
        setIsSubmitting(true);
        console.log(agreementDetails);

    };
    // Modal functionality
    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % apartment.gallery.length);
    };

    const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + apartment.gallery.length) % apartment.gallery.length
        );
    };

    return (
        <div className="container mx-auto p-6 min-h-screen">
            <button
                onClick={() => navigate("/")}
                className="mb-6 flex items-center gap-2 text-cyan-500 hover:text-blue-900 font-semibold transition-all"
            >
                <FaArrowLeft className="w-4 h-4" /> Back to Listings
            </button>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="relative">
                    <img
                        src={apartment.image}
                        alt={apartment.category}
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm shadow-lg">
                        {apartment.category}
                    </div>
                </div>

                <div className="p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {apartment.blockName} - {apartment.apartmentNo}
                    </h1>
                    <p className="text-2xl text-green-600 font-semibold mb-6">
                        ${apartment.rentPerMonth}/month
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Property Info */}
                        <div className="flex items-center gap-2">
                            <FaSquare className="text-cyan-500 w-6 h-6" />
                            <span className="text-gray-600">{apartment.size} sq ft</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBath className="text-cyan-500 w-6 h-6" />
                            <span className="text-gray-600">{apartment.rooms.bathrooms} Bathrooms</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBed className="text-cyan-500 w-6 h-6" />
                            <span className="text-gray-600">{apartment.rooms.bedrooms} Bedrooms</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiTarget className="text-cyan-500 w-6 h-6" />
                            <span className="text-gray-600">{apartment.availabilityStatus}</span>
                        </div>
                    </div>

                    {/* Facilities & Nearby Amenities */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-8">
                        <div className="flex-1">
                            <h2 className="unique-header text-2xl font-semibold mb-4 text-gray-800">Facilities</h2>
                            <div className="flex flex-wrap gap-3">
                                {apartment.facilities.map((facility, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full shadow-sm"
                                    >
                                        <FaCheckCircle className="w-4 h-4" />
                                        {facility}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="unique-header text-2xl font-semibold mb-4 text-gray-800">
                                Nearby Amenities
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {apartment.nearbyAmenities.map((amenity, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full shadow-sm"
                                    >
                                        {amenity}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Rent and Deposit */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <h2 className="unique-header text-2xl font-semibold mb-4 text-gray-800">
                                Rent
                            </h2>
                            <div className="text-gray-700 text-lg">
                                <p>${apartment.rentPerMonth}/month</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="unique-header text-2xl font-semibold mb-4 text-gray-800">
                                Deposit
                            </h2>
                            <div className="text-gray-700 text-lg">
                                <p>${apartment.rentDeposit}</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="unique-header text-2xl font-semibold mb-4 text-gray-800">
                                Pet Policy
                            </h2>
                            <div className="flex items-center text-gray-700 text-lg">
                                <MdOutlinePets className="w-4 h-4" />
                                <p>{apartment.petPolicy}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className=" bg-white shadow-lg rounded-xl pr-8 pl-8 pb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Image Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {apartment.gallery.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                                onClick={() => openModal(index)} // Open modal on click
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4  text-white text-3xl bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all"
                        >
                            &times;
                        </button>
                        <img
                            src={apartment.gallery[currentImageIndex]}
                            alt={`Gallery Image ${currentImageIndex + 1}`}
                            className="w-96 h-96 object-cover"
                        />
                        <button
                            onClick={showPreviousImage}
                            className="absolute left-4 bottom-4 text-white text-3xl bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all"
                        >
                            &#8592;
                        </button>
                        <button
                            onClick={showNextImage}
                            className="absolute right-4 bottom-4 text-white text-3xl bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all"
                        >
                            &#8594;
                        </button>


                    </div>
                </div>
            )}

            <div className="mt-8 flex justify-center">
                <button
                    onClick={handleAgreement}
                    disabled={isSubmitting}
                    className={`w-full py-3 ${isSubmitting ? "bg-gray-400" : "bg-cyan-500"} text-white font-semibold rounded-lg hover:bg-cyan-800 transition-all`}
                >
                    {isSubmitting ? "Submitting..." : "Agreement Now"}
                </button>
            </div>
        </div>
    );
};

export default ApartmentDetails;
