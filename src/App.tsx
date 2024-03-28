import { Container, ContainerProfile } from "./style"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme"
import ComponentUser from "./Components/UserComponents/UserComponents"


export default function App(){
  
  return(
    <ThemeProvider theme={theme}>
        <Container>       
                <ContainerProfile>
                  <ComponentUser id_user="aaaaa">
                  </ComponentUser>
                </ContainerProfile>
            </Container>
    </ThemeProvider>
  )
}