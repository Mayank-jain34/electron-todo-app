import React from 'react';
const Link = ({ active, children, onClick }) => {
  return (
    <button className={active ? 'active' : null}
       onClick={e => {
         e.preventDefault()
         onClick()
       }}>
      {children}
    </button>
  )
}

export default Link;
