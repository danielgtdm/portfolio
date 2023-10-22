import {HashRouter as Router } from 'react-router-dom'
import TopNav from '../components/TopNav';
import { Box } from '@chakra-ui/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function MainLayout() {
    return(
        <Router>
            <TopNav />
            <Box
            textAlign={"center"}
            fontSize={"xl"}
            w={["90%", "85%", "80%"]}
            maxW={800}
            mx={"auto"}
            >
                <Box pt={10} pb={10}>
                    <Navigation/>
                </Box>
            </Box>
            <Footer />
        </Router>
    )
}

export default MainLayout;