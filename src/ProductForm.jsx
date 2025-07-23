import React, { useState } from "react";

function ProductForm({ onAddProduct }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    function handleSubmit(event) {
        event.preventDefault();
        const newProduct = {
            id: Math.random(), // You can replace this with a better unique ID system
            name,
            category,
        };
        onAddProduct(newProduct);
        setName("");
        setCategory("Produce");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Category:
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </label>
            <button type="submit">Add to Cart</button>
        </form>
    );
}

export default ProductForm;
