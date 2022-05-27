import { Form } from "@remix-run/react";

import logo from "~/assets/logo.svg";
import { Button } from "~/components/Button";

import { 
  Container, 
  Apresentation, 
  Content, 
} from "./styles";

export function SignInComponent() {
  return (
    <Container>
      <Apresentation>
        <div>
          <img src={logo} alt="Logo" />
          <h1>Poker Scrum</h1>
        </div>
      </Apresentation>

      <Content 
        animate={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Form method="post">
          <h3>Crie sua conta</h3>

          <input 
            type="text"
            name="name"
            placeholder="Nome"
          />

          <input 
            type="password" 
            name="password"
            placeholder="Senha"
          />

          <Button type="submit" text="Entrar" />
        </Form>
      </Content>
    </Container>
  );
}
