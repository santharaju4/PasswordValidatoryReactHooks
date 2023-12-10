// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setOfValidPassword] = useState('')

  const showErrorMessage = password.length < 8

  console.log(showErrorMessage)

  const onChangePasswordInput = event => {
    setOfValidPassword(event.target.value)
  }

  return (
    <AppContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePasswordInput}
        />
        {showErrorMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorContainer>
    </AppContainer>
  )
}

export default PasswordValidator
