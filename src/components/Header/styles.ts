import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Container = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Handlers = styled.View`
  flex-direction: row;
`;
