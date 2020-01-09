import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { calcIconSize } from '../utils'

const iconBase = {
  width: 16,
  height: 16,
}

class VisibilityOff extends PureComponent {
  render() {
    const { color, size, solid } = this.props
    const newSize = calcIconSize(iconBase, size)

    if (solid) {
      return (
        <svg
          width={newSize.width}
          height={newSize.height}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.6 5.59961L6.39999 13.7996C6.89999 13.8996 7.49999 13.9996 7.99999 13.9996C11.6 13.9996 14.4 10.8996 15.6 9.09961C16.1 8.39961 16.1 7.49961 15.6 6.79961C15.4 6.49961 15 6.09961 14.6 5.59961Z"
            fill={color}
          />
          <path
            d="M14.3 0.3L11.6 3C10.5 2.4 9.3 2 8 2C4.4 2 1.6 5.1 0.4 6.9C-0.1 7.6 -0.1 8.5 0.4 9.1C0.9 9.9 1.8 10.9 2.8 11.8L0.3 14.3C-0.1 14.7 -0.1 15.3 0.3 15.7C0.5 15.9 0.7 16 1 16C1.3 16 1.5 15.9 1.7 15.7L15.7 1.7C16.1 1.3 16.1 0.7 15.7 0.3C15.3 -0.1 14.7 -0.1 14.3 0.3ZM5.3 9.3C5.1 8.9 5 8.5 5 8C5 6.3 6.3 5 8 5C8.5 5 8.9 5.1 9.3 5.3L5.3 9.3Z"
            fill={color}
          />
        </svg>
      )
    }
    return (
      <svg
        width={newSize.width}
        height={newSize.height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5744 5.66895L13.1504 7.09295C13.4284 7.43995 13.6564 7.75695 13.8194 7.99995C13.0594 9.12995 10.9694 11.8199 8.25838 11.9849L6.44337 13.7999C6.93937 13.9239 7.45737 13.9999 8.00037 13.9999C12.7074 13.9999 15.7444 8.71594 15.8714 8.49194C16.0424 8.18794 16.0434 7.81595 15.8724 7.51195C15.8254 7.42695 15.3724 6.63095 14.5744 5.66895Z"
          fill={color}
        />
        <path
          d="M0.293375 15.7072C0.488375 15.9022 0.744375 16.0002 1.00038 16.0002C1.25638 16.0002 1.51238 15.9022 1.70738 15.7072L15.7074 1.70725C16.0984 1.31625 16.0984 0.68425 15.7074 0.29325C15.3164 -0.09775 14.6844 -0.09775 14.2934 0.29325L11.5484 3.03825C10.5154 2.43125 9.33137 2.00025 8.00037 2.00025C3.24537 2.00025 0.251375 7.28925 0.126375 7.51425C-0.0426249 7.81725 -0.0416249 8.18625 0.128375 8.48925C0.198375 8.61425 1.17238 10.2913 2.82138 11.7653L0.292375 14.2942C-0.0976249 14.6842 -0.0976249 15.3162 0.293375 15.7072ZM2.18138 7.99925C2.95838 6.83525 5.14637 4.00025 8.00037 4.00025C8.74237 4.00025 9.43737 4.20125 10.0784 4.50825L8.51237 6.07425C8.34837 6.02925 8.17837 6.00025 8.00037 6.00025C6.89537 6.00025 6.00038 6.89525 6.00038 8.00025C6.00038 8.17825 6.02938 8.34825 6.07438 8.51225L4.24038 10.3462C3.28538 9.51025 2.55938 8.56225 2.18138 7.99925Z"
          fill={color}
        />
      </svg>
    )
  }
}

VisibilityOff.defaultProps = {
  color: 'currentColor',
  size: 16,
  solid: false,
}

VisibilityOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  solid: PropTypes.bool,
}

export default VisibilityOff
