type CardProps = {
    City: {
        city:string;
        country:string;
        imageUrl:string;
        visited:boolean;
    }
}


function Card({City}: CardProps) {
    const {city, country, imageUrl, visited} = City;
    return (
        <div>
            <h1>Card</h1>
            <p>{city}</p>
            <p>{country}</p>
            <img src={imageUrl} alt={city} />
            {visited ? <p>Visited</p> : <p>Not Visited</p>}
        </div>

    )
        
}


export default Card;