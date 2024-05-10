/* eslint-disable react/no-unescaped-entities */

import  {Inter} from "next/font/google";
import "./globals.css";
import styles from "./styles/page.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
  <html lang="en">
    <body className={inter.className}>
    <div>
      <div className={styles.main}>
        <Image
        src='/logothebook.png'
        alt="logo principal"
        width={350}
        height={250}
        className={styles.image_logo}
        />
      <h4>New releases </h4> 
      <h4>Classic authors</h4>
      <h4>Bestsellers</h4>
      <h4>About</h4>
      <label className= {inter.className}>
      <input
      className= {styles.input}
      type="text" 
      placeholder='Búsqueda nueva...'>

      </input>
      </label>
    </div>
      {children}
  <footer className={styles.footer}>
  <div className={styles.footerItemStartEnd}>
  <Image
        src='/logothebook.png'
        alt='logo principal'
        width={350}
        height={250}
        className={styles.image_logo}
        />
  </div>
    <div className={styles.footerItem}>
      <ul><h4>New releases </h4></ul>
      <p>Fiction</p>
      <p>Non-fiction</p>
      <p>Mystery</p>
      <p>Romance</p>
      <p>Science Fiction</p>
      <p>Fantasy</p>
    </div>
    <div className={styles.footerItem}>
    <ul><h4>Classic authors</h4></ul>
    <p>William Shakespeare</p>
    <p>Jane Austen</p>
    <p>Charles Dickens</p>
    <p>Fyodor Dostoevsky</p>
    <p>Mark Twain</p>
    <p>Emily Brontë</p>
    </div>
    <div className={styles.footerItem}>
    <ul><h4>Bestsellers</h4></ul>
    <p>"Educated" by Tara Westover</p>
    <p>"Where the Crawdads Sing" by Delia Owens   </p>
    <p>"Becoming" by Michelle Obama   </p>
    <p>"The Silent Patient" by Alex Michaelides</p>
    <p>"Circe" by Madeline Miller</p>
    <p>"The Nightingale" by Kristin Hannah</p>

    </div>
    <div className={styles.footerItemStartEnd}>
    <ul><h4>About</h4></ul>
    <p>Our Story</p>
    <p>Our Approach</p>
    <p>Our Community</p>
    <p>TheBook Central's Team</p>
    </div>
    <div className={styles.footerItemStartEnd}>
    <ul><h4>Subscribe to the best newsletter</h4></ul>
    <p>Stay updated on new releases and features.</p>
    <input
      className= {styles.inputNews}
      type="text" 
      placeholder=''>
      </input>
      <button className={styles.button} type='submit'>Subscribe</button>
    </div>

    </footer>
  </div>
  </body>
</html>
  );
}
