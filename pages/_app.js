// import '../styles/global.css'

// export const TestContext = React.createContext()
// export default function App({ Component, pageProps }) {
// <TestContext.provider value={{test, teston}}>
//   const test = abc
//   const teston = def
//   return <Component {...pageProps} />
// </TestContext.provider>
// }
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp