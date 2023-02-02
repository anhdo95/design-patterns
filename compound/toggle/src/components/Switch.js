import React from 'react'
import classNames from 'classnames'

import './Switch.css'

const noop = () => {}

export default function Switch({
  on,
  className = '',
  'aria-label': ariaLabel,
  onClick,
  ...props
}) {
  return (
    <label aria-label={ariaLabel || 'Switch'} style={{ display: 'block' }}>
      <input
        className="switch-input"
        type="checkbox"
        checked={on}
        onChange={noop}
        onClick={onClick}
      />
      <span
        className={classNames(
          className,
          'switch-btn',
          on ? 'switch-btn-on' : 'switch-btn-off'
        )}
        {...props}
      />
    </label>
  )
}
