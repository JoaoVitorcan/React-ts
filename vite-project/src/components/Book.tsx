type BookProps = {
    book: {
        title: string;
        author: string;
        year: number;
        genre: string;
        image: string;
    }
}

function Book({book}: BookProps) {
    const {title, author, year, genre, image} = book;
    return (
        <div>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{year}</p>
            <p>{genre}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Book;