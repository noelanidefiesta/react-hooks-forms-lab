import React, { useState } from "react";
import ProductForm from "./ProductForm";

function App() {
    const [products, setProducts] = useState([]);

    function handleAddProduct(newProduct) {
        setProducts([...products, newProduct]);
    }

    return (
        <div>
            <h1>My Shopping List</h1>
            <ProductForm onAddProduct={handleAddProduct} />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} ({product.category})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
