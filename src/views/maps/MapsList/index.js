import React from 'react';
import Page from 'src/components/Page';
import ListMaps from './ListMaps';


export default class MapsView extends React.Component {
  state = {
    map: []
  };

  async componentDidMount() {
    const url = "http://localhost/platform-code/map-api/maps_list/";
    const response = await fetch(url,{ headers: { "dev-token":localStorage.accessToken}});
    const data = await response.json();
    this.setState({map:data.map_list});
  }

  render() {

    return (
      <Page title="Arway-Studio">
        <ListMaps map={this.state.map}/>
    </Page>
    );
  }
}