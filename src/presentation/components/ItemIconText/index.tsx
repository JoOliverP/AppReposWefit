import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Container, RepositoryStarCount, TextRepositoryItens } from "./styles";

type Props = {
  title: string | number;
  color: string;
  size: number;
  icon: keyof typeof FontAwesome.glyphMap;
  onPress?: () => void;
};

const ItemIconText = ({ title, color, size, icon, onPress }: Props) => {
  return (
    <RepositoryStarCount>
      <FontAwesome name={icon} size={size} color={color} />
      <TextRepositoryItens>{title}</TextRepositoryItens>
    </RepositoryStarCount>
  );
};

export default ItemIconText;
