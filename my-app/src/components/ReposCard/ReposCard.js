/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import './styles.scss';

function ReposCard({
  name,
  description,
  owner,
  html_url,
}) {
  return (
    <Card
      className="repos"
      href={html_url}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={owner.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {owner.login}
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
ReposCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

ReposCard.defaultProps = {
  description: '',
};

export default React.memo(ReposCard);
