import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React from 'react';
import { connect } from 'react-redux';

import baseComponent from '../../lib/baseComponent';

class Home extends Component {
  render() {
    const title = 'MakingDevelopers';

    return (
      <div>
        <Helmet title={title} />

        <h1>I'm Home!</h1>
      </div>
    );
  }
}

Home = baseComponent(Home);

export default connect(state => ({}), null)(Home);