import { Action } from '@reduxjs/toolkit'
import React from 'react'
import { Button } from '../atoms/Button'
import styled from 'styled-components'

type Props = {
    isActive: boolean
    text: string
    action?: () => Action
}
export const PagerButton: React.VFC<Props> = (props: Props) => {
    return (
    <StyledButton
      isActive={props.isActive}
      text={props.text}
      action={props.action}
    />)
}
type ButtonProps = {
  isActive?: boolean
}

const StyledButton = styled(Button)<ButtonProps>`
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
width: 25px;
height: 25px;
margin-right: 4px;
margin-left: 4px;
background: #ffffff 0% 0% no-repeat padding-box;
border: 0.5px solid #707070;
color: #232323;
opacity: 1;
font-size: 12px;
&:hover {
  background: #232323;
  color: #ffffff;
}
${(props:ButtonProps) => props.isActive ? `
background: #232323;
color: #ffffff;
` : ''
}
`