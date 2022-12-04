import React, { useContext } from "react";
import { FlatList } from "react-native";
import { RepositoryContext } from "../../../context/repository";
import GroupCardRepositories from "../../../components/GroupCardRepositories";
import { Container } from "./styles";

const Home = () => {
  const { repositories, favoritesIds } = useContext(RepositoryContext);

  return (
    <Container>
      <FlatList
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          if (favoritesIds.includes(item.id)) {
            return <></>;
          } else {
            return <GroupCardRepositories displayButtonFavorite data={item} />;
          }
        }}
      />
    </Container>
  );
};

export default Home;
