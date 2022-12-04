import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Container, TextRepositoryItens } from "./styles";

type Props = {
  title: string | number;
  color: string;
  size: number;
  icon: keyof typeof FontAwesome.glyphMap;
};

const ItemIconText = ({ title, color, size, icon }: Props) => {
  return (
    <Container>
      <FontAwesome name={icon} size={size} color={color} />
      <TextRepositoryItens>{title}</TextRepositoryItens>
    </Container>
  );
};

export default ItemIconText;
