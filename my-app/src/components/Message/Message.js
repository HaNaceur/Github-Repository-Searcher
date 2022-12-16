import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

function Message({ total }) {
  if (total === undefined) {
    return (
      <Segment>
        Lancer une recherche pour explorer les repos github existant
      </Segment>
    );
  }

  if (total === 0) {
    return (
      <Segment>
        La recherche n'a donné aucun résultat
      </Segment>
    );
  }

  return (
    <Segment>
      La recherche a donné {total} {total > 1 ? 'résultats' : 'résultat'}
    </Segment>
  );
}

Message.propTypes = {
  total: PropTypes.number,
};
Message.defaultProps = {
  total: undefined,
};

export default React.memo(Message);
