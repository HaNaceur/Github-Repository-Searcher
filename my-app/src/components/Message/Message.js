import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

function Message(props) {
  return (
    <Segment>
      La recherche a donné 42 résultats
    </Segment>
  );
}

Message.propTypes = {};

export default React.memo(Message);
