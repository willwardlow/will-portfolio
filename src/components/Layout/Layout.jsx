import Footer from '../shared/Footer/Footer'
import Nav from '../shared/Nav/Nav'

export default function Layout(props) {
  return (
    <div className='page-layout'>
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}
