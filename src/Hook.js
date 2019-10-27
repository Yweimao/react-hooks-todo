import React, {useState, useEffect, useContext, createContext} from 'react'

//类组件不足: 状态逻辑难以复用  生命周期与状态混乱导致复杂 this指向困扰


//hooks 优势  函数组件无this问题   自定义hooks方面状态逻辑  副作用的关注点分离
const countContext = createContext()
function Foo() {
  const count = useContext(countContext)
  return(
    <div>{count}</div>
  )
}


function Hook() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  useEffect(() => {
    document.title = count
  },[count])
  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  function handleClick() {
    setCount(count+1)
  }
  return(
    <div>
      <button onClick={handleClick}>Click({count}) resize: {size.width} * {size.height}</button>
      <countContext.Provider value={count}>
        <Foo></Foo>
      </countContext.Provider>
    </div>
  )
}



export default Hook;
