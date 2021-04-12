import './Contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='form-text'>
        <p>
         Want to contact me? Fill out this form!
        </p>
      </div>
      <form action="https://getform.io/f/b6a30d8f-8d64-4088-98f8-cbdf8f938673" method="POST">
        <label htmlFor='name'> Name:
          <input type='text' name='name' placeholder='Enter name'/>
        </label>

        <label htmlFor='email'> Email:
          <input type='text' name='email' placeholder='Enter Email Address:' />
        </label>

        <label htmlFor='message'> Message:
          <textarea name='message' rows='10' cols='20' />
        </label>

        <input type='submit'/>


      </form>
      
    </div>
  )
}
