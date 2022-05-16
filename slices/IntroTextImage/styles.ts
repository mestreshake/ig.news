import styled, { css } from "styled-components";

export const Slice = styled.section`
  margin-top: 2rem;
  line-height: 2rem;
  font-size: 1.125rem;
  color: var(--gray-100);

  p,
  ul {
    margin: 1.5rem 0;
  }

  ul {
    padding-left: 1.5rem;
    li {
      margin: 0.5rem 0;
    }
  }

  ${(props) => {
    switch (props.preview) {
      case true:
        return css`
          //logic to style secret text

          /* background: linear-gradient(var(--gray-100), transparent);
          background-clip: text;
          -webkit-text-fill-color: transparent; */
        `;
      default:
        return;
    }
  }}
`;
