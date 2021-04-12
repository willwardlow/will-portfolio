import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <a className='linkedin' href='https://www.linkedin.com/in/will-wardlow/'>
        <img src='https://i.imgur.com/JMrpyRv.png' alt='linkedin icon' />
      </a>

      <a className='github' href='https://github.com/willwardlow'>
        <img src='https://i.imgur.com/9Mu6JAV.png' alt='github icon'/>
      </a>

      <p className='copyright'> &#169; 2021</p>
      <p className='credits'> Photo Credit: Sawyer Bengston on Unsplash</p>
    </div>
  )
}
