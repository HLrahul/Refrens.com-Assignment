import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const size = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <div>
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        size={size}
      />
    </div>
  );
}
