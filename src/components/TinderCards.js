import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../css/TinderCards.css';
import axios from '../helper/axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchPeople() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchPeople();
    }, []);

    const swipeHandler = (direction, name) => {
        console.log('removing: ' + name);
    };

    const cardLeftHandler = (name) => {
        console.log(name + ' left the screen');
    };

    return (
        <div className="tinderCards">
            <div className="tinderCard__container">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swipeHandler(dir, person.name)}
                        onCardLeftScreen={() => cardLeftHandler(person.name)}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${person.profile_img})`,
                            }}
                            className="profile__card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
