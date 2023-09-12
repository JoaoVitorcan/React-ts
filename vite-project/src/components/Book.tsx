type BookProps = {
    title: string;
    author: string;
    year: number;
    genre: string;
    image: string;
}

function Book(props: BookProps) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <p>{props.year}</p>
            <p>{props.genre}</p>
            <img src={props.image} alt={props.title} />
        </div>
    )
}

export default Book;