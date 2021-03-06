import React from 'react';
import { connect } from 'react-redux';
import { notification} from 'antd';

import './style.css';
import { NotifState } from '../../store/notification/types';
import { AppState } from '../../store';

import CharacterSearch from '../CharacterSearch';

interface AppProps {
  notification: NotifState
}

class App extends React.Component<AppProps> {
  componentDidUpdate (prevProps: any) {
    if (this.props.notification.exists && !prevProps.notification.exists) {
      notification[this.props.notification.level]({
        message: this.props.notification.title,
        description: this.getNotifDescription(),
        duration: 3
      })
    }
  }

  getNotifDescription = () => {
    if (this.props.notification.description.length) {
      return (
        <ul>
          {this.props.notification.description.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    }
  }

	render() {
		return (
	    <div className="App">
	      <header className="App-header">
	        <p>Marvel characters</p>
	      </header>
        <div className="App-content">
          <CharacterSearch />
        </div>
	    </div>
	  );
	}	  
}

const mapStateToProps = (state: AppState) => ({
  notification: state.notification
});

export default connect(
  mapStateToProps
)(App);