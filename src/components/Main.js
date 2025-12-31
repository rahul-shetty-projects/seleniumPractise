var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <div>
            // this is where you can add header
            {this.props.children}
            // this is where you can add footer
        </div>
    }
});
