import { Link } from "react-router-dom";

export function ProductCard({ brand, category, price, id }) {
  return (
    <tr
      data-testid="item"
      className="border-[1px] border-gray-300 hover:bg-gray-100"
    >
      <td className="p-2 text-center border border-gray-300">{id}</td>
      <td className="p-2 text-blue-600 hover:underline">
        {/* Add Link here and keep the data-testid="brand" on Link tag */}
        <Link to={`/some-path/${id}`} data-testid="brand">
          {brand}
        </Link>
      </td>
      <td className="p-2 text-gray-700 border border-gray-300" data-testid="category">
        {category}
      </td>
      <td className="p-2 text-gray-900 font-semibold border border-gray-300" data-testid="price">
        {price}
      </td>
    </tr>
  );
}