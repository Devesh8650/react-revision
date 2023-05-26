import React, { useRef } from 'react'

function Ref() {
    const inputRef = useRef(null)
    const focunInput=()=>{
        inputRef.current.value="100"
        inputRef.current.focus()
    }
  return (
<>
<h1>useRerf Hooks</h1>
<input type='text' ref={inputRef}/>
<button onClick={focunInput}>Focus</button>
</> 
 )
}

export default Ref