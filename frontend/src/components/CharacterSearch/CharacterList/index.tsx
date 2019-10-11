import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';

import './style.css';
import { CharState } from '../../../store/character/types';
import { setCharList, setCharOffset } from '../../../store/character/actions';
import { AppState } from '../../../store';

import CharacterItem from './CharacterItem';

interface CharacterListProps {
  setCharList: typeof setCharList
  setCharOffset: typeof setCharOffset
  character: CharState
}

class CharacterList extends React.Component<CharacterListProps> {
  getCurrentPage = () => {
    if (this.props.character.total !== 0) {
      return (this.props.character.offset / this.props.character.limit) + 1;
    }
    return 0;
  }

  pageChange = (page: number) => {
    let offset: number = (page - 1) * this.props.character.limit;
    this.props.setCharOffset(offset);
  }

  render() {
    return (
      <List
        bordered={true}
        loading={this.props.character.loader}
        itemLayout="vertical"
        size="large"
        pagination={{
          current: this.getCurrentPage(),
          pageSize: this.props.character.limit,
          total: this.props.character.total,
          showTotal: total => `Total ${total} items`,
          onChange: this.pageChange
        }}
        dataSource={this.props.character.list}
        className="Character-list"
        renderItem={character => (
          <CharacterItem
            key={character.id}
            title={character.name}
            description={character.description}
          />
       )}
      />
    )
  }  
}

const mapStateToProps = (state: AppState) => ({
  character: state.character
});

export default connect(
  mapStateToProps,
  {
    setCharList,
    setCharOffset
  }
)(CharacterList);