import  {Inter} from "next/font/google";
import "./globals.css";
import styles from "./styles/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
  <html lang="en">
    <body className={inter.className}>
    <div>
      <div className={styles.main}>
      <h2>TheBook Central</h2>
      <h4>New releases </h4> 
      <h4>Classic authors</h4>
      <h4>Bestsellers</h4>
      <h4>About</h4>
      <label className= {inter.className}>
      <input
      className= {styles.input}
      type="text" 
      placeholder="Búsqueda nueva...">

      </input>
      </label>
    </div>
      {children}
  <footer><p>Footer</p></footer>
  </div>
  </body>
</html>
  );
}
