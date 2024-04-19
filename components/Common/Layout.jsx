export default function Layout({ children }) {
  return (
    <div className="main-container">
        <fieldset>
          { children }
        </fieldset>
    </div>
  )
}