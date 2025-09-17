import Button from "../Button/Button";
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <div className={styles.imgWrap}>
                <img src={product.image} alt={product.title} loading="lazy" />
            </div>

            <div className={styles.cardBody}>
                {product.tag && <span className={styles.tag}>{product.tag}</span>}
                <h3 className={styles.cardTitle} title={product.title}>{product.title}</h3>

                <div className={styles.row}>
                    <p className={styles.price}>R$ {product.price}</p>
                    <p className={styles.rating}>{"★".repeat(product.rating)}</p>
                </div>

                <Button variant="solid">Adicionar</Button>
            </div>
        </div>
    );
}

export default ProductCard;
