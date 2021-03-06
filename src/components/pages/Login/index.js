import React from 'react'
import styled from 'styled-components'
import { authCards, authErrorTranslation } from 'constants/auth'

// import components
import AuthForm from 'components/organisms/AuthForm'
import SemiHalfTemplate from 'components/templates/SemiHalfTemplate'

// images
const rightImgPath = '/img/graphics/login.png'

function Login() {
  return (
    <SemiHalfTemplate>
      <Left className='left'>
        <AuthForm
          initCard='login'
          cards={authCards}
          errorTranslation={authErrorTranslation}
        />
      </Left>

      <Right className='right' />
    </SemiHalfTemplate>
  )
}

const Left = styled.div`
  & > * {
    width: 35%;
    button {
      width: 100%;
    }
  }
`
const Right = styled.div`
  height: 100%;
  background-image: url(${rightImgPath});
  background-size: cover;
  background-position: center;
`

export default Login
