import styled from "styled-components";
import PageContainer from "../components/PageContainer";

const Title = styled.h2`
  max-width: max-content;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--spacing-md);
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.offWhite};
`;

const Home = () => (
  <PageContainer>
    <Title>Hello</Title>
    <p>My name is Matt and I love to build great web experiences.</p>
  </PageContainer>
);

export default Home;
