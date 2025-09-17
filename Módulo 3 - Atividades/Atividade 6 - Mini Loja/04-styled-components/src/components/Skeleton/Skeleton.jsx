import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const SkeletonWrapper = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  padding: 0.75rem;
`;

const SkeletonImg = styled.div`
  aspect-ratio: 1 / 1;
  background: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  margin-bottom: 0.5rem;
`;

const SkeletonLine = styled.div`
  height: 0.75rem;
  background: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  margin-bottom: 0.5rem;
  animation: ${pulse} 1.5s infinite;
  width: ${({ short }) => (short ? "60%" : "100%")};
`;

function Skeleton() {
  return (
    <SkeletonWrapper>
      <SkeletonImg />
      <SkeletonLine />
      <SkeletonLine short />
    </SkeletonWrapper>
  );
}

export default Skeleton;