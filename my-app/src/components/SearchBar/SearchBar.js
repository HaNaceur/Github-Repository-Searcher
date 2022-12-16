import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Segment } from 'semantic-ui-react';

import './styles.scss';

function SearchBar() {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <Input
            placeholder="Recherche..."
            icon="search"
            iconPosition="left"
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}
SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default React.memo(SearchBar);
