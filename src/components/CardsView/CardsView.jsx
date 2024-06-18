import './CardView.css'

let key = 0;

const ShopCard = ({ product }) => {
    return (
        <>
            <div className='card'>
                <div className='card-name'>{product.name}</div>
                <div className='product-color'>{product.color}</div>
                <img className='product-image' src={product.img} alt={product.name} />
                <div className='product-footer'>
                    <div className='product-price'>${product.price}</div>
                    <button className='product-button'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export const CardView = ({ products }) => {
    return (
        <>
            <div className='cards-container'>
                {products.map(product => (
                    <ShopCard className="card" key={key++} product={product} />
                ))}
            </div>
        </>
    )
}
