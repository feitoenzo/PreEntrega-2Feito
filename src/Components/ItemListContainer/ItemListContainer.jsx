import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className="tituloPrincipal" style={{ textAlign: "center" }}>
        {greeting}
      </h1>
    </div>
  );
};

export default ItemListContainer;
