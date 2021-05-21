import styled from "styled-components";

const Point = styled.div`
  background: ${({ color }) => (color ? color : "rgba(216, 30, 91, 1)")};
  margin-top: 40px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: pulse 2s infinite;
  margin: 40px 20px;
  @keyframes pulse {
    0% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0
        ${({ seven }) => (seven ? seven : "rgba(216, 30, 91, 0.7)")};
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 15px
        ${({ cero }) => (cero ? cero : "rgba(216, 30, 91, 0)")};
    }
    100% {
      transform: scale(0.9);
    }
  }
`;

export default Point;
