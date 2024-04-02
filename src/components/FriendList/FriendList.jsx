import React from 'react';
import './FrienList.styled';

/* В компоненті FriendList обов'язково повинен викликатися компонент FriendListItem, який в props буде отримувати інформацію про одного друга і рендерити li з цими даними. */

const FrienList = ({ avatar, name, isOnline, id }) => {
  return (
    <div className="friend-list">
      <ul className="friends">
        {Object.entries(FriendListItem).map(([avatar, name, isOnline, id]) => (
          <li key={id}>
            <span className="isOnline">{isOnline}</span>
            <span className="avatar">{avatar}</span>
            <img src={avatar} alt="User avatar" className="avatar" />
            <span className="name">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrienList;

<StatList>
  {stats.map(({ id, label, percentage }) => {
    const backgroundColor = getRandomColor();

    return (
      <StatItem key={id} backgroundColor={backgroundColor}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </StatItem>
    );
  })}
</StatList>;
