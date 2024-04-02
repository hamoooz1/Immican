import Image from "next/image";


function InfoCardFeatured(props) {
  return (
    <div  className="bg-white flex w-[1200px] h-[350px] border-solid shadow-lg rounded-3xl overflow-hidden my-10 items-center " >
      <Image width={512} height={1} src={props.data.image} alt=""/>
      <p className="p-4">{props.data.text}</p>
    </div>
  )
}

export default InfoCardFeatured;