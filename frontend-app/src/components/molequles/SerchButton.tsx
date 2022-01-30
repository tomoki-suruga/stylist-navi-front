import { Action } from '@reduxjs/toolkit'
import React from 'react'
import { Button } from '../atoms/Button'
import styled from 'styled-components'

type Props = {
    text: string
    action: () => Action
}

export const SerchButton : React.VFC<Props> = (props: Props) => {
    return(
    <StyledButton
      text={props.text}
      action={props.action}
    />
    )
}

const StyledButton = styled(Button)`
cursor: pointer;
transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
width: 204px;
height: 51px;
background: #232323 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 5px #00000029;
border: 0.5px solid #232323;
color: #ffffff;
/** ボタンをずれさせるアニメーション */
background: transparent;
border: none;
position: relative;
border-radius: 0;
z-index: 1;
&:: before{
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
  background: #232323;
  border: 2px solid #232323;
  z-index: -1;
}
&:: after{
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
  background: #d2d2d2;
  z-index: -2;
}
&:hover{
  color: #232323;
  &::before{
    background: transparent;
  }
  &::after{
    top: 6px;
    left: 6px;
  }
}
`