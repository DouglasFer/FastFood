import styled from "styled-components";

export const MarketTotal = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  gap: 15px;
  background-color: var(--gray500);
  align-items: center;

  button {
    width: 95%;
    border: 2px solid var(--light-gray);
    border-radius: 8px;
    background-color: var(--light-gray);
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: #828282;
    margin-bottom: 15px;
  }
`;

export const FooterCart = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 190px;

  p {
    color: #333333;
    font-weight: 600;
    font-size: 14px;
  }
  span {
    color: #828282;
    font-weight: 600;
    font-size: 14px;
  }
`;
