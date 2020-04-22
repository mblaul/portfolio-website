import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => <Title>My page</Title>;
