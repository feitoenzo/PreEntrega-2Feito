import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/dpnqgqls0/image/upload/v1677372756/samples/ecommerce/analog-classic.jpg"
        alt=""
        style={{ width: "10%", objectFit: "cover" }}
      />

      <ul className={styles.containerList}>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
