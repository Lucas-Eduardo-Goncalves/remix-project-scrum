import { motion } from "framer-motion";
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

  > div {
    display: flex;
    align-items: center;

    gap: 1rem;
    margin-bottom: 2rem;

    > img {
      height: 4rem;
    } 
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;

  min-width: 26.67rem;
  
  border-radius: 0.25rem;
  background-color: var(--background-light);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    padding: 3rem;

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
  }
`;