import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Linking } from "react-native";

import ButtonIcon from "../../../components/ButtonIcon";
import ItemIconText from "../../../components/ItemIconText";
import { Repository, RepositoryContext } from "../../../context/repository";
import {
  Container,
  ContentRepository,
  TitleRepository,
  DescriptionRepository,
  ButtonGroup,
} from "./styles";

const Details = () => {
  const { favoritesIds, addFavoriteRepository, removeFavoriteRepository } =
    useContext(RepositoryContext);
  const route = useRoute();
  const repository = route.params as Repository;

  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  const handleAddFavorite = (repository: Repository) => {
    addFavoriteRepository(repository);
  };

  const handleDisfavor = (repository: Repository) => {
    removeFavoriteRepository(repository);
  };

  return (
    <Container>
      <ContentRepository>
        <TitleRepository>{repository.name}</TitleRepository>

        <DescriptionRepository>{repository.description}</DescriptionRepository>

        <ItemIconText
          icon="circle"
          size={12}
          title={repository.language ? repository.language : "Sem linguagem"}
          color="#F22828"
        />
      </ContentRepository>

      <ButtonGroup>
        <ButtonIcon
          title="ver repositório"
          color="#1976D2"
          icon="link"
          onPress={() => handleOpenLink(repository.html_url)}
        />
        {favoritesIds.includes(repository.id) ? (
          <ButtonIcon
            title="desfavoritar"
            icon="star-outline"
            type="TERTIARY"
            onPress={() => handleDisfavor(repository)}
          />
        ) : (
          <ButtonIcon
            title="favoritar"
            color="#000000"
            icon="star"
            type="SECONDARY"
            onPress={() => handleAddFavorite(repository)}
          />
        )}
      </ButtonGroup>
    </Container>
  );
};

export default Details;
