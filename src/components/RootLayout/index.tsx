import { Footer } from '../Footer'
import { Header } from '../Header'
import { Left } from '../Left'
import { Navbar } from '../Navbar'

import * as C from './styles'

import { Outlet } from 'react-router-dom'


function RootLayout() {

  return (
    <>
    <Header />
    <C.Container>
      <Left />
      <div>
        <Navbar />
        <Outlet />
      </div>
      </C.Container>
      <Footer />
    </>
  )
}

export default RootLayout
