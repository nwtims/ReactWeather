var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//     var {temp, location} = this.props;
//
//     return(
//       <div>
//         <h1>The temperature in {location} is {temp} degrees!</h1>
//       </div>
//     )
//   }
// });

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;

  return(
    <div>
      <h3 className="text-center">The temperature in {location} is {temp} degrees!</h3>
    </div>
  );
};

module.exports = WeatherMessage;
