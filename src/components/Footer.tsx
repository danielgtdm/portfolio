import { Box, Flex, HStack, IconButton, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const iconProps = {
    variant: "ghost",
    size: "lg",
    isRound: true,
    isExternal: true,
    colorScheme: "gray"
  };

function Footer(){
return(
    <HStack
    as={"footer"}
    spacing={[1, 2]}
    p={4}
    justifyContent={"space-between"}
    alignItems={"center"}
    w={["100%", "85%", "80%"]}
    maxW={800}
    mx={"auto"}
    >
        <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems={"center"}
        w={"100%"}
        >
            {}
            <Text
            textAlign={"center"}
            fontSize={"sm"}
            color={useColorModeValue("gray.500", "gray.200")}
            >
                @Rammlied {new Date().getFullYear()} {" "}
            </Text>
            <Box textAlign={"center"}>
                <IconButton
                as={Link}
                href="https://github.com/danielgtdm/"
                aria-label="Github"
                icon={<FaGithub/>}
                {...iconProps}
                />
                
                <IconButton
                as={Link}
                href="https://www.instagram.com/dont_you_die_boy/"
                aria-label="Instagram"
                icon={<FaInstagram/>}
                {...iconProps}
                />

                <IconButton
                as={Link}
                href="https://www.linkedin.com/in/daniel-guti%C3%A9rrez-05a180297/"
                aria-label="Linkedin"
                icon={<FaLinkedin/>}
                {...iconProps}
                />
            </Box>
        </Flex>

    </HStack>
)
}

export default Footer;