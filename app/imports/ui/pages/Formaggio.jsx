import React from 'react';
import TopMenu from '../components/TopMenu';
import Middle from '../components/MiddleMenu';
import Bottom from '../components/Bottomz';

export default class Formaggio extends React.Component {

  render() {
    return (
        <div className="blackbgr">
          <TopMenu/>
          <Middle/>
          <Bottom/>
        </div>
    );
  }
}
