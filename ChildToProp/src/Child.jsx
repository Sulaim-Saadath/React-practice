import React from 'react'

const Child = ({sendMessage}) => {
  return (
    <div>
      <button onClick={() => {sendMessage("hello from child")}}>
        Send
      </button>
    </div>
  )
}

export default Child
