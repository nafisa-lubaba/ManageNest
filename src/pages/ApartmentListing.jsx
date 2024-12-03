import { useEffect, useState } from "react";
import ApartmentCard from "../components/ApartmentComponents/ApartmentCard";
import SharedTitle from "../components/Shared/SharedTitle";
import axios from "axios";

const ApartmentListing = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`http://localhost:5000/apartments`);
            setApartments(data);
        };
        getData();
    }, []);

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
