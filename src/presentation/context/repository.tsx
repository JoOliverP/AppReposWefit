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
  language: string;
  stars: number;
  favorite: boolean;
};

export type RepositoryContextData = {
  repositories: Repository[];
  repositoryOwner: string;
  setRepositoryOwner: React.Dispatch<React.SetStateAction<string>>;
  favorites: Repository[];
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

  const toggleUserSelectionModal = () => setShowModal((value) => !value);

  const addFavoriteRepository = async (repository: Repository) => {
    setFavorites((prevState) => [...prevState, repository]);

    try {
      await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));

      const favoritesRepositories = await AsyncStorage.getItem("@favorites");
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavoriteRepository = async (repository: Repository) => {
    // TODO
  };

  const getUserRepositories = async (user: string) => {
    try {
      const response = await api.get(`/${repositoryOwner}/repos`);

      setRepositories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserRepositories(repositoryOwner);
  }, [repositoryOwner]);

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        repositoryOwner,
        setRepositoryOwner,
        favorites,
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
