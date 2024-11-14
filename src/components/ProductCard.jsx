/* eslint-disable react/prop-types */
const ProductCard = ({ id, image, price, title, rating }) => {
  return (
    <div key={id} className="border p-4 rounded shadow-md">
      <img src={image} alt={title} className="h-40 w-full object-contain" />
      <h2 className="mt-2 font-bold">{title}</h2>
      <p className="text-gray-700">${price}</p>
      <p className="text-yellow-500">Rating: {rating.rate}</p>
    </div>
  );
};

export default ProductCard;
