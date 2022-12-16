import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DOMpurify from 'dompurify';

import './styles.scss';

function Repos({
  id,
  title,
  category,
  excerpt,
}) {
  return (
    <article className="repo">
        <p
          htmlFor={id}
          dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(excerpt) }}
        />
    </article>
  );
}

Repos.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default React.memo(Repos);
