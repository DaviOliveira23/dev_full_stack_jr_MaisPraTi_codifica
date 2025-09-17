import styled from "styled-components";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.bg};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadowLow};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primary};
`;

const ThemeButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.border};
  }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  min-height: 1.5rem;
  padding: 0.25rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
`;

function Navbar({ theme, toggleTheme, cartCount }) {
  return (
    <Nav>
      <Container>
        <Logo>Mini Loja</Logo>

        <ThemeButton onClick={toggleTheme}>
          {theme === "light" ? "🌞" : "🌙"}
        </ThemeButton>

        <Cart>
          🛒 <Badge>{cartCount}</Badge>
        </Cart>
      </Container>
    </Nav>
  );
}

export default Navbar;