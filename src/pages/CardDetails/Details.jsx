import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../Layout/Layout";
import Card from "./Card";

const Details = () => {
  const donations = useContext(MyContext);
  const [item, setItem] = useState({});
  const { id } = useParams();
  const intId = parseInt(id);

  useEffect(() => {
    const match = donations?.find((donation) => donation.id === intId);
    setItem(match);
  }, [donations, intId]);

  return <Card item={item}></Card>;
};

export default Details;
