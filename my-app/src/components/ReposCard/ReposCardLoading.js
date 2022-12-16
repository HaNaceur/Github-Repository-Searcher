import React from 'react';
import PropTypes from 'prop-types';
import { Card, Placeholder } from 'semantic-ui-react';

function ReposCardLoading() {
  return (
    <Card>
      <Placeholder>
        <Placeholder.Image square />
      </Placeholder>
      <Card.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="large" />
            <Placeholder.Line length="short" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="large" />
            <Placeholder.Line length="medium" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Card.Content>
    </Card>
  );
}
ReposCardLoading.propTypes = {};

ReposCardLoading.defaultProps = {};

export default React.memo(ReposCardLoading);
