import { css } from "@emotion/react";

export const CardStyles = css`
  height: 10vh;
  width: 100%;
  border-radius: 0%;
  top: 0;
  position: sticky;
  z-index: 2;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderStyles = css`
  height: inherit;
  width: auto;

  margin-top: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0;
  }
`;

export const CardBodyStyles = css`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardFooterStyles = css`
  display: flex;
  gap: 0.5rem;
`;
