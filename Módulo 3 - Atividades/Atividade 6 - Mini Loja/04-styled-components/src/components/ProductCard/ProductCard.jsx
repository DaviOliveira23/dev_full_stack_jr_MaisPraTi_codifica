import styled from "styled-components";
import Button from "../Button/Button";

const Card = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadowLow};
  overflow: hidden;
  transition: 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadowMid};
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  background: ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 300px;
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.primary};
  color: white;
`;

const Title = styled.h3`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 0;
`;

const Price = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const Rating = styled.p`
  font-size: 0.875rem;
  color: #fbbf24; /* amarelo */
`;

function ProductCard({ product }) {
  return (
    <Card>
      <ImageWrapper>
        <Img src={product.image} alt={product.title} loading="lazy" />
      </ImageWrapper>

      <Content>
        {product.tag && <Tag>{product.tag}</Tag>}

        <Title title={product.title}>{product.title}</Title>

        <Row>
          <Price>R$ {product.price}</Price>
          <Rating>{"★".repeat(product.rating)}</Rating>
        </Row>

        <Button variant="solid">Adicionar</Button>
      </Content>
    </Card>
  );
}

export default ProductCard;
