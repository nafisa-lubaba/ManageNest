import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import SharedTitle from "../Shared/SharedTitle";


const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/apartments`)
        setCards(data)
      }
      getData()
    }, [])
    return (
        <div>
             <div>
             <SharedTitle heading="Our Premiem Features Rooms"/>
        {/* <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center mt-6 sm:mt-8 md:mt-10 mb-4">
          Uncover Our Premier Featured Rooms
        </h2> */}
        <p className="font-bold text-gray-600 text-lg sm:text-xl md:text-2xl text-center mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-6 px-4 sm:px-8 md:px-24">
          Experience curated luxury escapes with breathtaking views and easy booking – start your rejuvenating journey today.
        </p>
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
        {
          cards.slice(0, 6).map(card => <Card key={card.apartment_id} card={card}></Card>)

        }
      </div>
            
        </div>
    );
};

export default Cards;