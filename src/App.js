import React, {useState, useEffect} from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

import './App.css';

const App = () => {
  const [favorite, setFavorite] = useState({
    like: [],
    dislike: [],
  });
  const [cur, setCur] = useState(0);
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
      url: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/241668134_397583885054157_4586748835080075007_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mzXP1wkeLQMAX8_Fvp6&_nc_ht=scontent.fdad1-2.fna&oh=329a9675817fd17955809b43273aca59&oe=61798BFB',
    },
    {
      name: 'Huy Truong',
      url: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/241451763_669768343985900_783407437978965873_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=j7HuioWE5pUAX88IWoR&_nc_ht=scontent.fdad2-1.fna&oh=8d4007f30ce2a9a2f954792674832411&oe=61704046',
    },
  ]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            {/* ":" can accept any value */}
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header favorite={favorite} />
            <TinderCards
              favorite={favorite}
              setFavorite={setFavorite}
              setCur={setCur}
              cur={cur}
              people={people}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
