import React from 'react'

export default function Header({title}) {
  return (
    <>
    <h1 data-testid="header-1">{title}</h1>
    <h3 title="Heading">Sub Headding</h3>
    </>
  )
}
