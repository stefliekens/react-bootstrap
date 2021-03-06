import React from 'react';
import classNames from 'classnames';
import BootstrapMixin from './BootstrapMixin';
import CustomPropTypes from './utils/CustomPropTypes';

const ButtonGroup = React.createClass({
  mixins: [BootstrapMixin],

  propTypes: {
    vertical:  React.PropTypes.bool,
    justified: React.PropTypes.bool,
    block: CustomPropTypes.all([
      React.PropTypes.bool,
      function(props, propName, componentName) {
        if (props.block && !props.vertical) {
          return new Error('The block property requires the vertical property to be set to have any effect');
        }
      }
    ])
  },

  getDefaultProps() {
    return {
      bsClass: 'button-group'
    };
  },

  render() {
    let classes = this.getBsClassSet();
    classes['btn-group'] = !this.props.vertical;
    classes['btn-group-vertical'] = this.props.vertical;
    classes['btn-group-justified'] = this.props.justified;
    classes['btn-block'] = this.props.block;

    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classes)}>
        {this.props.children}
      </div>
    );
  }
});

export default ButtonGroup;
