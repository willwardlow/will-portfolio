import './Contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='form-text'>
        <p>
          Want to contact me? Fill out this form!
           <p className="email">
            Or email me directly at wardlow.william@gmail.com
           </p>
        </p>
      </div>
      <form action="https://getform.io/f/b6a30d8f-8d64-4088-98f8-cbdf8f938673" method="POST">
        <label htmlFor='name'> Name:</label>
          <input type='text' name='name' placeholder='Enter name'/>
        

        <label htmlFor='email'> Email: </label>
          <input type='text' name='email' placeholder='Enter Email Address:' />
        

        <label htmlFor='message'> Message:</label>
        <textarea name='message' rows='10' cols='50' placeholder='Enter Message:' />
        
        <input type='submit'/>
      </form>

      
    </div>
  )
}
