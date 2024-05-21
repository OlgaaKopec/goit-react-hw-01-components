import "./Profile.css";
import data from "data/user.json";
import PropTypes from "prop-types";

function formatNumber(number) {
  return number.toLocaleString('en-US');
}

export const Profile = ({username, tag, location, followers, views, likes}) => {
  
return (
  <>
  <div className="profile">
<div className="description">
  <img
    src={data.avatar}
    alt="User avatar"
    className="avatar"
  />
  <p className="name">{data.username}</p>
  <p className="tag">@{data.tag}</p>
  <p className="location">{data.location}</p>
</div>

<ul className="stats">
  <li>
    <span className="label">Followers: </span>
    <span className="quantity">{formatNumber(data.stats.followers)}</span>
  </li>
  <li>
    <span className="label">Views: </span>
    <span className="quantity">{formatNumber(data.stats.views)}</span>
  </li>
  <li>
    <span className="label">Likes: </span>
    <span className="quantity">{formatNumber(data.stats.likes)}</span>
  </li>
</ul>
</div>
</>
)}

Profile.propTypes ={
  username: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired, 
  followers: PropTypes.number.isRequired, 
  views: PropTypes.number.isRequired, 
  likes: PropTypes.number.isRequired,
}