import { css, styled } from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  width: 20vw;
  position: absolute;
  text-align:center;
  padding: 5px;
  background: white;
  border-radius: 5px;
`;

interface IStyledInputProps {
  $isError: boolean;
}

export const SCAppInput = styled.input<IStyledInputProps>`
  outline: 0;
  font-family: inherit;
  padding: 12px 20px;
  background-color: white;
  border-radius: 10px;
  border: 3px solid green;
  width: 275px;
  margin-top:70px;

  ${(props) =>
    props.$isError &&
    css`
      border-color: red;
    `}

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: black;
  }

`;