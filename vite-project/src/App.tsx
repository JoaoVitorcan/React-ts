import './App.css'
import Book from './components/Book';


const book1 = {
  title: "O Senhor dos Anéis",
  author: "J.R.R. Tolkien",
  year: 1954,
  genre: "Fantasia",
  image: "https://a-static.mlcdn.com.br/1500x1500/livro-a-sociedade-do-anel-capa-os-aneis-de-poder/magazineluiza/235381700/435e208634bd6a1344a4065ba0da771c.jpg",
  isFavorite: true,
};

const book2 = {
  title: "Harry Potter e a Pedra Filosofal",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasia",
  image: "https://jamboeditora.com.br/wp-content/uploads/2020/09/jamboeditora-pedrafilosofal-560x560.png",
  isFavorite: true,
}

const book3 = {
  title: "1984",
  author: "Geoger Orwell",
  year: 1949,
  genre: "Distopia",
  image: "https://m.media-amazon.com/images/I/51-DZ1v5gSL._SX343_BO1,204,203,200_.jpg",
  isFavorite: false,
}

function App() {
  return (
    <>
      <Book
        book={book1} 
      />

      <Book
        book={book2}
      />

      <Book
        book={book3}
      />
    </>
  )
}

export default App
