import { h, Component } from 'preact';
import animateView from 'react-animated-views';
import { connect } from 'preact-redux';

import {
  IconButton,
  List,
  ListContainer,
  ListHeader,
  ListItem,
  NavigationBar,
  NavigationBarItem,
  NavigationBarTitle,
} from 'topcoat-preact';

import MainHeader from 'components/MainHeader';
import SettingsPane from 'components/SettingsPane';

class SettingsPage extends Component {
  someFunctionToShutESLintUp() {
    this.setState();
  }

  handleIconButtonClick(buttonName) { // eslint-disable-line class-methods-use-this
    console.log(`${buttonName} icon button clicked`);
    const { pop } = this.props;
    pop();
  }

  render() {
    const { style } = this.props;

    const leftButton = (
      <span />
    );
    const rightButton = (
      <IconButton
        aria-label="Help"
        quiet
        title="Help"
        clickHandler={ () => this.handleIconButtonClick('close') }
      >
        <span
          style={ {
            width: '100%',
            height: '100%',
            display: 'block',
            background: 'url(assets/img/S_Close_24_N.svg) center center no-repeat',
          } }
        />
      </IconButton>
    );

    return (
      <div className="page" style={ style }>
        <MainHeader
          leftButton={ leftButton }
          rightButton={ rightButton }
          title="Settings"
        />
        <SettingsPane />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default animateView(connect(mapStateToProps)(SettingsPage));