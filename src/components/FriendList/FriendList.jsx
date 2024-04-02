import React from 'react';
import './index';

const FriendList = ({ avatar, name, isOnline, id }) => {
  return (
    <div className="wrapper">
      <ul className="friend-list">
        {Object.entries(FriendListItem).map(([avatar, name, isOnline, id]) => (
          <li key={id}>
            <span className="isOnline">{isOnline}</span>
            <span className="avatar">{avatar}</span>
            <img src={avatar} alt="User avatar" className="avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
/* 
  <LeaderBoardProfiles>
    <FriendListItem>
    </FriendListItem>
  </LeaderBoardProfiles>
</LeaderBoard>;
 */
{
  /* const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
); */
}
