import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img
            src={imgURL}
            alt={name}
            className="w-[280px] h-[280px]"
        />
        <div className="mt-8 flex flex-col justify-start gap-2.5">
            <div className=" flex flex-row justify-start gap-2">
            <img
                src={star}
                alt="rating"
                width={22} height={22}
            />
            <p className="font-montserrat text-slate-gray leading-normal text-xl"> (4.4) </p>
            </div>
            <h3 className="mt-1 text-2xl font-palanquin font-semibold leading-normal">{name}</h3>
            <p className="mt-1 font-montserrat font-semibold text-coral-red leading-normal text-2xl">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard
