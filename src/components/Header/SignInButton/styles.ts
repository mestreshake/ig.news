import styled from "styled-components";
import { FiX } from "react-icons/fi";

export const Button = styled.button`
  height: 3rem;
  border-radius: 3rem;
  background: var(--gray-850);
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);
  font-weight: bold;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  transition: filter 0.2;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CloseIcon = styled(FiX)`
  margin-left: 1rem;
`;
