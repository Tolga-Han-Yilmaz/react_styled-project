import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#fff"};
  border: 1px solid #a62440;
  border-radius: 0.37rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1rem;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    opacity: 0.91;
  }
`;

export default Button;
