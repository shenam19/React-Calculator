import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 4px 4px 10px #333;
  border-radius: 10px;
`;
export const Screen = styled.div`
  grid-column: 1/-1;
  background-color: #1a1110;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;
export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px outset white;
  outline: none;
  backgroud-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  /*Expanded form example */
  /*   ${function ({ gridSpan }) {
    return `grid-column:span ${gridSpan};`;
  }} */
  ${({ gridSpan }) => gridSpan && `grid-column:span ${gridSpan};`}
  ${({ operation }) =>
    operation &&
    `background-color:#FFBA00;color:white;&:hover{background-color:white;color:#FFBA00}`}
  ${({ control }) =>
    control &&
    `background-color:#C0C0C0;;&:hover{
    background-color:#F5F5F5;
  }`}
  ${({ equals }) =>
    equals && `background-color:gray;border-bottom-right-radius:10px;`}
    ${({ period }) =>
    period && `background-color:gray;border-bottom-left-radius:10px;`}
`;
