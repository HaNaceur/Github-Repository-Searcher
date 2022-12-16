import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import ReposCard from '../ReposCard/ReposCard';

import './styles.scss';

function ReposResults({ reposList }) {
  return (
    <Card.Group itemsPerRow={3} stackable>
      {reposList.map((repos) => (
        <ReposCard
          key={repos.id}
          {...repos}
        />
      ))}
    </Card.Group>
  );
}
ReposResults.propTypes = {
  reposList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

ReposResults.defaultProps = {};

export default React.memo(ReposResults);
