import React, { useEffect } from "react"

export const useTapOutside = (setIsOpenMenu: Function) => {
  // 要素外のタップを感知するためにRefを取得する
  const ref: React.RefObject<HTMLDivElement> = React.createRef()
  useEffect(() => {
    const handleTapOutside = (event: MouseEvent) => {
      // ref.currentとタップ要素が異なる場合
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpenMenu(false)
      }
    }
    document.addEventListener("mousedown", handleTapOutside)
    return () => {
      // この要素が破棄される時に実行される
      document.removeEventListener("mousedown", handleTapOutside)
    }
    // refが更新された時にuseEffect内の関数が実行される
  }, [ref])
  return ref
}
