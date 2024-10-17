import "./Profile.css";
import PropTypes from "prop-types";

function formatNumber(number) {
  return number.toLocaleString('en-US');
}

export const Profile = ({user}) => {
  const {username, tag, location, avatar, stats} = user
  
return (
  <div className="profile">
<div className="description">
  <img
    src={avatar}
    alt="User avatar"
    className="avatar"
  />
  <p className="name">{username}</p>
  <p className="tag">@{tag}</p>
  <p className="location">{location}</p>


<ul className="stats">
  <li>
    <span className="label">Followers: </span>
    <span className="quantity">{formatNumber(stats.followers)}</span>
  </li>
  <li>
    <span className="label">Views: </span>
    <span className="quantity">{formatNumber(stats.views)}</span>
  </li>
  <li>
    <span className="label">Likes: </span>
    <span className="quantity">{formatNumber(stats.likes)}</span>
  </li>
</ul>
</div>
</div>
)}

Profile.propTypes ={
  user: PropTypes.shape({
  username: PropTypes.string, 
  tag: PropTypes.string,
  location: PropTypes.string, 
  followers: PropTypes.number, 
  views: PropTypes.number, 
  likes: PropTypes.number,
  }).isRequired
}