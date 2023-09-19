import Book from "./Book";
import data from "./data";

function Books() {
    return (
        <div>
            <Book 
            Books={data}
            />
        </div>
    )
    
}

export default Books;