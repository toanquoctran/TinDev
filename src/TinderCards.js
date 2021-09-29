import React, {useEffect, useState, useMemo} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@material-ui/core/IconButton';

const db = [
  {
    name: 'Duc Do',
    url: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/242216139_1020020072170599_2068511528324036151_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=z6WXkq1vT9kAX8rGbUZ&tn=9tzgOjqBxAu_I11P&_nc_ht=scontent.fdad1-2.fna&oh=234ba292fc11af247cd971eb4225a20a&oe=61715E83',
  },
  {
    name: 'Kendall Jenner',
    url: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/241768976_394444782040038_7908778398023538209_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=oiCZoSlRnsUAX_uDFM8&_nc_ht=scontent.fdad1-1.fna&oh=a966116e903639befc21572b66f191a4&oe=61706F23',
  },
  {
    name: 'Hoang Ngo',
    url: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/148624205_2824318111141643_5028140707721031415_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=yp7VjX2k0VsAX_D6H0V&_nc_ht=scontent.fdad1-3.fna&oh=b590d22d4656c91f30d013d1e16a8946&oe=617098B3',
  },
  {
    name: 'Ariana Grande',
    url: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/241668134_397583885054157_4586748835080075007_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mzXP1wkeLQMAX_fhgn9&_nc_ht=scontent.fdad1-2.fna&oh=dd5d45af722aa5876278b139b16acdc6&oe=61798BFB',
  },
  {
    name: 'Huy Truong',
    url: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/241451763_669768343985900_783407437978965873_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=j7HuioWE5pUAX88IWoR&_nc_ht=scontent.fdad2-1.fna&oh=8d4007f30ce2a9a2f954792674832411&oe=61704046',
  },
  {
    name: 'Madison Beer',
    url: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/167130185_468273291288243_2782201234129467819_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8631f5&_nc_ohc=KGVNsiNE8_wAX8gKybq&_nc_ht=scontent.fdad2-1.fna&oh=74bf14160e632f66b778e2ec2b20c927&oe=61725705',
  },
];

const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function TinderCards({favorite, setFavorite, cur, setCur, people}) {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
    console.log('swiped');
    if (direction === 'left') {
      let newD = favorite.dislike;
      newD.push(nameToDelete);
      setFavorite({
        like: favorite.like,
        dislike: newD,
      });
    } else if (direction === 'right') {
      let newL = favorite.like;
      newL.push(nameToDelete);
      setFavorite({
        like: newL,
        dislike: favorite.dislike,
      });
    }
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    console.log('swipe');
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div>
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Damion&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />
        <div className="tinderCards__cardContainer">
          {characters.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{backgroundImage: 'url(' + character.url + ')'}}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="swipeButtons__left"
          onClick={() => swipe('left')}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="swipeButtons__right"
          onClick={() => swipe('right')}
        >
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__flash">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default TinderCards;
