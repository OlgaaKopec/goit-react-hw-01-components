import "./FriendList.css";
import PropTypes from "prop-types";

export const FriendListItem = ({friend})=> {
const {avatar, name, isOnline} =  friend

return (
<li className="friendListItem">
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <div className="friendInfo">
  <span className={`status ${isOnline ? "isOnline" : "offline"}`}>
  {isOnline ? '' : ''}</span>
  <p className="friendName">{name}</p>
  </div>
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