import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Madison',
      message: 'Can I be your baby?',
      image:
        'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/167130185_468273291288243_2782201234129467819_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8631f5&_nc_ohc=KGVNsiNE8_wAX8gKybq&_nc_ht=scontent.fdad2-1.fna&oh=74bf14160e632f66b778e2ec2b20c927&oe=61725705',
    },
    {
      name: 'Madison',
      message: 'I have been dreaming of you',
      image:
        'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/167130185_468273291288243_2782201234129467819_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8631f5&_nc_ohc=KGVNsiNE8_wAX8gKybq&_nc_ht=scontent.fdad2-1.fna&oh=74bf14160e632f66b778e2ec2b20c927&oe=61725705',
    },
    {
      message: "What's up honey?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput('');
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with Madison on September 23, 2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />

            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textMe">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="chatScreen__inputField"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="chatScreen__inputButton">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
