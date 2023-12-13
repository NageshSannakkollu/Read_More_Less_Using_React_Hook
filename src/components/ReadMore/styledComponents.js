// Style your elements here
import styled from 'styled-components'

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  padding: 80px 60px;
`

export const ReactHooksTitle = styled.h2`
  font-size: 25px;
  font-family: 'Roboto';
`
export const ReactHooksInfo = styled.p`
  font-size: 16px;
`
export const ReactHooksImage = styled.img`
  height: 500px;
  width: 750px;
`
export const ReactHooksParagraph = styled(ReactHooksInfo)``
export const ReactHooksReadButton = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  padding: 10px 20px;
  border-radius: 8px;
  border-width: 0;
`
