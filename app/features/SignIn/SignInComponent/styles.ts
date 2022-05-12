import { Form as RemixForm } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled.main`
  gap: 3rem;
  min-height: 100vh;
  min-width: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 950px) {
    flex-direction: column;
  }
`;

export const Apresentation = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

export const Form = styled(RemixForm)`
  display: flex;
  flex-direction: column;

  min-width: 26.67rem;

  gap: 1rem;
  padding: 3rem;
  
  border-radius: 0.25rem;
  background-color: var(--background-light);

  > input {
    outline: none;
    padding: 1rem;

    font-size: 1rem;

    border: none;
    border-radius: 0.25rem;
    
    transition: filter 0.2s;
    background-color: var(--background);

    &:focus, &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const FormAreaDivider = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const FormDivider = styled.div`
  flex: 1;
  height: 1px;

  background-color: var(--background-extra-light);
`;

export const SignInWithGoogleButton = styled.button`
  padding: 1rem;
  gap: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-weight: 600;

  transition: background-color 0.2s;

  color: var(--shape);
  background-color: var(--background-extra-light);

  &:hover {
    background-color: var(--primary);
  }
`;