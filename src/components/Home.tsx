import { Avatar, Flex } from "@chakra-ui/react";
import { MotionBox } from "./motion";
import UserIcon from "../assets/images/user_icon.jpg";

function Home(){
    return (
        <Flex direction={"column"} align={"center"}>
            <Flex direction={["column", "column", "row"]}>
                <MotionBox
                opacity="0"
                initial={{
                    translateX: -150,
                    opacity: 0,
                }}
                animate={{
                    translateX: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5
                    }
                }}
                m="auto"
                mb={[16, 16, "auto"]}
                >
                    <Avatar
                    size={"2x1"}
                    src={UserIcon}
                    />
                </MotionBox>
            </Flex>

        </Flex>
    )
}

export default Home;