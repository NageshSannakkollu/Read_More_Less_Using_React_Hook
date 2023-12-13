// Write your code here

import {useState} from 'react'
import {
  ComponentContainer,
  ReactHooksTitle,
  ReactHooksInfo,
  ReactHooksImage,
  ReactHooksParagraph,
  ReactHooksReadButton,
} from './styledComponents'

const ReadMore = props => {
  const [reactHooksReadButton, setReactHooksReadButton] = useState(false)
  const {reactHooksDescription} = props
  const readLessDescription = reactHooksDescription.slice(0, 171)

  const onToggleReadButton = () => {
    setReactHooksReadButton(prevState => !prevState)
  }

  const readButtonTitle = reactHooksReadButton ? 'Read Less' : 'Read More'

  const showReactHooksDescription = reactHooksReadButton
    ? reactHooksDescription
    : readLessDescription
  return (
    <ComponentContainer>
      <ReactHooksTitle>React Hooks</ReactHooksTitle>
      <ReactHooksInfo>Hooks are a new addition to React</ReactHooksInfo>
      <ReactHooksImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ReactHooksParagraph>{showReactHooksDescription}</ReactHooksParagraph>
      <ReactHooksReadButton onClick={onToggleReadButton}>
        {readButtonTitle}
      </ReactHooksReadButton>
    </ComponentContainer>
  )
}

export default ReadMore
