import '../styles/App.scss'

function MyApp({ Component, pageProps }) {
  return (

    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />



      <Component{...pageProps} />
    </div>
  )
}

export default MyApp
