import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="socialmedia">
          <Container>
            <Menu.Item position="right"><Icon size="large" inverted name="facebook f" /></Menu.Item>
            <Menu.Item><Icon size="large" inverted name="twitter"/></Menu.Item>
            <Menu.Item><Icon size="large" inverted name="instagram"/></Menu.Item>
            <Menu.Item><Icon size="large" inverted name="tripadvisor"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
