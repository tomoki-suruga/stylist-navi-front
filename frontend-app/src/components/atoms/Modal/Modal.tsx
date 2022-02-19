import React, { ReactNode } from "react"
import styled from "styled-components"
import { useWindowDimensions } from "./hooks"

type Props = {
  disabled: boolean
  children?: ReactNode
}

export const Modal: React.FC<Props> = (props: Props) => {
  const { width, height } = useWindowDimensions()
  return (
    <StyledBackGround disabled={props.disabled}>
      <StyledModal disabled={props.disabled} width={width / 2} height={height / 2}>
        {props.children}
      </StyledModal>
    </StyledBackGround>
  )
}

type BackGroundProps = {
  disabled: boolean
}

const StyledBackGround = styled.div<BackGroundProps>`
  ${(props) => props.disabled && "display: none"}
  position:fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
`

type ModalProps = {
  width: number
  height: number
  disabled: boolean
}

const StyledModal = styled.div<ModalProps>`
  position: fixed;
  inset: 0;
  margin: auto;
  padding: 0;
  background-color: #ffffff;
  color: #666666;
  position: fixed;
  z-index: 2;
  ${(props) => props.disabled && "display: none"}
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`
