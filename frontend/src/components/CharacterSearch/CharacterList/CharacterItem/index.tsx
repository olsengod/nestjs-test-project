import React from 'react';
import { List } from 'antd';

interface CharacterItemProps {
	key: number | string
	title: string
	description: string
}

const CharacterItem = (props: CharacterItemProps) => (
	<List.Item
    key={props.key}
  >
    <List.Item.Meta
      title={props.title}
      description={props.description}
    />
  </List.Item>
)

export default CharacterItem;