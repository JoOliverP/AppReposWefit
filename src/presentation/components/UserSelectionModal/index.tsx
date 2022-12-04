import React, { useContext, useEffect, useState } from "react";
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
  const [textNameRepository, setTextNameRepository] = useState("");

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  const handleSaveNameOwneRepository = () => {
    setRepositoryOwner(textNameRepository);
    close();
  };

  return (
    <Container ref={ref} onClose={onClose}>
      <Text>Alterar usuário selecionado</Text>

      <ContainerInputText>
        <Placeholder>Nome do usuário</Placeholder>

        <TextInputOwner
          defaultValue={repositoryOwner}
          onChangeText={(text) => setTextNameRepository(text)}
        />
      </ContainerInputText>
      <ButtonsGroup>
        <Button title="cancelar" onPress={() => close()} />
        <Button
          title="salvar"
          type="PRIMARY"
          onPress={handleSaveNameOwneRepository}
        />
      </ButtonsGroup>
    </Container>
  );
};

export default UserSelectionModal;
