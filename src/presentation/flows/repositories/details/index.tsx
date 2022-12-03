import { useRoute } from "@react-navigation/native";
import React from "react";
import { Linking } from "react-native";
import Button from "../../../components/Button";
import ButtonIcon from "../../../components/ButtonIcon";
import ItemIconText from "../../../components/ItemIconText";
import {
  Container,
  ContentRepository,
  TitleRepository,
  DescriptionRepository,
  ButtonGroup,
} from "./styles";

type RepositoryParams = {
  name: string;
  description: string;
  language: string;
  html_url: string;
};

const Details = () => {
  const route = useRoute();
  const repository = route.params as RepositoryParams;

  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <Container>
      <ContentRepository>
        <TitleRepository>{repository.name}</TitleRepository>

        <DescriptionRepository>{repository.description}</DescriptionRepository>

        <ItemIconText
          icon="circle"
          size={12}
          title={repository.language}
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
        <ButtonIcon
          title="favoritar"
          color="#000000"
          icon="star"
          type="SECONDARY"
        />
      </ButtonGroup>
    </Container>
  );
};

export default Details;
