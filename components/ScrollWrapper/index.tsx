import React from 'react'

type Props = {
  children: React.ReactNode
}

// eslint-disable-next-line no-undef
const ScrollWrapper = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>
}

export default ScrollWrapper
