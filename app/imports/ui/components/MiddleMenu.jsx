import React from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>
              <Image src="http://courses.ics.hawaii.edu/ics314s19/morea/ui-frameworks/formaggio-logo.png"/>
            </Menu.Item>
            <Menu.Item>
              <p>HOME</p>
            </Menu.Item>
            <Menu.Item>
              <p>MENU</p>
            </Menu.Item>
            <Menu.Item>
              <p>GALLERY</p>
            </Menu.Item>
            <Menu.Item>
              <p>EVENTS</p>
            </Menu.Item>
            <Menu.Item>
              <p>RESERVATIONS</p>
            </Menu.Item>
            <Menu.Item>
              <p>ABOUT US</p>
            </Menu.Item>
            <Menu.Item>
              <p>CONTACT</p>
            </Menu.Item>
          </Container>
        </Menu>
    );
  }
}
