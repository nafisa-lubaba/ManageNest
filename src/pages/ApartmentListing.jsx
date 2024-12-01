// import { useEffect, useState } from "react";
// import ApartmentCard from "../components/ApartmentComponents/ApartmentCard";
// import SharedTitle from "../components/Shared/SharedTitle";
// import axios from "axios";



// const ApartmentListing = () => {
//     const [apartments, setApartments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getData = async () => {
//             const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`)
//             setApartments(data)
//           }  finally {
//             setLoading(false);
//         }
//           getData()
//         }, [])
//         fetch('/room.json')
//             .then(response => {
//                 if (!response.ok) throw new Error('Failed to fetch');
//                 return response.json();
//             })
//             .then(data => {
//                 setApartments(data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError(err.message);
//                 setLoading(false);
//             });
    
//     if (loading) return <div className="text-center p-4">Loading...</div>;
//     if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;
//     return (
//         <div className="container mx-auto p-4">
//             <SharedTitle heading="All Apparments"/>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {apartments.map((apartment, index) => (
//                     <ApartmentCard key={apartment.apartmentNo} apartment={apartment} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ApartmentListing;


import { useEffect, useState } from "react";
import ApartmentCard from "../components/ApartmentComponents/ApartmentCard";
import SharedTitle from "../components/Shared/SharedTitle";
import axios from "axios";

const ApartmentListing = () => {
    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                // setLoading(true);
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/apartmentss`);
                setApartments(data);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

    return (
        <div className="container mx-auto p-4">
            <SharedTitle heading="All Apartments" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {apartments.map((apartment) => (
                    <ApartmentCard key={apartment.apartmentNo} apartment={apartment} />
                ))}
            </div>
        </div>
    );
};

export default ApartmentListing;
