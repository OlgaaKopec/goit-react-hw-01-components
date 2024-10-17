import "./Statistics.css";
import PropTypes from "prop-types";

export const Statistics =  ({ data = {} }) => {
  const { title, stats = [] } = data;

return (
<section className="statistics">
{/* {title && <h2 className="title">{title}</h2>} */}
<h2 className="title">STATS FOR HW</h2>
<th className="statList">
    {stats.map ((stat) => (
    <td className="item" key={stat.id}>
    <span className="label">{stat.label}</span>
    <span className="percentage">{stat.percentage}%</span>
  </td>
    ))}
</th>

</section>

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