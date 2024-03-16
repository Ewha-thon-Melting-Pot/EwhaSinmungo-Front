import React from "react";
import styles from "./MainContent.module.css";

// 상품 카드 컴포넌트
function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.imageUrl}
        alt={product.title}
        className={styles.productImage}
      />
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>{product.price}</p>
    </div>
  );
}

// 메인 콘텐츠 영역 컴포넌트
function MainContent() {
  const products = [
    // 상품 데이터 배열 예시
    {
      id: 1,
      title: "Product 1",
      price: "$99.99",
      imageUrl: "path/to/image1.png",
    },
    {
      id: 2,
      title: "Product 2",
      price: "$199.99",
      imageUrl: "path/to/image2.png",
    },
    {
      id: 3,
      title: "Product 3",
      price: "$3",
      imageUrl: "path/to/image2.png",
    },

    // ...더 많은 상품들
  ];

  return (
    <main className={styles.mainContent}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

export default MainContent;
