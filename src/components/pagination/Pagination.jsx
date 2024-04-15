import { useEffect, useMemo, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = [...Array(products.length / 10)];

  const handlePagination = (currentPage) => {
    setPage(currentPage);
  };
  const handlePrevClick = () => {
    setPage(page - 1);
  };
  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Pagination</h2>
      <div className="grid grid-cols-5 gap-6">
        {products.slice(page * 10 - 10, page * 10).map((product) => (
          <div key={product.id} className="bg-my-blue rounded-md p-3">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-60 object-cover"
            />
            <h4 className="my-4">{product.title}</h4>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {products.length > 0 && (
        <div className="w-fit mt-10 mx-auto">
          <span
            className={`p-2 text-lg border-2 border-black border-collapse cursor-pointer select-none ${
              page <= 1 || page > 10 ? "hidden" : "inline"
            }`}
            onClick={handlePrevClick}
          >
            ◀️
          </span>
          {totalPages.map((_, i) => {
            return (
              <span
                className={`py-2 px-4 text-lg border-2 border-black border-collapse cursor-pointer select-none ${
                  page === i + 1 ? "bg-my-yellow" : "bg-white"
                }`}
                onClick={() => handlePagination(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={`p-2 text-lg border-2 border-black border-collapse cursor-pointer select-none ${
              page < 1 || page >= 10 ? "hidden" : "inline"
            }`}
            onClick={handleNextClick}
          >
            ▶️
          </span>
        </div>
      )}
    </section>
  );
};

export default Pagination;
