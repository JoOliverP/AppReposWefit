import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const RepositoryContainer = styled.View`
   margin: 16px;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.GRAY_2};
   border-radius: 6px;
   padding: 16px;
`;

export const HeaderTitleRepository = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Line = styled.View`
  margin-top: 16px;
  opacity: 0.9;
  border: 1px solid ${({ theme }) => theme.colors.GRAY_3};
`

export const IconWefit = styled.Image`
  width: 30px;
  height: 30px;
`
export const TextInfoRepository = styled.Text`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 12px;
  line-height: 15px;
 
  color: ${({ theme }) => theme.colors.GRAY_4};
`;


export const RepositoryItensContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`
export const ButtonFavorite = styled(TouchableOpacity)`
  flex-direction: row;
  
  padding: 8px 10px;
  background-color: #FAF3DC;
  border-radius: 4px;
`


export const TextFavoriteButton = styled.Text`
  margin-left: 10;
  font-weight: bold;
  font-size: 12px;
  color: #FFD02C;
`

export const RepositoryStarCount = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;

`

export const TextRepositoryItens = styled.Text`
  margin-left: 6px;
  font-size: 12px;
  color: #9A9A9A;
`