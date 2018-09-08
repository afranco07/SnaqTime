import React from 'react'
import { Modal } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react';

/*
* This modal is activated when the green
* checkmark is clicked
*/

const RestaurantModal = (props) => (
  <Modal
    trigger={<Icon link size='huge' color='green' name='checkmark' />}
    header='Restaurant Name:'
    content={props.name}
    actions={[{ key: 'done', content: 'Done', positive: true, onClick: props.changeImg }]}
    size='mini'
  />
)

export default RestaurantModal;
