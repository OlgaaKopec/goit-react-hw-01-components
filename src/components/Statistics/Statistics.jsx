import "./Statistics.css";
import PropTypes from "prop-types";
import stats from "data/data.json";

export const Statistics =  ({ data = {} }) => {
  const { title, stats = [] } = data;

return (
  <>
<section className="statistics">
{title && <h2 className="title">{title}</h2>}

<ul className="statList">
    {stats.map (stat => {
    <li className="item" key={stat.id}>
    <span className="label">{stat.label}</span>
    <span className="percentage">{stat.percentage}%</span>
  </li>
    })}
</ul>
</section> 
</>
)}


Statistics.propTypes ={
  data: PropTypes.shape({
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
}))}).isRequired
  }