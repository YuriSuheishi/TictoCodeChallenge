import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css``}
`;

export const Form = styled.form`
  ${() => css``}
`;

export const Row = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
  `}
`;

export const FormBody = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    input {
      border-radius: 5px;
      border: 2px solid #a2a2a2;
      height: 35px;
    }
  `}
`;