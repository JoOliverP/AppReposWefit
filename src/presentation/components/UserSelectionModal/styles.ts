import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";


export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: 24,
  },
})`
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};

  font-size: 16px;
  letter-spacing: 0.15px;

  color: ${({ theme }) => theme.colors.BLACK};
`;

export const ContainerInputText = styled.View`
  margin-top: 10px;
  padding: 9px 12px;
  background-color: ${({ theme }) => theme.colors.GRAY_3};
  color: ${({ theme }) => theme.colors.BLACK};
`
export const Placeholder = styled.Text`
  font-size: 12px;
`
export const TextInputOwner = styled.TextInput`
  font-size: 16px;
`

export const ButtonsGroup = styled.View`
  flex-direction: row;
`