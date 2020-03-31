import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import DatePicker from './DatePicker'
import theme from '../../theme'

const Wrapper = styled(Box)`
  .ursip-input {
    height: ${props => `${props.height}px`} !important;
    width: ${props => `${props.width}`} !important;
    width: 100% !important;
    color: #3a3a3a;
    border-color: ${props => (props.sx ? theme.colors.error : '#b5b5b5')};
    border-width: ${props => (props.sx ? '1px' : props.noBorder ? '0' : '1px')};
    background-color: #f5f5f5;
    &:focus {
      border-width: ${props => (props.sx ? '1px' : props.noBorder ? '0' : '1px')} !important;
      border-right-width: ${props => (props.noBorder ? '0' : '1px')} !important;
      outline: none !important;
    }
    &:focus-within {
      border-color: ${props => (props.sx ? theme.colors.error : '#b5b5b5')} !important;
      border-width: ${props => (props.sx ? '1px' : props.noBorder ? '0' : '1px')} !important;
      outline: none !important;
    }
    &:hover {
      border-color: ${props => props.sx && theme.colors.error} !important;
      border-right-width: ${props => (props.sx ? '1px' : props.noBorder ? '0' : '1px')} !important;
    }
  }
  .ursip-calendar-input-picker {
    width: 100% !important;
  }
  .ursip-calendar-picker {
    width: 100% !important;
  }
`

function SingleDatePicker({
  onChange,
  id,
  name,
  dateFormat,
  width = '100%',
  height,
  placeholder,
  value,
  noBorder,
  sx,
  disabled,
  ...rest
}) {
  // const handleChange = (newDate, dateStrings) => {
  //   onChange && onChange(newDate, dateStrings)
  // }
  console.log('disabled', disabled)
  return (
    <Wrapper width={width} height={height} noBorder={noBorder} sx={sx}>
      <DatePicker
        onChange={onChange}
        format={dateFormat}
        placeholder={placeholder}
        name={name}
        id={id}
        separator="-"
        value={value}
        disabled={disabled}
        {...rest}
      />
    </Wrapper>
  )
}

SingleDatePicker.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number,
  placeholder: PropTypes.string,
  name: PropTypes.string,
}

SingleDatePicker.defaultProps = {
  value: [],
  dateFormat: 'DD-MM-YYYY',
  width: '100%',
  height: 40,
  placeholder: 'Выберите дату',
  onChange: null,
  name: '',
}

export default SingleDatePicker
