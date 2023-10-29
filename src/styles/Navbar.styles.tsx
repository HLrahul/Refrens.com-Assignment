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

  @media (max-width: 768px) {
    padding: 0;

    & > * {
      padding: 10px;
    }
  }
`;

export const CardHeaderStyles = css`
  height: inherit;
  width: auto;

  margin-top: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  white-space: nowrap;

  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-top: 0;

    width: 57%;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const CardBodyStyles = css`
  display: flex;

  @media (max-width: 768px) {
    display: none;
    width: 0;
  }
`;

export const CardFooterStyles = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 0.5rem;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const InputStyle = css``

export const InputLeftElementStyles = css`
  height: 100%;
  width: auto;

  top: 1px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HamburgerIconStyles = css`
  @media (max-width: 768px) {
    display: flex;
  }
`