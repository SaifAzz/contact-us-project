import { ArrowRight } from 'lucide-react';
import {
  adCard, adImageWrapper, adImage, adContent, adTitle,
  adDescription, adLink,
} from '../styles/styles';

interface AdCardProps {
  ad: {
    id: number;
    title: string;
    image: string;
    description: string;
  }
}
export default function AdCard({ ad }: AdCardProps) {
  return (
    <div className={adCard}>
      <div className={adImageWrapper}>
        <img src={ad.image} alt={ad.title} className={adImage} />
      </div>
      <div className={adContent}>
        <h3 className={adTitle}>{ad.title}</h3>
        <p className={adDescription}>{ad.description}</p>
        <a href={`/ads/${ad.id}`} className={adLink}>
          <ArrowRight size={20} className="text-gray-900" />
        </a>
      </div>
    </div>
  );
}
