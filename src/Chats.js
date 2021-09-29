import React from 'react';
import './Chats.css';
import Chat from './Chat';

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Madison"
        message="Can I be your baby?"
        timestamp="5 seconds ago"
        profilePicture="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/167130185_468273291288243_2782201234129467819_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8631f5&_nc_ohc=KGVNsiNE8_wAX8gKybq&_nc_ht=scontent.fdad2-1.fna&oh=74bf14160e632f66b778e2ec2b20c927&oe=61725705"
      />
      <Chat
        name="Kendall"
        message="You look damned hot"
        timestamp="3 minutes ago"
        profilePicture="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/241768976_394444782040038_7908778398023538209_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=oiCZoSlRnsUAX_uDFM8&_nc_ht=scontent.fdad1-1.fna&oh=a966116e903639befc21572b66f191a4&oe=61706F23"
      />
      <Chat
        name="Ariana"
        message="Bae, just fall in love with you at the first sight"
        timestamp="17 minutes ago"
        profilePicture="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/241668134_397583885054157_4586748835080075007_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mzXP1wkeLQMAX8_Fvp6&_nc_ht=scontent.fdad1-2.fna&oh=329a9675817fd17955809b43273aca59&oe=61798BFB"
      />
    </div>
  );
};

export default Chats;
