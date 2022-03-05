import React from "react"
import "./css/App.css"
import { HeaderButton } from "./components/molequles/HeaderButton"
import { sampleActions } from "./features/sample/sampleSlice"
import { useDispatch } from "react-redux"
import { SerchButton } from "./components/molequles/SerchButton"
import { TagButton } from "./components/molequles/TagButton"
import { PullDown } from "./components/atoms/PullDown/PullDown"
import { Stars } from "./components/atoms/Stars"
import { InputTextArea } from "./components/atoms/InputTextArea"
import { Slider } from "./components/atoms/Slider/Slider"
import "swiper/react/swiper.scss"
import "swiper/components/pagination/pagination.scss"

function App() {
  // const handlePaginate = (page: number) => {
  // APIを叩きに行く処理
  // dispatch(sampleActions.sample())
  // }

  const dispatch = useDispatch()

  return (
    <>
      <div className="App">
        <header className="App-header">
          <HeaderButton text={"ログイン"} action={() => dispatch(sampleActions.sample())} />
          <br />
          <HeaderButton text={"新規登録"} action={() => dispatch(sampleActions.sample())} />
        </header>
        <br />
        <SerchButton text={"この条件で検索する"} action={() => dispatch(sampleActions.sample())} />
        <br />
        <br />
        <TagButton text={"渋谷"} action={() => dispatch(sampleActions.sample())} />
        <br />
        <br />
        <PullDown
          name={"price-band"}
          texts={["10000", "20000", "30000", "40000", "50000"]}
          action={() => dispatch(sampleActions.sample())}
        />
        <br />
        <br />
        {/* <PageNation totalPage={10} onChange={(page: number) => handlePaginate(page)} /> */}
        <br />
        <br />
        <Stars evaluation={3} />
        <InputTextArea placeholder="エリア"></InputTextArea>
        {/* <SearchModal></SearchModal> */}
        <Slider></Slider>
      </div>
      <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
      <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
    </>
  )
}

export default App
