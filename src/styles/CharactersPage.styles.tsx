import { css } from "@emotion/react";

export const GridStyles = css`
  height: auto;
  width: auto;

  padding: 16px 24px;
  margin-top: 1rem;
`;

export const ConatinerStyles = css`
    height: 47.5vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
        height: 32vh;
    }
`

export const HeadingStyles = css`
    text-align: center;

    font-size: 2rem;  
    
    @media (min-width: 768px) {
        font-size: 3rem;
    }
`

export const TextStyles = css`
    font-size: 0.8rem;
    font-weight: lighter;

    @media (min-width: 768px) {
        font-size: 1.1rem;
    }
`

export const ScrollUpIconButtonStyles = css`
    position: fixed;
    bottom: 1rem;
    right: 1rem;

    z-index: 2;

    @media (min-width: 768px) {
        bottom: 2rem;
        right: 2rem;
    }
`