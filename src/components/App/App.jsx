import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import styles from 'components/Styles/styles.module.css';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

const App = () => {
  return (
    <div>
      <span className={styles.task}>Task I Profile</span>
      <Profile {...user} />
      <span className={styles.task}>Task II Statistics</span>
      <Statistics title="Upload stats" stats={data} />
      <span className={styles.task}>Task III Friend List</span>
      <FriendList friends={friends} />
      <span className={styles.task}>Task IV Transaction History</span>
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
