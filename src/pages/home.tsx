import Layout from '../components/Layout';
import AdCard from '../components/AdCard';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { getAds, getProducts } from './lib/api';
import type { Ad, Product } from '../types';
import {
  homeSection, homeOverlay, homeTextWrapper, homeTitle,
  homeDescription, homeButtons, homeBtnPrimary, homeBtnSecondary,
  sectionHeading, sectionDescription
} from '../styles/styles';


export default function HomePage() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const [adsData, productsData] = await Promise.all([getAds(), getProducts()]);
      setAds(adsData as Ad[]);
      setProducts(productsData as Product[]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      {/* HOME Section */}
      <section id="home" className={homeSection}>
        <div
          className={homeOverlay}
          style={{
            backgroundImage: `linear-gradient(90deg, #111111 1.49%, rgba(17, 17, 17, 0.7) 114.58%), url('/images/home-back.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        />
        <div className={homeTextWrapper}>
          <h1 className={homeTitle}>Welcome to</h1>
          <p className={homeDescription}>
            Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus.
          </p>
          <div className={homeButtons}>
            <a href="#ads" className={homeBtnPrimary}>View Ads</a>
            <a href="#contact" className={homeBtnSecondary}>Contact Us</a>
          </div>
        </div>
      </section>


      {/* ADS Section */}
      <section id="ads" className="bg-white text-center pt-28 pb-12 px-4">
        <h2 className={`${sectionHeading} text-gray-900`}>
          Ads
          <span className="block w-20 h-1 bg-purple-500 mx-auto mt-2"></span>
        </h2>
        <p className={`${sectionDescription} text-gray-600`}>
          Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ads.map((ad) => <AdCard key={ad.id} ad={ad} />)}
        </div>
      </section>

      {/* PRODUCTS Section */}
      <section id="products" className="bg-black text-center pt-28 pb-12 px-4">
        <h2 className={`${sectionHeading} text-white`}>
          Products
          <span className="block w-20 h-1 bg-purple-500 mx-auto mt-2"></span>
        </h2>
        <p className={`${sectionDescription} text-gray-400`}>
          Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>


    </Layout>
  );
}
