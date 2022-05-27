import { motion } from "framer-motion";
import { Form } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  min-width: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;

  min-width: 26.67rem;

  gap: 1.5rem;
  padding: 3rem;
  
  border-radius: 0.25rem;
  background-color: var(--background-light);
`;

export const Section = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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