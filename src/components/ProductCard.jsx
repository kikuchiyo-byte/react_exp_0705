import { Package, Pencil,X } from "lucide-react";
import styles from "./ProductCard.module.css";

function ProductCard({ name, price, stock }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>
        <Package size={18} /> {name}
      </h2>
      <p className={styles.price}>¥{price}</p>
      {stock === 0 ? (
        <p className={styles.stock}><X size={14}/>在庫切れ</p>
      ) : (
        <p className={styles.stock}>在庫 {stock}</p>
      )}
      <button className={styles.button}>
        <Pencil size={14} /> 編集
      </button>
    </div>
  );
}

export default ProductCard;