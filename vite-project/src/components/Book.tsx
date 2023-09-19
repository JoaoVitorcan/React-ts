type BookProps = {
    Books: {
        title: string;
        author: string;
        year: number;
        genre: string;
        image: string;
    } []
    
}

function Book({ Books}: BookProps) {
    return (
        <div className="row">
            {Books.map((book)=>(
                <div className="col-md-4 p-1">
                    <h1 className="card-title">{book.title}</h1>
                    <h2 className="card-text">{book.author}</h2>
                    <h3 className="card-text">{book.year}</h3>
                    <h4 className="card-text">{book.genre}</h4>
                    <img src={book.image} alt={book.title}/>
                </div>
            ))}
        </div>
    )
    
}

export default Book;