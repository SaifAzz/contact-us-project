// import { useEffect, useState } from 'react';
// import Layout from '../components/Layout';
// import { ArrowRight } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
// }

// const dummyProducts: Product[] = [
//   {
//     id: 1,
//     name: 'Lorem ipsum dolor sit amet consectetur.',
//     image: '/product1',
//     description: 'Analyze your traffic and performance.',
//   },
//   {
//     id: 2,
//     name: 'Lorem ipsum dolor sit amet consectetur.',
//     image: '/images/product-2.jpg',
//     description: 'Work from anywhere with seamless access.',
//   },
//   {
//     id: 3,
//     name: 'Lorem ipsum dolor sit amet consectetur.',
//     image: '/images/product-3.jpg',
//     description: 'Get deep insights into your metrics.',
//   },
// ];

// export default function Products() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     setProducts(dummyProducts);
//   }, []);

//   return (
//     <Layout>
//       {/* Title section under navbar */}
//       <div className="bg-black text-center pt-26 pb-4 px-4">
//         <h2 className="text-5xl font-bold text-white relative inline-block">
//           Products
//           <span className="block w-20 h-1 bg-purple-500 mx-auto mt-2"></span>
//         </h2>
//         <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
//           Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus.
//           <br />
//           Auctor aenean ut euismod at integer id nulla cursus te
//         </p>
//       </div>

//       {/* Product Cards */}
//       <section className="bg-black px-4 pb-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6 relative">
//                 <h3 className="text-white text-xl font-bold leading-tight mb-4">
//                   {product.name}
//                 </h3>
//                 <button 
//                   className="absolute top-6 right-6 bg-gray-800 hover:bg-gray-700 rounded-full p-2 border border-gray-700"
//                   title="View product details"
//                 >
//                   <ArrowRight size={20} className="text-white" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </Layout>
//   );
// }
