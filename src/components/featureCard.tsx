import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  href?: string;
}

export default function FeaturedCard({ title, image, href = '#' }: CardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto bg-black text-white group transition-all hover:scale-[1.02] duration-300">
      <div className="h-60 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold leading-snug">{title}</h3>
        <Link
          href={href}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition"
        >
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
