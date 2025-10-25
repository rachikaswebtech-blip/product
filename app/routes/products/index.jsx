import React from "react";
import { useLoaderData } from "react-router";


export const loader = async () => {
//   const shop = import.meta.env.VITE_SHOPIFY_APP_URL;
// const token = import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN;

const shop = process.env.SHOPIFY_APP_URL;
const token = process.env.SHOPIFY_ACCESS_TOKEN;


  const query = `
    {
      products(first: 10) {
        edges {
          node {
            title
            description
            variants(first: 5) {
              edges {
                node {
                  title
                  price
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(`https://${shop}/admin/api/2023-10/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": token,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API responded with status ${response.status}`);
    }

    const jsonResponse = await response.json();

    if (jsonResponse.errors) {
      throw new Error(JSON.stringify(jsonResponse.errors));
    }

    const products = jsonResponse.data.products.edges.map(edge => {
      const product = edge.node;
      const variants = product.variants.edges.map(v => v.node);
      return {
        title: product.title,
        description: product.description,
        variants,
      };
    });

    return { products };
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return { products: [], error: error.message };
  }
};

export default function ProductsPage() {
  const { products, error } = useLoaderData();

  const th = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f9f9f9",
    fontWeight: "bold"
  };

  const td = {
    border: "1px solid #ddd",
    padding: "8px",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shopify Products</h1>
      {error && (
        <p style={{ color: "red" }}>
          Error loading products: {error}
        </p>
      )}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={th}>Title</th>
            <th style={th}>Description</th>
            <th style={th}>Variant</th>
            <th style={th}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && !error && (
            <tr>
              <td style={td} colSpan={4}>
                No products found.
              </td>
            </tr>
          )}
          {products.map(product =>
            product.variants.length > 0 ? (
              product.variants.map((variant, i) => (
                <tr key={`${product.title}-${i}`}>
                  <td style={td}>{product.title}</td>
                  <td style={td}>{product.description}</td>
                  <td style={td}>{variant.title}</td>
                  <td style={td}>{variant.price}</td>
                </tr>
              ))
            ) : (
              <tr key={product.title}>
                <td style={td}>{product.title}</td>
                <td style={td}>{product.description}</td>
                <td style={td}>-</td>
                <td style={td}>-</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}






