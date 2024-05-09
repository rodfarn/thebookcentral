import Image from "next/image";
import styles from "./styles/page.module.css"



export default function Home() {

  
  return (
    <div>
    <div className={styles.titular}>
    <div className={styles.titulo}><h1>TheBook Central</h1>
    <h5 className={styles.h5}>Books for everyone</h5>       
    </div> 
    </div> 
      <Image
      src="/bookshelf.jpg"
      alt="Bookstore"
      width={2048}
      height={1365}
      className={styles.image_title}
     />
<main className={styles.container}>
  <h2 className={styles.card}>Discover the best books
    <description>&quot;Discover new perspectives and endless possibilities through reading. Books have the power to transport you to different worlds, broaden your understanding of diverse cultures, and spark your imagination, allowing you to explore beyond the confines of your own reality.&quot;
    </description>
  </h2>

      <p className={styles.card}>
        <Image
      src="/image.jfif"
      alt="Imagen"
      width={1024}
      height={1024}
      className={styles.image_card}
        />
        </p>

      <h2 className={styles.card}>New releases, classic authors, bestsellers and more
        <description>&quot;
          Exploring new authors, including bestsellers, and sharing them within a community fosters a vibrant literary ecosystem. 
          Diverse voices enrich our reading experiences, offering fresh insights, captivating storytelling, and diverse perspectives.
          &quot;</description> 
      </h2>

      <p className={styles.card}>
        <Image
      src="/coffee.jfif"
      alt="Imagen"
      width={1024}
      height={1024}
      className={styles.image_card}
        />
        </p>

      <h2 className={styles.card}>Join into a community
      <description>
      &quot;Step into a vibrant community dedicated to the love of literature. Engage with fellow book enthusiasts, share your favorite reads, and discover new literary treasures together. Whether you are a lifelong bookworm or just starting your reading journey, our community welcomes all who share a passion for storytelling and the written word.
      &quot;</description>
      </h2>

      
      <p className={styles.card}>
        <Image
      src="/youngweoman.jfif"
      alt="Imagen"
      width={1024}
      height={1024}
      className={styles.image_card}
        />
        </p>
    </main>
    </div>
  );
}


