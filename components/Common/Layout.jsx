import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (

    <div className="main-container">
      <Header />
        <fieldset>
          { children }
        </fieldset>
      <Footer/>
    </div>
  )
}