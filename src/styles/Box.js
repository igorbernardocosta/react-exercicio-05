import styled from "styled-components";

export const Box = styled.div`
  background: #ddd;
  color: ${(props) => props.color || "red"};
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "120px"};
  padding: 100px;
`;
