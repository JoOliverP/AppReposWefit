import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
   type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
   flex: 1;
   align-items: center;
   justify-content: center;
   padding: 8px 36px;
   margin-top: 10px;
   background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.colors.BLUE : theme.colors.GRAY_1};
   border-radius: 4px;
`;


export const Title = styled.Text<Props>`
   font-size: 15px;
   color: ${({ theme, type }) => type === 'SECONDARY' ? theme.colors.BLUE : theme.colors.GRAY_1};
   font-family: ${({ theme }) => theme.fonts.MEDIUM};
   letter-spacing: 0.46px;
   text-transform: uppercase;
`