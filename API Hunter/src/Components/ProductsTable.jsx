import { ProductCard } from "./ProductCard";

export function ProductsTable({ data }) {
  return (
    <table
      className="w-[40%] border-collapse border border-gray-300"
    >
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border border-gray-300">S.no.</th>
          <th className="p-2 border border-gray-300">Brand</th>
          <th className="p-2 border border-gray-300">Category</th>
          <th className="p-2 border border-gray-300">Price</th>
        </tr>
      </thead>
      <tbody>
        {/* map through the data */}
        {data.map((item) => (
          <ProductCard
            key={item.id}
            brand={item.brand}
            category={item.category}
            price={item.price}
            id={item.id}
          />
        ))}
      </tbody>
    </table>
  );
}
export default ProductsTable;
