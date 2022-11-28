import styled from "styled-components";

export const ContainerCartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  @media (max-width: 655px) {
    align-items: center;
  }
`;

export const ContainerCart = styled.div`
  width: 334px;
  height: auto;
  background-color: var(--gray500);
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;

  ul {
    border-bottom: 2px solid var(--gray);
  }
`;

export const HeaderCart = styled.div`
  height: 65px;
  width: 100%;
  background-color: var(--color-primary);
  border-radius: 5px 5px 0 0;
  color: var(--gray500);
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
