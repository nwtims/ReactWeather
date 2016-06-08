var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <h3 className="page-title">About Component</h3>
  )
};
//
// var About = (props) =>  {
//   return (
// <div>
//   <ul className="vertical menu data-drilldown" style={{width: '200px'}} id="m1">
// <li>
//   <a href="#">Item 1</a>
//   <ul className="vertical menu" id="m2">
//     <li>
//       <a href="#">Item 1A</a>
//       <ul className="vertical menu" id="m3">
//         <li><a href="#">Item 1Aa</a></li>
//         <li><a href="#">Item 1Ba</a></li>
//         <li><a href="#">Item 1Ca</a></li>
//         <li><a href="#">Item 1Da</a></li>
//         <li><a href="#">Item 1Ea</a></li>
//       </ul>
//     </li>
//     <li><a href="#">Item 1B</a></li>
//     <li><a href="#">Item 1C</a></li>
//     <li><a href="#">Item 1D</a></li>
//     <li><a href="#">Item 1E</a></li>
//   </ul>
// </li>
// <li>
//   <a href="#">Item 2</a>
//   <ul className="vertical menu">
//     <li><a href="#">Item 2A</a></li>
//     <li><a href="#">Item 2B</a></li>
//     <li><a href="#">Item 2C</a></li>
//     <li><a href="#">Item 2D</a></li>
//     <li><a href="#">Item 2E</a></li>
//   </ul>
// </li>
// <li>
//   <a href="#">Item 3</a>
//   <ul className="vertical menu">
//     <li><a href="#">Item 3A</a></li>
//     <li><a href="#">Item 3B</a></li>
//     <li><a href="#">Item 3C</a></li>
//     <li><a href="#">Item 3D</a></li>
//     <li><a href="#">Item 3E</a></li>
//   </ul>
// </li>
// <li><a href='#'> Item 4</a></li>
// </ul>
// </div>
//   )
// };

module.exports = About;
