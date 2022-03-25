import Profile from "./components/profile/Profile";
import user from './JSON/user.json'
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friend-list/FriendList";
import friends from "./JSON/friends.json"
import stat from './JSON/statistics-data.json'
import TransactionHistory from "./components/transaction/TransactionHistory";
import transactions from './JSON/transactions.json'

function App() {
  return (<div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Statistics title='Statistics' statistics={stat}/>
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;
