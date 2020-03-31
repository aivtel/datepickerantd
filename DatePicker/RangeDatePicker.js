/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import DatePicker from './DatePicker'

const { RangePicker } = DatePicker

const Wrapper = styled(Box)`
  .ursip-input {
    background: #f5f5f5 !important;
    height: ${props => `${props.height}px`} !important;
    width: ${props => `${props.width}`} !important;

    color: #3a3a3a;
    border-color: #b5b5b5;
    background-color: #f5f5f5;
  }
  .ursip-calendar-input-picker {
    width: 100% !important;
  }
  .ursip-calendar-picker {
    width: 100% !important;
  }
`

function RangeDatePicker({ onChange, dateFormat, name, id, width, height, placeholder, ...rest }) {
  const handleChange = (newDate, dateStrings) => {
    onChange && onChange(newDate, dateStrings)
  }

  return (
    <Wrapper width={width} height={height}>
      <RangePicker
        name={name}
        id={id}
        onChange={handleChange}
        format={dateFormat}
        placeholder={placeholder}
        separator="-"
        {...rest}
      />
    </Wrapper>
  )
}

RangeDatePicker.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number,
  placeholder: PropTypes.array,
  name: PropTypes.string,
}

RangeDatePicker.defaultProps = {
  value: [],
  dateFormat: 'DD/MM/YYYY',
  width: 300,
  height: 40,
  placeholder: ['Начальная дата', 'Конечная дата'],
}

RangeDatePicker.displayName = 'RangeDatePicker'

export default RangeDatePicker
