import React from 'react';

import PropTypes from 'prop-types'; 
import {Wrapper} from 'components';
import { Container, List} from './Navigation.css';
import {Button} from 'components';


const Navigation =  ({items}) => {
  return(
    <Container>
      <Wrapper>
        <List>
          {items.map(item => (
            <li key={item.to}>
              <Button variant={'inline'} to={item.to}>{item.content}</Button>
            </li>
          ))}
        </List>
      </Wrapper>
    </Container>
  )
}

Navigation.propTypes = {
  items: PropTypes.array.isRequired
}
export default Navigation