import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'


function Navi() {
    return (
        <div>
            <Menu size='large' inverted>
              
               <Menu.Item
                        name='👨‍💼
                        HRMS'

                    />
                <Container>

                   
                    <Menu.Item
                        name='About Us'

                    />

                    <Menu.Item

                    name='Kariyer Yolculuğu'
                    />
                     <Menu.Item

name='Bize Katıl'
/>

                    <Menu.Menu position='right'>
                        <Dropdown item text='İş veren'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Giriş yap</Dropdown.Item>
                                <Dropdown.Item>Kayıt ol</Dropdown.Item>
                                <Dropdown.Item>Ücretsiz dene</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/AddJobPosting">İlan Yayınla</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>

                </Container>

            </Menu>
        </div>
    )
}

export default Navi
