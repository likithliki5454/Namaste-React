import ResturantContainer from "./ResturantContainer";
import { useState } from "react";


const Body = (data) => {

    const [search,setSearch] = useState(data.data);

    const handleTopResturants = ()=>{
        const filter = search.filter((item)=>item.rating >= 4);
        setSearch(filter)
    }
    
    const handleSearchResturant = ({target})=>{
        const {value} = target;
        console.log("this is value",value)
        const filter = data.data.filter((item)=>item.item_name.toLowerCase().includes(value.toLowerCase()));
        console.log("filter",filter)
        setSearch(filter)
    }

  return (
    <div className="body">
      <button onClick={()=>handleTopResturants(data)}>Top Resturats</button>
      <span> Search </span>
      <input onChange={handleSearchResturant} type="search"/>
      <ResturantContainer data={search} />
    </div>
  );
};
export default Body;