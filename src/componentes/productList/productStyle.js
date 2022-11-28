import styled from "styled-components";

export const ContainerFood = styled.div`
  overflow-x: auto;

  h1 {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 26px;
    color: #333333;
  }
  h1 p {
    font-weight: 700;
    font-size: 26px;
    color: #828282;
  }
`;
export const UlFodd = styled.ul`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  -webkit-animation: tilt-in-left-1 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tilt-in-left-1 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @-webkit-keyframes tilt-in-left-1 {
    0% {
      -webkit-transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
      transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
  @keyframes tilt-in-left-1 {
    0% {
      -webkit-transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
      transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  @media (max-width: 655px) {
    width: max-content;
    display: flex;
    flex-wrap: unset;
    overflow-x: auto;
    gap: 10px;
  }
`;
export const LiFood = styled.li`
  width: 300px;
  height: 346px;
  background-color: #ffffff;
  border: 2px solid var(--light-gray);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  img {
    width: 100%;
    height: 150px;
    background-color: var(--gray500);
    object-fit: contain;
  }
  :hover {
    box-shadow: 1px 2px 19px -1px rgba(0, 0, 0, 0.42);
  }
`;

export const ContetLi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
  align-items: flex-start;

  h4 {
    font-weight: 700;
    font-size: 18ox;
    color: #333333;
  }
  p {
    color: #828282;
    font-weight: 400;
    font-size: 12px;
  }
  span {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 16px;
  }
  button {
    background-color: var(--color-primary);
    color: var(--gray500);
    border: 2px solid #27ae60;
    border-radius: 8px;
    width: 106px;
    height: 40px;
  }
`;
