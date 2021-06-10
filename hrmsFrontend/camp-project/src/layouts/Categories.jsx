import React from 'react'
import { Dropdown, Input, Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu vertical className="categories">
        <Menu.Item>
          <Input placeholder='Sektör ara...' />
        </Menu.Item>

        <Menu.Item className="search">
         <b>Popüler sektörler</b>
          <Menu.Menu>
            <Menu.Item
              name='Popüler sektörler'
             
            >
              Yazılım
            </Menu.Item>
            <Menu.Item
              name='Yazılım'
              
            >
              Programlama
            </Menu.Item>
            <Menu.Item
              name='Programlama'
              
            >
              Yapay zeka
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        
       

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>


        </div>
    )
}
