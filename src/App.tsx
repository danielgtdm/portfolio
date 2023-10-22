import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import MainLayout from './layouts/main.layout'

function App() {
  

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <MainLayout />
    </ChakraProvider>
  )
}

export default App
