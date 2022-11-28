import { ContainerFood, ContetLi, LiFood, UlFodd } from "./productStyle.js";

export const ProductList = ({ products, addCart }) => {
  return (
    <ContainerFood>
      <UlFodd>
        {products.map((product) => (
          <LiFood key={product.id}>
            <img src={product.img} alt="" />
            <ContetLi>
              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <span>
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button onClick={() => addCart(product)}>Adicionar</button>
            </ContetLi>
          </LiFood>
        ))}
      </UlFodd>
    </ContainerFood>
  );
};
export const ProductsFiltereds = ({
  filterCard,
  filteredProducts,
  addCart,
}) => {
  return (
    <ContainerFood>
      <h1>
        Resultados para:{" "}
        <p>
          {filteredProducts[0].toUpperCase() + filteredProducts.substring(1)}
        </p>
      </h1>
      <UlFodd>
        {filterCard.map((filteredCard) => (
          <LiFood key={filteredCard.id}>
            <img src={filteredCard.img} alt="" />
            <ContetLi>
              <h4>{filteredCard.name}</h4>
              <p>{filteredCard.category}</p>
              <span>
                {filteredCard.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button onClick={() => addCart(filteredCard)}>Adicionar</button>
            </ContetLi>
          </LiFood>
        ))}
      </UlFodd>
    </ContainerFood>
  );
};
