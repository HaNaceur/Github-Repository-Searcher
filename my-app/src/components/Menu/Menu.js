import React from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuS } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <MenuS>
      <MenuS.Item
        as={NavLink}
        to="/"
        exact
      >
        Recherche
      </MenuS.Item>
      <MenuS.Item
        as={NavLink}
        to="/faq"
        exact
      >
        FAQ
      </MenuS.Item>
    </MenuS>
  );
}
Menu.propTypes = {};

Menu.defaultProps = {};

export default React.memo(Menu);
