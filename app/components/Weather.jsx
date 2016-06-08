var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  // getDefaultProps: function () {
  //   return {
  //     location: 'tualatin'
  //   };
  // },

  handleSearch: function  (location) {
    var that = this;

    this.setState({isLoading: true})
// debugger;
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
  }, function (errorMessage) {
      that.setState({isLoading: false});
     alert(errorMessage);
  });
},

  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  render: function () {
    // var location = this.state.location;
    // var temp = this.state.temp;
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
