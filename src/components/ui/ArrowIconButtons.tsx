import { IconButton } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

import { ScrollUpIconButtonStyles } from "../../styles/CharactersPage.styles";

interface ArrowButtonProps {
  onClick: () => void;
  ariaLabel?: string;
  css?: unknown;
}

export function ArrowDownButton({
  onClick,
  ariaLabel = "scrollDownIconButton",
}: ArrowButtonProps) {
  return (
    <IconButton size="sm" aria-label={ariaLabel} onClick={onClick}>
      <ArrowDownIcon />
    </IconButton>
  );
}

export function ArrowUpButton({
  onClick,
  ariaLabel = "scrollUpIconButton",
}: ArrowButtonProps) {
  return (
    <IconButton
      size="sm"
      aria-label={ariaLabel}
      onClick={onClick}
      css={ScrollUpIconButtonStyles}
    >
      <ArrowUpIcon />
    </IconButton>
  );
}
