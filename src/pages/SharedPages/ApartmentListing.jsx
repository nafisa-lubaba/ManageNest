// import { useEffect, useState } from "react";
// import ApartmentCard from "../../components/ApartmentComponents/ApartmentCard";
// import SharedTitle from "../../components/Shared/SharedTitle";
// import axios from "axios";

// const ApartmentListing = () => {
//     const [apartments, setApartments] = useState([]);

//     useEffect(() => {
//         const getData = async () => {
//             const { data } = await axios.get(`http://localhost:5000/apartments`);
//             setApartments(data);
//         };
//         getData();
//     }, []);

//     return (
//         <div className="container mx-auto p-4">
//             <SharedTitle heading="All Apartments" />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {apartments.map((apartment) => (
//                     <ApartmentCard key={apartment.apartmentNo} apartment={apartment} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ApartmentListing;
import { useEffect, useState } from "react";
import ApartmentCard from "../../components/ApartmentComponents/ApartmentCard";
import SharedTitle from "../../components/Shared/SharedTitle";
import axios from "axios";

const ApartmentListing = () => {
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/apartments`);
      setApartments(data);
    };
    getData();
  }, []);

  // Calculate the apartments to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentApartments = apartments.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(apartments.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <SharedTitle heading="All Apartments" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentApartments.map((apartment) => (
          <ApartmentCard key={apartment.apartmentNo} apartment={apartment} />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-6">
        <nav>
          <ul className="inline-flex items-center -space-x-px">
            {/* Previous Button */}
            <li>
              <button
                className={`px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-l-lg ${
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  className={`px-3 py-2 border border-gray-300 ${
                    pageNumber === currentPage
                      ? "bg-cyan-500 text-white"
                      : "bg-white text-gray-500"
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
            {/* Next Button */}
            <li>
              <button
                className={`px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-r-lg ${
                  currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ApartmentListing;
