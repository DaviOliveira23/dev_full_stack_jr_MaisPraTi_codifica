import styled, { css } from "styled-components";

const base = css`
  inline-flex: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.875rem;
  font-weight: 500;
  transition: 0.2s;
  border: 1px solid transparent;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const variants = {
  solid: css`
    background: ${({ theme }) => theme.primary};
    color: white;
    &:hover {
      opacity: 0.9;
    }
  `,
  outline: css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: white;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.text};
    &:hover {
      background: ${({ theme }) => theme.border};
    }
  `,
};

const StyledButton = styled.button`
  ${base}
  ${({ variant }) => variants[variant] || variants.solid}
`;

function Button({ children, variant = "solid", ...props }) {
  return <StyledButton variant={variant} {...props}>{children}</StyledButton>;
}

export default Button;
