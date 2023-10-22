import { Avatar, Box, Button, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue, useDisclosure, Link, Stack } from "@chakra-ui/react";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import UserIcon from "../assets/images/user_icon.jpg"
import { NavLink as RouterNavLink } from "react-router-dom";
import { BsBook } from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const webLinks = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" }
  ];

  const mobileLinks = [
    { name: "About", path: "/about"},
    { name: "Blog", path: "/blog"},
  ]

  interface NavLinkProps {
    index?: string;
    name: string;
    path: string;
    onClose: () => void;
  }

  function NavLink(props: NavLinkProps){
    return (
      <Link
        as={RouterNavLink}
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.900")
        }}
        _activeLink={{
          color: useColorModeValue("blue.500", "blue.200")
        }}
        onClick={() => props.onClose()}
        to={props.path}
      >
        {props.name}
      </Link>
    );
  };

function TopNav(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    const menuProps = {
        bg: useColorModeValue("gray.200", "gray.900"),
        color: useColorModeValue("blue.500", "blue.200")
    };

    return (
        <>
            <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
                <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                w={["90%", "85%", "80%"]}
                maxW={800}
                mx={"auto"}
                >
                    <IconButton
                    size={"md"}
                    icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    aria-label="Open Menu"
                    display={["inherit", "inherit", "none"]}
                    onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>
                            <Avatar
                            as={Link}
                            size={"sm"}
                            href={"/portfolio"}
                            src={UserIcon}
                            />
                        </Box>
                        <HStack
                        as={"nav"}
                        spacing={4}
                        display={{base: "none", md: "flex"}}
                        >
                            {webLinks.map((link, index) =>(
                                <NavLink
                                key={index}
                                name={link.name}
                                path={link.path}
                                onClose={onClose}
                                />
                            ))}
                            <Menu isLazy>
                                <MenuButton
                                as={Button}
                                variant="ghost"
                                size="sm"
                                px={2}
                                py={1.5}
                                fontSize={"1em"}
                                rounded={"md"}
                                height={"auto"}
                                _hover={menuProps}
                                _expanded={menuProps}
                                _focus={{boxShadow: "outline"}}
                                rightIcon={<BiChevronDown size={18} />}
                                >
                                    Links
                                </MenuButton>
                                <MenuList zIndex={5}>
                                    <Link as={RouterNavLink} to={"/tech-stack"}>
                                        <MenuItem>
                                        <HStack>
                                            <Icon
                                            as={AiTwotoneThunderbolt}
                                            size={18}
                                            color={useColorModeValue("blue.500", "blue.200")}
                                             />
                                             <Text>Tech Stack</Text>
                                        </HStack>
                                        </MenuItem>
                                    </Link>
                                    <Link as={RouterNavLink} to={"/open-source"}>
                                        <MenuItem>
                                            <HStack>
                                                <Icon 
                                                as={BsBook}
                                                size={18}
                                                color={useColorModeValue("blue.500", "blue.200")}
                                                />
                                                <Text>Open Source</Text>
                                            </HStack>
                                        </MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <IconButton
                        as={Link}
                        href="https://github.com/danielgtdm"
                        size={"md"}
                        icon={<FaGithub />}
                        aria-label="GitHub Account"
                        bg={useColorModeValue("white", "gray,700")}
                        _hover={{
                            textDecoration: "none",
                            bg: useColorModeValue("gray.200", "gray.900")
                        }}
                         />
                         <ColorModeSwitcher justifySelf="flex-end" />                    
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box
                    pb={4}
                    w={["100%", "100%", "80%"]}
                    maxW={800}
                    display={["inherit", "inherit", "none"]}
                    >
                        <Stack as={"nav"} spacing={4}>
                            {mobileLinks.map((link, index) => (
                                <NavLink 
                                key={index}
                                name={link.name}
                                path={link.path}
                                onClose={onClose}
                                />
                            ))}
                        </Stack>
                    </Box>
                ) : null }
            </Box>
        </>
    )
}

export default TopNav;