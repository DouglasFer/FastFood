import React from "react";
import { ContentCard, DivNameCategory, DivNoCart, LiCard } from "./cardStyle";
export const Card = ({ currentSale, removeCart }) => {
  return (
    <LiCard id={currentSale.id}>
      <ContentCard>
        <img src={currentSale.img} alt="" />
        <DivNameCategory>
          <p>{currentSale.name}</p>
          <span>{currentSale.category}</span>
        </DivNameCategory>
      </ContentCard>
      <button onClick={() => removeCart(currentSale.id)}>Remover</button>
    </LiCard>
  );
};

export const NoCart = () => {
  return (
    <DivNoCart>
      <h2>Sua sacola está vazia</h2>
      <p>Adicione itens</p>
    </DivNoCart>
  );
};
