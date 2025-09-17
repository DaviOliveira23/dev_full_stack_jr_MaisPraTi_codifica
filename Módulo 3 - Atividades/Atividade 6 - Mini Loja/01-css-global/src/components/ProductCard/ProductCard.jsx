import Button from "../Button/Button";
import './ProductCard.css';

function ProductCard({ product }) {
    return (
        <div className="card">
            <div className="img-wrap">
                <img src={product.image} alt={product.title} loading="lazy" />
            </div>

            <div className="card-body">
                {product.tag && <span className="tag">{product.tag}</span>}
                <h3 className="card-title" title={product.title}>{product.title}</h3>

                <div className="row">
                    <p className="price">R$ {product.price}</p>
                    <p className="rating">{"★".repeat(product.rating)}</p>
                </div>

                <Button variant="solid">Adicionar</Button>
            </div>
        </div>
    );
}

export default ProductCard;
