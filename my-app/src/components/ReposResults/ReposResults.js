import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import ReposCard from '../ReposCard/ReposCard';
import ReposCardLoading from '../ReposCard/ReposCardLoading';

import './styles.scss';

function ReposResults({ reposList, isLoading }) {
  return (
    <Card.Group itemsPerRow={3} stackable>
      {isLoading ? (
        <>
          <ReposCardLoading />
          <ReposCardLoading />
          <ReposCardLoading />
          <ReposCardLoading />
          <ReposCardLoading />
        </>
      ) : (
        reposList.map((repos) => (
          <ReposCard
            key={repos.id}
            {...repos}
          />
        ))
      )}
    </Card.Group>
  );
}
ReposResults.propTypes = {
  reposList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  isLoading: PropTypes.bool,
};

ReposResults.defaultProps = {
  reposList: [],
  isLoading: false,
};

export default React.memo(ReposResults);
