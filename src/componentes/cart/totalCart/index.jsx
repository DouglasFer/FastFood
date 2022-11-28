import { MarketTotal, FooterCart } from "./totalCartStyle";

export const TotalCartFooter = ({ cartTotal, removeCart, currentSale }) => {
  return (
    <MarketTotal>
      <FooterCart>
        <p>Total</p>
        <span>
          {" "}
          {cartTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </FooterCart>
      <button onClick={() => removeCart((currentSale.length = 0))}>
        Remover Todos
      </button>
    </MarketTotal>
  );
};
