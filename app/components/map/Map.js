/**
 * Map Component for requests
 * Map url: http://maps.google.com/maps/api/js?key=AIzaSyCCqGJ6KwxoQeT-fM3plyfHbkEht3-hBOQ&libraries=geometry,drawing,places
 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import { styles } from './map.scss';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			map: {},
			mapUrl: this.props.mapUrl
		};
	}

	componentDidMount() {
		var mapTag = this.loadMap();
		this.mapCallback(mapTag);
	}

	loadMap() {
		var scriptTag = document.createElement('script');
		scriptTag.setAttribute("type","text/javascript");
		scriptTag.setAttribute("src", this.state.mapUrl);
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag);

		return scriptTag;
	}

	mapCallback(scriptTag) {
		scriptTag.onload = () => {
			this.setMap(this.refs.googleMap);
		};

		scriptTag.onerror = (error) => {
			throw new Error('Error loading Google Maps', error);
		}
	}

	mapPreviouslyLoaded() {
		var i, scriptTags = document.getElementsByTagName('script');
		for(i = 0; i < scriptTags.length; i += 1) {
			if(scriptTags[i].src === this.state.mapUrl) {
				return scriptTags[i];
			}
		}
		return false;
	}

	setMap(div) {
		var map = new google.maps.Map(div, {
			center: {lat: 37.7749, lng: -122.4194},
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		this.setInput(map);
		this.setState({
			map: map
		});
	}

	setInput(map) {
		// Create the search box and link it to the UI element.
		var input = this.refs.pacInput;
		console.log(input);
		var searchBox = new google.maps.places.SearchBox(input);
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

		// Bias the SearchBox results towards current map's viewport.
		map.addListener('bounds_changed', function() {
			searchBox.setBounds(map.getBounds());
		});

		var markers = [];
		// Listen for the event fired when the user selects a prediction and retrieve
		// more details for that place.
		searchBox.addListener('places_changed', function() {
			var places = searchBox.getPlaces();

			if (places.length == 0) {
				return;
			}

			// Clear out the old markers.
			markers.forEach(function (marker) {
				marker.setMap(null);
			});
			markers = [];

			// For each place, get the icon, name and location.
			var bounds = new google.maps.LatLngBounds();
			places.forEach(function (place) {
				var icon = {
					url: place.icon,
					size: new google.maps.Size(71, 71),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(17, 34),
					scaledSize: new google.maps.Size(25, 25)
				};

				// Create a marker for each place.
				markers.push(new google.maps.Marker({
					map: map,
					icon: icon,
					title: place.name,
					position: place.geometry.location
				}));

				if (place.geometry.viewport) {
					// Only geocodes have viewport.
					bounds.union(place.geometry.viewport);
				} else {
					bounds.extend(place.geometry.location);
				}
			});
			map.fitBounds(bounds);
		});
	}

	render() {
		return (
			<div>
				<input id="pac-input" className="controls" type="text" placeholder="Search Box" ref="pacInput"/>
				<div className="apa-map" ref="googleMap"></div>
			</div>
		)
	}
}

Map.PropTypes = {
	mapUrl: PropTypes.string.isRequired
};

export default Map;
