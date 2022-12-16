import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import './styles.scss';

function ReposResults() {
  return (
    <Card.Group itemsPerRow={3} stackable>
      <Card>
        <Image src="https://avatars.githubusercontent.com/u/69631?v=4" wrapped ui={false} />
        <Card.Content>
          <Card.Header>react</Card.Header>
          <Card.Meta>
            facebook
          </Card.Meta>
          <Card.Description>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src="https://avatars.githubusercontent.com/u/69631?v=4" wrapped ui={false} />
        <Card.Content>
          <Card.Header>react</Card.Header>
          <Card.Meta>
            facebook
          </Card.Meta>
          <Card.Description>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src="https://avatars.githubusercontent.com/u/69631?v=4" wrapped ui={false} />
        <Card.Content>
          <Card.Header>react</Card.Header>
          <Card.Meta>
            facebook
          </Card.Meta>
          <Card.Description>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src="https://avatars.githubusercontent.com/u/69631?v=4" wrapped ui={false} />
        <Card.Content>
          <Card.Header>react</Card.Header>
          <Card.Meta>
            facebook
          </Card.Meta>
          <Card.Description>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src="https://avatars.githubusercontent.com/u/69631?v=4" wrapped ui={false} />
        <Card.Content>
          <Card.Header>react</Card.Header>
          <Card.Meta>
            facebook
          </Card.Meta>
          <Card.Description>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src="https://avatars.githubusercontent.com/u/69631?v=4" wrapped ui={false} />
        <Card.Content>
          <Card.Header>react</Card.Header>
          <Card.Meta>
            facebook
          </Card.Meta>
          <Card.Description>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src="https://avatars.githubusercontent.com/u/69631?v=4" wrapped ui={false} />
        <Card.Content>
          <Card.Header>react</Card.Header>
          <Card.Meta>
            facebook
          </Card.Meta>
          <Card.Description>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
ReposResults.propTypes = {};

ReposResults.defaultProps = {};

export default React.memo(ReposResults);
