import React, { useContext, useEffect } from "react";

import { useModalize } from "react-native-modalize";
import { RepositoryContext } from "../../context/repository";
import Button from "../Button";
import {
  Container,
  ContainerInputText,
  Placeholder,
  Text,
  TextInputOwner,
  ButtonsGroup,
} from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const UserSelectionModal = ({ visible, onClose }: Props) => {
  const { ref, open, close } = useModalize();
  const { repositoryOwner, setRepositoryOwner } = useContext(RepositoryContext);

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  return (
    <Container ref={ref} onClose={onClose}>
      <Text>Alterar usuário selecionado</Text>

      <ContainerInputText>
        <Placeholder>Nome do usuário</Placeholder>

        <TextInputOwner
          placeholder={repositoryOwner}
          onChangeText={(text) => setRepositoryOwner(text)}
        />
      </ContainerInputText>
      <ButtonsGroup>
        <Button title="cancelar" onPress={() => close()} />
        <Button title="salvar" type="PRIMARY" />
      </ButtonsGroup>
    </Container>
  );
};

export default UserSelectionModal;
