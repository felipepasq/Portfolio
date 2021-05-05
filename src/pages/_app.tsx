import '../styles/global.scss'
import { Header } from '../components/Header'
import { About } from '../components/About'


function MyApp({ Component, pageProps }) {
  return (

    <div>
      <Header />
      <About />
      <Component{...pageProps} />
    </div>
  )
}

export default MyApp
