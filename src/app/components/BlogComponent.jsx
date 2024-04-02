//IMPORTs
import blogData from "../../data/blogData.json";
import InfoCard from "./InfoCard";
import InfoCardFeatured from "./InfoCardFeatured";

//COMPONENT DECLARATION
export default function BlogComponent() {

  // COMPONENT RETURN
  return (

    <>
 
      <section >
      <h1 className="text-4xl text-center text-[#605B56] pt-4">Latest Updates</h1>
        <div className="  flex justify-between w-[1200px] m-10 flex-wrap ">


        {blogData.map((card, index) => {
          
          if (index === 0) {
            return <InfoCardFeatured key={card.id} data={card} />;
            
          } else {
            
            return <InfoCard key={card.id} data={card} />;
          }
          
        })}
        </div>
      </section>
    </>

  );
}
