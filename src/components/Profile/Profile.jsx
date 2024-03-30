import React from 'react';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="decription">
        <img src={avatar} alt="User avatar" className="avatar" />
        <div className="info">
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li className="stat">
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li className="stat">
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className="stat">
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
