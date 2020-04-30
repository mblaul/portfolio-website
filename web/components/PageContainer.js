import styled from "styled-components";

const PageContainerStyles = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  z-index: 1;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(90deg, var(--colors-purple), var(--colors-blue));

  .container {
    --container-padding: calc(var(--spacing-xl) * 2.5);
    padding: var(--container-padding);
    height: calc(100vh - calc(var(--container-padding) * 2));

    @media only screen and (max-width: 992px) {
      padding: var(--spacing-sm);
      height: calc(100vh - calc(var(--spacing-sm)) * 2);
    }
  }

  @media only screen and (max-width: 992px) {
    height: 100%;
    max-height: 100%;
  }
`;

const PageContainer = (props) => {
  const { children } = props;
  return (
    <PageContainerStyles>
      <div className="container">{children}</div>
    </PageContainerStyles>
  );
};

export default PageContainer;
