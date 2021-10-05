import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link, useHistory} from 'react-router-dom';
import tinder from './tinder-logo.jpeg';

const Header = ({backButton, favorite}) => {
  const history = useHistory();

  return (
    // BEM
    <div>
      <div className="header">
        {backButton ? (
          // if/else in react
          <IconButton onClick={() => history.replace(backButton)}>
            {/* change backButton to personIcon */}
            <ArrowBackIosIcon className="header__icon" fontSize="large" />
          </IconButton>
        ) : (
          // on the messages, render the back icon; on the homepage, show the person icon
          <IconButton onClick={() => alert(JSON.stringify(favorite))}>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        )}

        <Link to="/">
          <img className="header__logo" src={tinder} alt="tinder logo" />
          {/* click on the button icon to go back to the homepage */}
        </Link>

        <Link to="/chat">
          <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
            {/* click on the message icon to go to the chat page */}
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
