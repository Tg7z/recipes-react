'use strict';
import { version } from '../package.json';
// import { Spring } from 'react-motion';
require('sass/main.sass');

const versionInfo = (__DEV__ ? `v${version}` : "");

// App
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }
  render() {
    const activeRouteName = this.props.location.pathname || '/';
    let start = (!this.state.loaded ? 1 : 0);

    return (
      <div className='app'>
        <div style={{display: 'block', height: '100%'}}>
          {this.props.children}
        </div>
      </div>
    );

    // return (
    //   <div className='app'>

    //     <Spring defaultValue={{val:start}} endValue={{val:1}}>
    //       {interpolated =>
    //         <div style={{display: 'block', height: '100%', opacity: interpolated.val}}>
    //           {this.props.children}
    //         </div>
    //       }
    //     </Spring>
    //   </div>
    // );
  }
};

export default App;
