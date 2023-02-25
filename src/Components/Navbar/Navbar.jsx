import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <h2>logo!</h2>
      <ul className="containerList">
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <h3> style={{ backgroundColor: "green", padding: "15px" }}</h3>
    </div>
  );
};
export default Navbar;
