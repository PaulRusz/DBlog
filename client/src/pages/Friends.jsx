import react from "react";
import { useState } from "react";
import "../styles/Friends.css";

const friendsData = [
  { id: 1, name: "Friend 1", username: "friend1", profilePic: "url-to-url1" },
  { id: 2, name: "Friend 2", username: "friend2", profilePic: "url-to-url2" },
];

const Friend = ({ friend }) => (
  <div>
    <img src={friend.profilePic} alt={friend.name} />
    <a href={`/profile/${friend.username}`}> {friend.name}</a>
  </div>
);

const FriendsPage = () => {
  return (
    <div>
      <div className="header2">
        <h1>Friends Page</h1>
      </div>
      <div className="container">
        {friendsData.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
