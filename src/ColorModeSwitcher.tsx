import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Tooltip
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);



  const handleClick = () => {
    //text === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toggleColorMode();
  };

  return (
    <Tooltip
      label={text === "dark" ? "Dark mode" : "Light mode"}
      aria-label="A tooltip"
    >
      <IconButton
        size="md"
        fontSize="md"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={handleClick}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        _hover={{
          bg: useColorModeValue("gray.200", "gray.900")
        }}
        {...props}
      />
    </Tooltip>
  );
};
