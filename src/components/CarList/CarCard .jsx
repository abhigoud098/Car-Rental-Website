import PropTypes from 'prop-types';

const CarCard = ({ car, showDetails }) => (
  <div className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
    <div className="w-full h-[120px]">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
      />
    </div>
    <div className="space-y-2">
      <h1 className="text-primary font-semibold">{car.name}</h1>
      <div className="flex justify-between items-center text-xl font-semibold">
        <p>${car.price}/Day</p>
        <button
          onClick={() => showDetails(car)}
          className="py-2 px-4 bg-primary text-white rounded hover:bg-primary/80"
        >
          Details
        </button>
      </div>
    </div>
  </div>
);

// Prop validation
CarCard.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired, // make sure `details` is correct in your car object
  }).isRequired,
  showDetails: PropTypes.func.isRequired,
};

export default CarCard;
