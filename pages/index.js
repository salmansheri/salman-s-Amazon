import Head from 'next/head'
import Image from 'next/image'; 
import {useEffect, useState} from 'react'; 

import Header from '@/components/Header'; 
import Banner from '@/components/Banner';
import ProductFeed from '@/components/ProductFeed';



export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await products.json(); 
      setProducts(data); 

    }

    fetchProducts(); 
  })

  return (
    <div className="bg-gray-100">
      <Head >
        <title>amazon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
      {/* banner  */}
      <Banner />


      {/* productField  */}
      <ProductFeed  products={products}  />
     
      

      </main>
     
     
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json()); 

//   return {
//     props: {
//       products, 
//     }
//   }
// }


// https://fakestoreapi.com/products