import React from 'react'
import { useState } from 'react'

function Contact() {
    const initialData={
        FullName:'',
        Email:'',
        Password:'',
        UserName:'',
        PhoneNo:'',
        FacebookURLVerification:''
    }
    const[userData,setUserData]=useState(initialData)
    const[errors,setErrors]=useState({
        FullName:'',
        Email:'',
        Password:'',
        UserName:'',
        PhoneNo:'',
        FacebookURLVerification:''
    })
    const handleChange=(evt)=>{
        console.log('called')
        setUserData(evt.target.value)
        }
        const{FullName,Email,Password,UserName,PhoneNo,FacebookURLVerification}=userData
  return (
    <>
    <div>
      <h3 align='center'>hello from contact form</h3>
    </div>

    <div style={{width:600,margin:'0 auto'}}>
        <form>
<label htmlFor='FullName'>FullName:</label>
<input type='text'
name='FullName' onChange={handleChange}
id=''
value={''}
/>
<label htmlFor='UserName'>UserName:</label>
<input type='text'name='Lastname'onChange={handleChange}
id=''
value={''}
/>
</form>
    </div>
    </>
  )
}

export default Contact
