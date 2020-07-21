import React from 'react';
import { GeoJSON, FeatureGroup, Popup, Marker } from 'react-leaflet';
import "../css/GeojsonLayer.css"
import { CircleMarker } from 'leaflet';
import L from 'leaflet';
import { Tooltip } from 'react-leaflet';
import axios from "axios";


export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      position: [89, 23]
    };
  }

  myStyle = () => {
    return {
      color: "white",
      weight: 1,
      opacity: 1,
      fillColor: "green",
      dashArray: '8 5',
      fillOpacity: 1
    }
  }

  // pointToLayer(feature, latlng) {
  //   return L.circleMarker(latlng, null); // Change marker to circle
  //   // return L.marker(latlng, { icon: {}}); // Change the icon to a custom icon
  // }

  render() {
    return (
      <FeatureGroup>
        {this.state.data.map(f => {
          return <GeoJSON key={f.properties.gid} data={f} style={this.myStyle} onClick={this.drillInside(f.properties.divid)}>
            <Tooltip direction="center" permanent>
              <span className="toolTipInside">
                {f.properties.divisionen ? f.properties.divisionen : f.properties.zillanamee ? f.properties.zillanamee : null}
              </span>
            </Tooltip>
            <Popup>{f.properties.divisionen}</Popup>
          </GeoJSON>
        })}
      </FeatureGroup>
    );
  }

  componentDidMount() {
    this.drillInside = (divId) => () => {
      this.drillData(divId);
    };
    if (this.props.url) {
      this.fetchData(this.props.url);
    }
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  fetchData(url) {
    let request = fetch(url);

    request
      .then(r => r.json())
      .then(data => {
        this.setState({
          data: data.features
        });
      }, (error) => {
        console.error(error);
      });
  }


  async drillData(divId) {


    let drillUrl = `http://mchdrhis.icddrb.org:8085/rhis-charts/api.maps.php?action=getZilla&divid=${divId}&zillaid=&upazilaid=&unionid=`;

    try {
      const response = await axios.get(drillUrl, {
        params: {
          ID: 12345
        }
      });
      this.setState({
        data: response.data.features
      });
      this.props.centerCoOrd({ lat: 23, lng: 90, zoom: 9 });

    } catch (error) {
      console.error(error);
    }


  }

}
