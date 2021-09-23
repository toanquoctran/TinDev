import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

const TinderCards = () => {
  const [people, setPeople] = useState([
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
      url: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/241176508_1215449052236906_8794995041286147308_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=b9115d&_nc_ohc=uk5lks5ffUIAX8vyRIH&_nc_ht=scontent.fdad1-1.fna&oh=18df24dab6a68cfbbae636d232f919de&oe=6151CBA1',
    },
    {
      name: 'Huy Truong',
      url: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/241451763_669768343985900_783407437978965873_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=j7HuioWE5pUAX88IWoR&_nc_ht=scontent.fdad2-1.fna&oh=8d4007f30ce2a9a2f954792674832411&oe=61704046',
    },
    {
      name: 'Madison Beer',
      url: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/167130185_468273291288243_2782201234129467819_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8631f5&_nc_ohc=KGVNsiNE8_wAX8gKybq&_nc_ht=scontent.fdad2-1.fna&oh=74bf14160e632f66b778e2ec2b20c927&oe=61725705',
    },
  ]);

  //   Piece of code which runs based on a condition
  useEffect(() => {
    //   this is where the code runs

    const unsubcribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // this is the cleanup
      unsubcribe();
    };
    // this will run ONCE when the components load and never again
  }, []);

  // const people = [];
  // people.push("Duc", "Hoang", "Huy")
  // INSTEAD, use the below line
  // setPeople([...people, "Duc", "Hoang", "Huy"])

  return (
    <div>
      {/* <h1>Tinder cards</h1> */}

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up, down']}
          >
            <div
              style={{backgroundImage: `url(${person.url})`}}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
