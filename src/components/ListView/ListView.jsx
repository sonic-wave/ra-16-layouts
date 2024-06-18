import './ListView.css'

let key = 0;

const ShopItem = ({ product }) => {
    return (
        <>
            <div className='item'>
                <img className='item-image' src={product.img} alt={product.name} />
                <div className='item-name'>{product.name}</div>
                <div className='item-color'>{product.color}</div>
                <div className='item-price'>${product.price}</div>
                <button className='item-button'>Add to Cart</button>
            </div>
        </>
    )
}

export const ListView = ({ products }) => {
    return (
        <>
            <div className='item-container'>
                {products.map(product => (
                    <ShopItem className="item" key={key++} product={product} />
                ))}
            </div>
        </>
    )
}
