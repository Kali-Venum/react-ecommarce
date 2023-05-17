import React from "react";

// imports.
import Product from "../components/UI/Product";

function ProductsPage() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Product />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
