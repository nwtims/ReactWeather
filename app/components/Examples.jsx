var React = require('react');
var {Link} = require('react-router');


// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples to get started.</p>
      <ol>
        <li>
          <Link to='/?location=Tualatin'>Tualatin, OR</Link>
        </li>
        <li>
          <Link to='/?location=Boise'>Boise, ID</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
