import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton, useMediaQuery } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const size = isSmallScreen ? "sm" : "md";

  return (
      <IconButton
        role="button"
        name="Toggle theme"
        aria-label="Toggle theme"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        size={size}
      />
  );
}
