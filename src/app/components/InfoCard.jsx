import Image from "next/image";


function InfoCard(props) {
  return (
    <div  className="bg-white dark:bg-[#A6A194] text-black w-[370px] h-[460px] border-solid shadow-lg rounded-3xl overflow-hidden my-10 " >
      <div className="w-[370px] h-[245px] overflow-hidden ">
      <Image width={512} height={275} src={`${props.data.image}`} alt=""/>

      </div>
      <p className="p-4 pt-10 h-[100%] text-center  ">{props.data.text}</p>
    </div>
  )
}

export default InfoCard;