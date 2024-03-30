import React from 'react';
import '../components/Profile/profile.css';
import 'normalize.css';
import Profile from '../components/Profile/Profile';
import user from '../data/user.json';
/* import transactions from './data/transactions.json';
import data from './data/data.json';
import friends from './data/friends.json'; */

const root = document.getElementById('root');

// ReactDOM.createRoot(root).render(<App />);

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default App;
