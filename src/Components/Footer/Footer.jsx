import React from "react"
import { Container } from "../styles/Container.styled"
import { Flex } from "../styles/Flex.styled"
import SocialIcons from "../SocialIcons/SocialIcons"
import { StyledFooter } from "../styles/StyledFooter.styled"

const Footer = () => {
    return <StyledFooter>
        <Container>
            <img width="200px" src="./images/logo.svg" alt="logo" />
            <Flex>
                <ul>
                    <li>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </li>
                    <li>+54-11-5434-2331</li>
                    <li>consultas@product.com</li>
                </ul>
                <ul>
                    <li>Acerca de</li>
                    <li>¿Qué hacemos?</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Metas</li>
                    <li>Blog</li>
                    <li>Contáctenos</li>
                </ul>

                <SocialIcons />
            </Flex>
        </Container>
    </StyledFooter>

}

export default Footer
