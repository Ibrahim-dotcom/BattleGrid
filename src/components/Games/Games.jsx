import { Card, Button } from 'react-bootstrap';
import games from './Games.json'
import codm from '/assets/images/codm.webp'
import './Games.css'

function Games() {
    return (
        <div style={{paddingTop: 15}} className='games-wrapper'>
                <h1>Our Games</h1>
        <div className='game-cards-container'>


            {
                games.map(game => (
                <Card style={{backgroundImage: `url(/assets/images/${game.imageUrl})`}} key={game.title} cl>
                    {/* <Card.Img variant="top" src={`/assets/images/${game.imageUrl}`} xsrc={`'../../assets/images/'${game.image}`}  alt={game.image} xheight={'200px'}/> */}
                    <Card.Body>
                      <Card.Title>{game.title}</Card.Title>
                      {/* <Card.Text>
                        {game.title}
                      </Card.Text> */}
                      <Button variant="primary" ><div className='player'><span>   </span></div></Button>
                    </Card.Body>
                </Card>
              
                ))
            }

            {/* {
                games.map(game => (
                <Card style={{ width: '18rem', }} key={game.title}>
                    <Card.Img variant="top" src={`/assets/images/${game.imageUrl}`} xsrc={`'../../assets/images/'${game.image}`}  alt={game.image} xheight={'200px'}/>
                    <Card.Body>
                      <Card.Title>{game.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              
                ))
            } */}

        </div>
        </div>
    )
}

export default Games;