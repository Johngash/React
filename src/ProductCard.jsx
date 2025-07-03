function ProductCard({ name, price, image, inStock, rating, seller}){

    return(
        <div className="productDiv">
            <img src={image} alt={`a pic of ${name}`} />
            <div>
                <h2>{name}</h2>
                <p>{price}$</p>
                <p>{inStock ? "In Stock" : "Out of Stock"}</p>
                <p>Rating: {"⭐".repeat(Math.round(rating))} ({rating})</p>
                <p>Seller: {seller}</p>
            </div>
            
        </div>
    )
}

export default ProductCard