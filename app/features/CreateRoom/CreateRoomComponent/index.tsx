import { Button } from "~/components/Button";

import { 
  Container, 
  Content, 
  FormAreaDivider, 
  FormDivider, 
  Section,
} from "./styles";

export function CreateRoomComponent() {
  return (
    <Container>
      <Content 
        animate={{ x: [100, 0], opacity: [0, 1] }} 
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Section method="post">
          <label htmlFor="enterRoomInput">Entre em uma sala</label>
          <input type="text" id="enterRoomInput" placeholder="Código da sala"/>
          <Button text="Entrar" type="submit" />
        </Section>

        <FormAreaDivider>
          <FormDivider />
          ou
          <FormDivider />
        </FormAreaDivider>

        <Section method="post">
          <label htmlFor="createRoomInput">Crie sua própria sala</label>
          <input type="text" id="createRoomInput" placeholder="Nome da sala"/>
          <Button text="Criar Sala" type="submit" />
        </Section>
      </Content>
    </Container>
  );
}