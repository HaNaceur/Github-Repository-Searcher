import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Segment } from 'semantic-ui-react';

import './styles.scss';

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = () => {
    // pas besoin de preventDefault avec le Form de semanticUi, car il gère déjà le preventdefault

    if (!searchValue.trim()) {
      // si il n'y a pas de valeur de recherche on return
      return;
    }
    // on appel la fonction search de App (passé par les props)
    // et on lui passe la valeur de la recherche
    onSearch(searchValue.trim());
  };
  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            placeholder="Recherche..."
            icon="search"
            iconPosition="left"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {};

export default React.memo(SearchBar);
