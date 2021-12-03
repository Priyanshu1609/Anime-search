import Card from "./Card"

const Content = ({topAnime}) => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:mt-20 lg:mx-16">
            {topAnime.map((anime)=>(
                <Card anime = {anime}/>
            ))}

        </div>
    )
}

export default Content
