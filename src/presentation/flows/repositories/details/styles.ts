import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.GRAY_1};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const ContentRepository = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;
export const TitleRepository = styled.Text`
  font-size: 20px;
  font-family:${({ theme }) => theme.fonts.BOLD};
`;
export const DescriptionRepository = styled.Text`
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.GRAY_4};
  font-size: 16px;
  font-family:${({ theme }) => theme.fonts.REGULAR};
`;

export const ButtonGroup = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;