import React from 'react'

import styled from '@emotion/styled'

type Props = {
  message: string
}

const StyledParagraph = styled.p`
  background-color: #e2e2e2;
  color: #fff;
`

export const Example: React.FC<Props> = ({message}) => <StyledParagraph>{message}</StyledParagraph>
