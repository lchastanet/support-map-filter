import PropTypes from "prop-types"

function HouseCard({ house }) {
  return (
    <div className="card">
      <div className="card-header">
        <div
          className="card-img"
          style={{ backgroundImage: `url(${house.img})` }}
        ></div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{house.name}</h2>
        <p className="card-description">{house.desc}</p>
        <button className="card-button">Buy !</button>
      </div>
    </div>
  )
}

HouseCard.propTypes = {
  house: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
  }),
}

export default HouseCard
