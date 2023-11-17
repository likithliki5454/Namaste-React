import ResturantCard from "./ResuturantCard";
const ResturantContainer = ({ data }) => {
    console.log("search",data)
    return (
      <div className="container">
        {data.map((items) => (
          <ResturantCard key={items.index} {...items} />
        ))}
      </div>
    );
  };
  export default ResturantContainer;