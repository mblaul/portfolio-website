import styled from "styled-components";

const PageContainerStyles = styled.div`
  padding: var(--space-md);
`;

const PageContainer = (props) => {
  const { children } = props;

  return <PageContainerStyles>{children}</PageContainerStyles>;
};

export default PageContainer;
