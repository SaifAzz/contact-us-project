// 'use client'; // Add this if you're using Next.js 13+ with app directory (only for client components)

// import { useEffect, useState } from 'react';
// import Layout from '../components/Layout';
// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// interface Ad {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// export default function Ads() {
//   const [ads, setAds] = useState<Ad[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchAds() {
//       try {
//         const response = await fetch(`${process.env.BASE_URL}/api/ads`);
//         const data = await response.json();
//         console.log(data);
//         setAds(data);
//       } catch (error) {
//         console.error('Failed to fetch ads:', error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchAds();
//   }, []);

//   return (
//     <Layout>
//       <div className="bg-black text-center pt-23 pb-4 px-4">
//         <h2 className="text-5xl font-bold text-white relative inline-block">
//           Ads
//           <span className="block w-20 h-1 bg-purple-500 mx-auto mt-2"></span>
//         </h2>
//         <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
//           Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus.
//           <br />
//           Auctor aenean ut euismod at integer id nulla cursus te
//         </p>
//       </div>

//       <section className="bg-black px-4 pb-12">
//         {loading ? (
//           <p className="text-white text-center">Loading ads...</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {ads.map((ad) => (
//               <div
//                 key={ad.id}
//                 className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
//               >
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={ad.image}
//                     alt={ad.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-6 relative">
//                   <h3 className="text-gray-900 text-xl font-bold leading-tight mb-2">
//                     {ad.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {ad.description}
//                   </p>
//                   <Link
//                     href={`/ads/${ad.id}`}
//                     className="absolute top-6 right-6 bg-gray-200 hover:bg-gray-300 rounded-full p-2 border border-gray-300"
//                     title="View details"
//                   >
//                     <ArrowRight size={20} className="text-gray-900" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </Layout>
//   );
// }
