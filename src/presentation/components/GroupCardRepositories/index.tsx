import React, { useContext } from "react";
import {
  Text,
  RepositoryContainer,
  HeaderTitleRepository,
  IconWefit,
  TextInfoRepository,
  Line,
  RepositoryItensContainer,
  ButtonFavorite,
  TextFavoriteButton,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";

import { Repository, RepositoryContext } from "../../context/repository";
import ItemIconText from "../ItemIconText";
import { useNavigation } from "@react-navigation/native";

import IconImageWefit from "../../assets/images/iconWefit.png";

type Props = {
  data: Repository;
  displayButtonFavorite: boolean;
};

const GroupCardRepositories = ({ data, displayButtonFavorite }: Props) => {
  const navigation = useNavigation() as any;

  const { addFavoriteRepository } = useContext(RepositoryContext);

  const handleSaveFavoriteRepository = (data: Repository) => {
    addFavoriteRepository(data);
  };

  const handleNavigateDetails = (data: Repository) => {
    navigation.navigate("Details", data);
  };

  return (
    <RepositoryContainer onPress={() => handleNavigateDetails(data)}>
      <HeaderTitleRepository>
        <Text>{data.name}</Text>
        <IconWefit source={IconImageWefit} />
      </HeaderTitleRepository>
      <Line />
      <TextInfoRepository>{data.description}</TextInfoRepository>

      <RepositoryItensContainer>
        {displayButtonFavorite ? (
          <ButtonFavorite>
            <FontAwesome name="star" size={20} color="#FFD02C" />
            <TextFavoriteButton
              onPress={() => handleSaveFavoriteRepository(data)}
            >
              Favoritar
            </TextFavoriteButton>
          </ButtonFavorite>
        ) : (
          <></>
        )}

        <ItemIconText
          title={data.stars ? data.stars : "0"}
          size={20}
          icon="star"
          color="#FFD02C"
        />
        <ItemIconText
          title={data.language ? data.language : "Sem linguagem"}
          size={8}
          icon="circle"
          color="#F22828"
        />
      </RepositoryItensContainer>
    </RepositoryContainer>
  );
};

export default GroupCardRepositories;
