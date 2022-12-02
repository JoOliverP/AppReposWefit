import React, { useContext } from "react";
import {
  Container,
  Text,
  TextBold,
  RepositoryContainer,
  HeaderTitleRepository,
  IconWefit,
  TextInfoRepository,
  Line,
  RepositoryItensContainer,
  ButtonFavorite,
  TextFavoriteButton,
  RepositoryStarCount,
  TextRepositoryItens,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import IconImageWefit from "../../../../presentation/assets/images/wefitIcon.png";
import ItemIconText from "../../../components/ItemIconText";
import { RepositoryContext } from "../../../context/repository";
import { FlatList } from "react-native";

const Home = () => {
  const { repositories } = useContext(RepositoryContext);

  return (
    <Container>
      <FlatList
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <>
            <RepositoryContainer>
              <HeaderTitleRepository>
                <Text>
                  {/* appswefit<TextBold>/create-react-app</TextBold> */}
                  {item.name}
                </Text>
                <IconWefit source={IconImageWefit} />
              </HeaderTitleRepository>
              <Line />

              <TextInfoRepository>{item.description}</TextInfoRepository>

              <RepositoryItensContainer>
                <ButtonFavorite>
                  <FontAwesome name="star" size={20} color="#FFD02C" />
                  <TextFavoriteButton>Favoritar</TextFavoriteButton>
                </ButtonFavorite>

                <ItemIconText
                  title={item.stars ? item.stars : "0"}
                  size={20}
                  icon="star"
                  color="#FFD02C"
                />
                <ItemIconText
                  title={item.language}
                  size={8}
                  icon="circle"
                  color="#F22828"
                />
              </RepositoryItensContainer>
            </RepositoryContainer>
          </>
        )}
      />
    </Container>
  );
};

export default Home;
