import { Action } from '@reduxjs/toolkit'
import React from 'react'
import { Button } from '../atoms/Button'
import styled from 'styled-components'

type Props = {
    text: string
    action?: () => Action
}
export const TagButton: React.VFC<Props> = (props: Props) => {
    return (
    <StyledButton
      text={props.text}
      action={props.action}
    />)
}

const StyledButton = styled(Button)`
cursor: pointer;
transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
padding-right: 8px;
padding-left: 8px;
padding-top: 7px;
padding-bottom: 7px;
background: #ffffff 0% 0% no-repeat padding-box;
border: 0.5px solid #707070;
color: #232323;
opacity: 1;
font-size: 12px;
&:hover {
  background: #232323;
  color: #ffffff;
}
`