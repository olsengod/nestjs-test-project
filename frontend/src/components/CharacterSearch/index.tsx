import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input, Icon } from 'antd';

import './style.css';
import { setCharName } from '../../store/character/actions';
import { AppState } from '../../store';

import CharacterList from './CharacterList';

interface CharacterSearchProps {
  setCharName: typeof setCharName
}

class CharacterSearch extends React.Component<CharacterSearchProps> {
  nameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.setCharName(e.currentTarget.value);
  }

	render() {
		return (
      <div className="CharacterSearch">
        <Input
          placeholder="Type character name"
          onChange={this.nameChange}
          style={{ width: 300 }}
          suffix={<Icon type="search" />}
        />
        <Row type="flex" align="top" justify="center">
          <Col style={{ maxWidth: '1000px'}}>
            <CharacterList />
          </Col>
        </Row>
      </div>
	  );
	}	  
}

const mapStateToProps = (state: AppState) => ({
  character: state.character
});

export default connect(
  mapStateToProps,
  {
    setCharName
  }
)(CharacterSearch);