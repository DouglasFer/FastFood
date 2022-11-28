import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 80px;
  background-color: var(--gray500);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 655px) {
    height: 150px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  width: 1300px;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 655px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;

export const Search = styled.div`
  display: flex;
  width: 334px;
  height: 60px;
  border: 2px solid #e0e0e0;
  align-items: center;
  border-radius: 8px;
  background-color: #ffff;
  gap: 10px;
  input {
    border: none;
    padding-left: 10px;
    width: 200px;
    height: 100%;
    border-radius: 8px;
  }
  button {
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    width: 107px;
    height: 40px;
    color: var(--gray500);
  }
`;
