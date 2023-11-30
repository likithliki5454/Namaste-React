import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';


const RestroMenu = () => {
  const [resinfo, setresinfo] = useState();
  
  const {resid}=useParams()
console.log(resid);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      // debugger
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
      const jsondata = await data.json();
      setresinfo(jsondata.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  if(resinfo===null){
    return <Shimmer/>
  }

  const { name, cuisines, costForTwoMessage } = resinfo?.cards?.[0]?.card?.card?.info || {};

  const recomendedData    = resinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards
  

  return (
    <div className='menu'>
      <h1>{name}</h1>
      {cuisines && <p>{cuisines.join(' ,')}  - {costForTwoMessage}</p>}
    <h1>menu</h1>
    <h3>{resinfo && resinfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title}</h3>
    <ul>
    {recomendedData &&
      recomendedData.map((list) =>
       <li key={list.card.info.name}>{list.card.info.name}</li>
       )}
  </ul>
    </div>
  );
};

export default RestroMenu;
