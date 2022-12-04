import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ButtonTypeStyleProps, Container, Text } from "./styles";

type Props = TouchableOpacityProps & {
  title: string | number;
  color?: string;
  icon: keyof typeof Ionicons.glyphMap;
  type?: ButtonTypeStyleProps;
};

const ButtonIcon = ({
  title,
  color,
  icon,
  type = "PRIMARY",
  ...rest
}: Props) => {
  return (
    <Container type={type} {...rest}>
      <Text type={type}>{title}</Text>
      <Ionicons name={icon} size={24} color={color} />
    </Container>
  );
};

export default ButtonIcon;
