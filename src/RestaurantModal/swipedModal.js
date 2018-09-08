import React from 'react'
import { Modal } from 'semantic-ui-react'

/*
* This modal is used when a right
* swipe is detected on the food card
*/

const SwipedModal = (props) => (
  <Modal
    header='Restaurant Name:'
    content={props.name}
    actions={[{ key: 'done', content: 'Done', positive: true, onClick: props.closeModal }]}
    size='mini'
    open={props.open}
  />
)

export default SwipedModal;
