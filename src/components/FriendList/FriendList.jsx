import React from 'react';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { ListItems } from './index';
import friends from 'data/friends.json';

const FriendList = () => {
  return (
    <ListItems>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ListItems>
  );
};

export default FriendList;
