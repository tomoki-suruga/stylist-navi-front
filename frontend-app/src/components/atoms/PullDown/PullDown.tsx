import { Action } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useTapOutside } from './hooks'

type Props = {
    name: string
    texts: string[]
    action: () => Action
}
export const PullDown: React.VFC<Props> = (props: Props) => {
  const[isOpenMenu, setIsOpenMenu] = React.useState(false)
  const[menu, setMenu] = useState("menu")
  const handleClick = (menu:string) => () => {
    setMenu(menu)
    setIsOpenMenu(false);
  }
  const mark = isOpenMenu ? '▲' : '▼'
  const ref = useTapOutside(setIsOpenMenu)
  const height = 33 * props.texts.length
  return (
    <>
      <StyledSelect ref={ref}
        isOpen={isOpenMenu}
        height={height}
        onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <StyledMenuHeader>{`${menu} ${mark}`}</StyledMenuHeader>   
        <StyledMenu
          hidden={!isOpenMenu}>
          {props.texts.map((text, index) => <StyledItem key={index} className="item" onClick={handleClick(text)}>{text}</StyledItem>)}
        </StyledMenu>
      </StyledSelect>
    </>
  )
}
type SelectProps = {
  isOpen: boolean
  height: number
}

const StyledSelect = styled.div<SelectProps>`
position: relative;
width: 90px;
background: #ffffff 0% 0% no-repeat padding-box;
border: 0.5px solid #3a3c53;
opacity: 1;
margin-left: auto;
margin-right: auto;
cursor: pointer;

${(props:SelectProps) => props.isOpen && `
  > ul {
    margin-block-start: 0em;
    margin-block-end: 0em;
    border-bottom: 0.5px solid #3a3c53;
    height: ${props.height}px;
    > li {
      overflow: visible;
      width: 90px;
      border-top: 0.5px solid #3a3c53;
      border-right: 0.5px solid #3a3c53;
      border-left: 0.5px solid #3a3c53;
      &:hover {
        background: #232323;
        color: #ffffff;
      }
      transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
`}
background: #ffffff 0% 0% no-repeat padding-box;
opacity: 1;
    }
  }
}
`

type MenuProps = {
  hidden: boolean
}

const StyledMenu = styled.ul<MenuProps>`
position: absolute;
left: -1px;
z-index:1;
padding: 0;
list-style: none;
`

const StyledItem = styled.li`
margin: 0;
padding-top: 7px;
padding-bottom: 7px;
`

const StyledMenuHeader = styled.div`
padding-top: 7px;
padding-bottom: 7px;
&:hover {
  background: #232323;
  color: #ffffff;
}
transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
`