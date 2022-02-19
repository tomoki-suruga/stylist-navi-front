import React from "react"
import { Action } from "redux"

type Props = {
  className?: string
  text: string
  action?: () => Action
  onClick?: () => void
}

export const Button: React.VFC<Props> = (props: Props) => {
  const func = props.action ? props.action : props.onClick
  return (
    <button className={props.className} onClick={func}>
      {props.text}
    </button>
  )
}
