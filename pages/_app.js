import '../styles/global.css'
import {context} from './context'
function MyApp({ Component, pageProps }) {
  return (
    <context>
    <Component {...pageProps} />
    </context>
  )
}

export default MyApp