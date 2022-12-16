import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <Segment>
      <Header as="h1">Page non trouvé...</Header>
      <Link to="/">Revenir à l'accueil</Link>
    </Segment>
  );
}
Page404.propTypes = {};

Page404.defaultProps = {};

export default React.memo(Page404);
