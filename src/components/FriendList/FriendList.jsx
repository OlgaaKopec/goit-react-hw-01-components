import "./FriendList.css";
import {FriendListItem} from "./FriendListItem.jsx";

export const FriendList = ({friends}) =>{
const friendList = friends.friendsArr

return (

<ul className="friendList">
    {friendList.map( friend =>
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
    )}

</ul>
)
}