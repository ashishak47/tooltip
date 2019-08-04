import React from 'react';
import './Tooltip.css';
import PropTypes from 'prop-types';

class Tooltip extends React.Component {
  constructor(props) {
    super(props)
    this.tRef = React.createRef()
    this.state = {
      isTooltipDisplay: false
    }
    this.hideTooltip = this.hideTooltip.bind(this)
    this.showTooltip = this.showTooltip.bind(this)
  }

  componentDidMount() {
    if(this.props.trigger === 'hover'){
      this.tRef.current.addEventListener("mouseenter", this.showTooltip);
    }
    else if(this.props.trigger === 'click'){
      this.tRef.current.addEventListener("click", this.showTooltip);
    }
      
  }
  
  componentWillUnmount() {
    if(this.props.trigger === 'hover'){
      this.tRef.current.removeEventListener("mouseenter", this.showTooltip);
    }
    else if(this.props.trigger === 'click'){
      this.tRef.current.removeEventListener("click", this.showTooltip);
    }
  }

  hideTooltip() {
    this.setState({ isTooltipDisplay: false})
  }
  showTooltip() {
    this.setState({ isTooltipDisplay: true })
  }

  render() {
    let {content} = this.props;
    let placement = this.props.placement || 'bottom';
    return (
      <span className='tooltip' ref={this.tRef}
        onMouseLeave={this.hideTooltip}
      >
        {this.state.isTooltipDisplay &&
          <div className={`tooltip-body tooltip-${placement}`}>
            <div className='tooltip-content'>{content}</div>
          </div>
        }
        <span
          className='tooltip-child'
        >
          {this.props.target}
        </span>
      </span>
    )
  }
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  trigger: PropTypes.oneOf(['hover', 'click']),
  target: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])

};
Tooltip.defaultProps = {
  position: 'bottom',
  trigger: 'hover'
};


export default Tooltip;