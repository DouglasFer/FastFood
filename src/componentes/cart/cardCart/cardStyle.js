import styled from "styled-components";

export const LiCard = styled.li`
  width: 334px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  -webkit-animation: scale-in-hor-center 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
  animation: scale-in-hor-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s
    both;

  @-webkit-keyframes scale-in-hor-center {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-hor-center {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;
export const ContentCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
  }
`;

export const DivNameCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    font-size: 14px;
    font-weight: 700;
    color: #333333;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--gray);
  }
`;

export const DivNoCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 158px;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 18px;
    columns: #333333;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    color: var(--gray);
  }
`;
