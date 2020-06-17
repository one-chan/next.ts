import React from 'react'


type Props = {
  message: string
}

export const Example: React.FC<Props> = ({message}) => <p>{message}</p>
