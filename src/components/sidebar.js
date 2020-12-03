import React from "react";
import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);

class sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Sidebar sidebarClassName='re-sidebar'
        sidebar={
            <div>
                {/* <b><a href='/resources#Manual-Testing'>Manual</a></b>
                <b><a href='/'>Automatioon</a></b> */}
            </div>  
        }

        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { width: '15%', marginTop:'4em'} }}
      >
        {/* <b>Main content</b> */}
      </Sidebar>
    );
  }
}

export default sidebar;