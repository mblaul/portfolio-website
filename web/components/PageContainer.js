import styled from "styled-components";
import Intro from "./Intro";

const PageContainerStyles = styled.div`
  padding: var(--spacing-lg);
  position: relative;
  z-index: 1;
`;

const PageContainer = (props) => {
  const { children } = props;

  return (
    <>
      <Intro />
      <PageContainerStyles>{children}</PageContainerStyles>
    </>
  );
};

export default PageContainer;
