import React from 'react';
import { ListItem, Status, Avatar, Name } from './index';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </ListItem>
  );
}

export default FriendListItem;
