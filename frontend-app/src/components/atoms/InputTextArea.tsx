import React from "react"
import styled from "styled-components"

type Props = {
  placeholder?: string
}

export const InputTextArea: React.VFC<Props> = (props: Props) => {
  return <StyledInputTextArea type="text" placeholder={props.placeholder} onChange={() => {}} />
}

const StyledInputTextArea = styled.input`
  top: 422px;
  left: 416px;
  width: 204px;
  height: 29px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.5px solid #3a3c53;
  opacity: 1;
`
