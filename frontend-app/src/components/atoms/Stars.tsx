import React from "react"

type Props = {
  evaluation: number
}

export const Stars: React.VFC<Props> = (props: Props) => {
  const hoge: number[] = [...Array(props.evaluation).keys()]
  console.log(hoge)
  return <></>
}
