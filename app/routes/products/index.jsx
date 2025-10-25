import React from "react";
import { useLoaderData } from "react-router";


export const loader = async () => {
//  const shop = import.meta.env.VITE_SHOPIFY_APP_URL;
// // console.log( shop);
//  const token = import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN;
// // console.log( token);

// // const shop = process.env.SHOPIFY_APP_URL;
// // const token = process.env.SHOPIFY_ACCESS_TOKEN;

// // const shop = "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";
// // const token = "product-store-122359.myshopify.com";



//   const query = `
//     {
//       products(first: 10) {
//         edges {
//           node {
//             title
//             description
//             variants(first: 5) {
//               edges {
//                 node {
//                   title
//                   price
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   try {
//     const response = await fetch(`https://${shop}/admin/api/2023-10/graphql.json`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Shopify-Access-Token": token,
//       },
//       body: JSON.stringify({ query }),
//     });

//     if (!response.ok) {
//       throw new Error(`Shopify API responded with status ${response.status}`);
//     }

//     const jsonResponse = await response.json();

//     if (jsonResponse.errors) {
//       throw new Error(JSON.stringify(jsonResponse.errors));
//     }

//     const products = jsonResponse.data.products.edges.map(edge => {
//       const product = edge.node;
//       const variants = product.variants.edges.map(v => v.node);
//       return {
//         title: product.title,
//         description: product.description,
//         variants,
//       };
//     });

//     return { products };
//   } catch (error) {
//     console.error("Error fetching products:", error.message);
//     return { products: [], error: error.message };
//   }
};

export default function ProductsPage() {
  // const { products, error } = useLoaderData();

  // const th = {
  //   border: "1px solid #ddd",
  //   padding: "8px",
  //   textAlign: "left",
  //   backgroundColor: "#f9f9f9",
  //   fontWeight: "bold"
  // };

  // const td = {
  //   border: "1px solid #ddd",
  //   padding: "8px",
  // };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>dfdfdfdfdf</h1>
    </div>
  );
}






