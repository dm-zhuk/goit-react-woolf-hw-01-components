import React from 'react';
import styles from './index.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.decription}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map(([label, quantity]) => (
          <li className={styles.li}>
            <span className={styles.label}>{label}</span>
            <span className={styles.quantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
