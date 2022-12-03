import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
   type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   padding: 8px 36px;
   border-radius: 4px;
   background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.colors.GRAY_2 : theme.colors.YELLOW};
`;

export const Text = styled.Text<Props>`
   margin-right: 10px;
   text-transform: uppercase;
   letter-spacing: 0.46px;
   font-family: ${({ theme }) => theme.fonts.MEDIUM};
   color: ${({ theme, type }) => type === 'PRIMARY' ? theme.colors.BLUE : theme.colors.BLACK};
`;

