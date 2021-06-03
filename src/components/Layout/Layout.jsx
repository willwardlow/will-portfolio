
import Nav from '../shared/Nav/Nav'

export default function Layout(props) {
  return (
    <div className='page-layout'>
      <Nav />
      {props.children}
    </div>
  )
}
