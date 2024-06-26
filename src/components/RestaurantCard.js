import { SWIGGY_CDN } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } =
    restaurant.info;
  return (
    <div className="m-2 p-2 w-52 bg-pink-50">
      <img
        src={SWIGGY_CDN + cloudinaryImageId}
        className="rounded-lg w-full h-40"
      />
      <h2 className="text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Rating {avgRating}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};
export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute p-1 bg-red-200 rounded-lg m-1">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
export default RestaurantCard;
