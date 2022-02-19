import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ArrowButton } from "../molequles/ArrowButton"
import { PagerButton } from "../molequles/PagerButton"

type Props = {
  totalPage: number
  onChange: (page: number) => void
}

export const PageNation: React.VFC<Props> = (props: Props) => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [currentPage, setPage] = useState(1)
  const totalPage = props.totalPage
  useEffect(() => {
    // 初期描画ではapi叩かせない
    if (isFirstRender) {
      setIsFirstRender(false)
      return
    }
    // 親モジュールで定義されてる関数でapi実行させる
    props.onChange(currentPage)
  }, [isFirstRender])

  const handleBack = (): void => {
    if (currentPage === 1) {
      return
    }
    setPage(currentPage - 1)
  }

  const handleForward = (): void => {
    if (currentPage === totalPage) {
      return
    }
    setPage(currentPage + 1)
  }

  const handleMove = (page: number): void => {
    setPage(page)
  }

  return (
    <PageNationContainer>
      {totalPage !== 0 && (
        <>
          {currentPage !== 1 && <ArrowButton onClick={() => handleBack()} text={"<"} />}
          <StyledUl>
            {Array.from({ length: totalPage }, (v, k) => k + 1).map((page, index) => {
              let available = [1, currentPage, currentPage + 1, currentPage - 1, totalPage]
              if (available.includes(page)) {
                return (
                  <li key={index} onClick={() => handleMove(page)}>
                    <PagerButton isActive={page === currentPage} text={page.toString()} />
                  </li>
                )
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return <>・・・</>
              } else {
                return <></>
              }
            })}
          </StyledUl>
          {currentPage !== totalPage && <ArrowButton onClick={() => handleForward()} text={">"} />}
        </>
      )}
    </PageNationContainer>
  )
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`

const PageNationContainer = styled.span`
  display: flex;
  justify-content: center;
`
