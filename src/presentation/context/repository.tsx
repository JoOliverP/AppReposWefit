import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { api } from "../../infrastructure/http/GitHubApi";
import UserSelectionModal from "../components/UserSelectionModal";

type Children = { children: JSX.Element };

export type Repository = {
  id: number;
  name: string;
  owner: { name: string; avatar: string };
  description: string;
  url: string;
  html_url: string;
  language: string;
  stars: number;
  favorite: boolean;
};

export type RepositoryContextData = {
  repositories: Repository[];
  repositoryOwner: string;
  setRepositoryOwner: React.Dispatch<React.SetStateAction<string>>;
  favorites: Repository[];
  favoritesIds: Number[];
  setFavoritesIds: React.Dispatch<React.SetStateAction<Number[]>>;
  getUserRepositories: (user: string) => Promise<void>;
  toggleUserSelectionModal: () => void;
  addFavoriteRepository: (repository: Repository) => void;
  removeFavoriteRepository: (repository: Repository) => void;
};

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit");
  const [favoritesIds, setFavoritesIds] = useState<Number[]>([]);

  const toggleUserSelectionModal = () => setShowModal((value) => !value);

  const addFavoriteRepository = async (repository: Repository) => {
    try {
      setFavorites([...favorites, repository]);

      setFavoritesIds([...favoritesIds, repository.id]);

      await AsyncStorage.setItem(
        "@favoritesIds",
        JSON.stringify([...favoritesIds, repository.id])
      );

      await AsyncStorage.setItem(
        "@favorites",
        JSON.stringify([...favorites, repository])
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavoriteRepository = async (repository: Repository) => {
    try {
      const ids = favoritesIds.filter(
        (favoriteId) => favoriteId !== repository.id
      );

      setFavoritesIds(ids);

      await AsyncStorage.setItem("@favoritesIds", JSON.stringify(ids));

      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== repository.id
      );

      setFavorites(newFavorites);

      await AsyncStorage.setItem("@favorites", JSON.stringify(newFavorites));
    } catch (error) {}
  };

  const getUserRepositories = async (user: string) => {
    try {
      let ids = await AsyncStorage.getItem("@favoritesIds");
      const arrayDataId = JSON.parse(ids ? ids : "[]");

      setFavoritesIds(arrayDataId);

      let favorites = await AsyncStorage.getItem("@favorites");
      const arrayDataFavorites = JSON.parse(favorites ? favorites : "[]");
      setFavorites(arrayDataFavorites);

      const response = await api.get(`/${repositoryOwner}/repos`);
      setRepositories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserRepositories(repositoryOwner);
    // AsyncStorage.clear();
  }, [repositoryOwner]);

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        repositoryOwner,
        setRepositoryOwner,
        favorites,
        favoritesIds,
        setFavoritesIds,
        getUserRepositories,
        toggleUserSelectionModal,
        addFavoriteRepository,
        removeFavoriteRepository,
      }}
    >
      {children}
      <UserSelectionModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </RepositoryContext.Provider>
  );
};
