import Card from './Card';

const infoRioDeJaneiro = {
    city: 'Rio de Janeiro',
    country: 'Brasil',
    imageUrl: '/src/assets/riodejaneiro.png',
    visited: true,
};

const infoCidadeDoCabo = {
    city: 'Cidade do Cabo',
    country: 'África do Sul',
    imageUrl: '/src/assets/cidadedocabo.jpg',
    visited: true,
};

const infoAcapulco = {
    city: 'Acapulco',
    country: 'México',
    imageUrl: '/src/assets/acapulo.jpg',
    visited: false,
};


function CardList() {
    return (
        <div>
            <Card 
            City={infoRioDeJaneiro}
            />
            <Card 
            City={infoCidadeDoCabo}
            />
            <Card
            City={infoAcapulco}
            />
        </div>

    )
        
}



export default CardList;