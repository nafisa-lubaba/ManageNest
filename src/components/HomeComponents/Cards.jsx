import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import SharedTitle from "../Shared/SharedTitle";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const { data } = await axios(`http://localhost:5000/apartments`);
        setCards(data.slice(0, 6)); 
    };
    getData();
  }, []);

  return (
    <div>
      <div>
        <SharedTitle heading="Our Premium Features Rooms" />
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
        {cards?.map(card => (
          <Card key={card.apartment_id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
