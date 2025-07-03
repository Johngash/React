import products from './products'
import ProductCard from './ProductCard'

function App() {
  return (
    <div className='container'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          inStock={product.inStock}
          rating={product.rating}
          seller={product.seller}
        />
      ))}
    </div>
  )
}

export default App
