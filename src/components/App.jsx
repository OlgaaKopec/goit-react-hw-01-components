import {Profile} from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics";
import {FriendList} from "./FriendList/FriendList";
import {TransactionHistory} from "./Transactions/TransactionHistory";

import statsData from "data/data.json";
import user from "data/user.json";
import friends from "data/friends.json";
import transactionsData from "data/transactions.json";

export function App() {
  return (
    <>
<Profile user={user} />
<Statistics data={statsData} />
<FriendList friends={friends} />
<TransactionHistory transactionsItems={transactionsData} />
</>
  )
}