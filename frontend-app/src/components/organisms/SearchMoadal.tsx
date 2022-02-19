import React from "react"
import styled from "styled-components"
import { InputTextArea } from "../atoms/InputTextArea"
import { Modal } from "../atoms/Modal/Modal"

export const SearchModal: React.VFC = () => {
  return (
    <Modal disabled={false}>
      <InputTextArea placeholder="渋谷"></InputTextArea>
    </Modal>
  )
}
