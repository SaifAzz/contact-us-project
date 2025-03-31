import { ArrowRight } from 'lucide-react';
import {
  productCard, productImage, productContent,
  productTitle, productDescription, productMeta, productButton,
} from '../styles/styles';

interface ProductProps {
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
  }
}
export default function ProductCard({ product }: ProductProps) {
  return (
    <div className={productCard}>
      <img src={product.image} alt={product.name} className={productImage} />
      <div className={productContent}>
        <h3 className={productTitle}>{product.name}</h3>
        <p className={productDescription}>{product.description}</p>
        <p className={productDescription}>Price: ${product.price}</p>
        <p className={productMeta}>Quantity: {product.quantity}</p>
        <button className={productButton}>
          <ArrowRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
