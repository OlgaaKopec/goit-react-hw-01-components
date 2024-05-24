import "./FriendList.css";
import PropTypes from "prop-types";

export const FriendListItem = ({friend})=> {
const {avatar, name, isOnline} =  friend

return (
<li className="itemList">
  <span className={`status ${isOnline ? "isOnline" : "offline"}`}>
        {isOnline ? '' : ''}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
)}

FriendListItem.propTypes={
friend: PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.number, 
  avatar:  PropTypes.string,
  isOnline: PropTypes.bool,
}).isRequired
}