import Image from "next/image";

const Brand = (props) => {
  return (
    <div className="flex items-center border-solid-black">

      <Image className="mx-5 bg-blue border-solid bg-bottom object-contain" 
        src={`${props.image}`}
        alt=""
        height={0}
        width={200}
      />
    </div>
  );
};
export default Brand;