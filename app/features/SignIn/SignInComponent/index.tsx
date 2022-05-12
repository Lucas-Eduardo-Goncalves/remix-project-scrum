import { GoogleLogo } from "phosphor-react";
import { Button } from "~/components/Button";
import { 
  Container, 
  Apresentation, 
  Form, 
  FormAreaDivider, 
  FormDivider, 
  SignInWithGoogleButton 
} from "./styles";

export function SignInComponent() {
  return (
    <Container>
      <Apresentation>
        <p>Seja bem vindo ao Projeto Scrum!</p>
        <p>Faça o login para acessa a plataforma...</p>
      </Apresentation>

      <Form>
        <input 
          type="text"
          name="email"
          placeholder="E-mail"
        />

        <input 
          type="password" 
          name="password"
          placeholder="Senha"
        />

        <Button type="submit" text="Entrar" />

        <FormAreaDivider>
          <FormDivider />
          ou entre com
          <FormDivider />
        </FormAreaDivider>

        <SignInWithGoogleButton type="button">
          <GoogleLogo size={32} />
          Google
        </SignInWithGoogleButton>
      </Form>
    </Container>
  );
}
