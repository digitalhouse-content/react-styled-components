import React from "react"
import { Container } from "../styles/Container.styled"
import { Image, Logo, Nav, StyledHeader } from "../styles/Header.styled"
import { Button } from "../styles/Button.styled"
import { Flex } from "../styles/Flex.styled"

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt="logo" />
                    <Button>Probar gratis</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Cree una comunidad extraordinaria</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatem aliquam blanditiis ut quisquam
                            quaerat assumenda iusto laudantium libero ducimus
                            voluptate ipsa voluptatibus, sequi officia at dolore
                            unde ea provident tempore?
                        </p>
                        <Button bg="#ff0099" color="#fff">
                            Empezá gratis
                        </Button>
                    </div>
                    <Image src="./images/illustration-mockups.svg" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header
