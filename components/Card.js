import { DotsCircleHorizontalIcon } from "@heroicons/react/solid"

const Card = ({anime}) => {

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-3 pb-4">
            <img className="w-full rounded-lg" src={anime?.image_url} />
            <div className="px-2 pt-2">
                <div className="font-bold text-md mb-2">{anime?.title}</div>
                <p className="text-gray-700 text-sm">
                    {anime?.synopsis}
                </p>
                <div className = "text-sm lg:text-base text-gray-500 flex justify-between truncate ">
                    <div className="flex items-start space-x-2">
                        <span>E-{anime?.episodes}</span>
                        <DotsCircleHorizontalIcon className="h-1 w-1 mt-3"/>
                        <span>R-{anime?.score}</span>
                    </div>
                    <button>{anime?.start_date.slice(0,4)}</button>
                    
                </div>
            </div>
           
        </div>
    )
}

export default Card
