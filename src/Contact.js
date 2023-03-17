import React from 'react'
import { useState } from 'react'

function Contact() {
    const initialData={
        FullName:'',
        Email:'',
        Password:'',
        UserName:'',
        PhoneNo:'',
        Url:''
    }
    const[userData,setUserData]=useState(initialData)
    const[submitted,setSubmitted]=useState(false)
    const[errors,setErrors]=useState({
        FullName:'',
        Email:'',
        Password:'',
        UserName:'',
        PhoneNo:'',
        Url:''
    })
    const handleChange=(evt)=>{
        setUserData({
          ...userData,
          [evt.target.name]:evt.target.value
        })
        }
        const handleSubmit=(evt)=>{
            evt.preventDefault()
console.log('submitted')
            const userErrors={
              FullName:'',
        Email:'',
        Password:'',
        UserName:'',
        PhoneNo:'',
        Url:''
            }
            let isError=false
            const regexName='Berhampore'
            const validName=/^[A-Za-z][A-Za-z0-9_]{7,29}$/
            const FullName=regexName.match(validName)
            if(FullName===''||!validName.test(FullName)){
              isError=true
              userErrors.FullName='valid name is required'
            }
            const myStr='Sabiburrahaman'
            const validUser=/^[A-Za-z][A-Za-z0-9_]{7,29}$/
            const UserName=myStr.match(validUser)
            if(UserName===''||!validUser.test(UserName)){
              isError=true
              userErrors.UserName='Valid userName is required'
            }
            const validMail= /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if(Email===''||!validMail.test(Email)){
              isError=true
              userErrors.Email='valid mail is required'
            }
             const regex='DW462qqr'
              const validPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/
               const Password=regex.match(validPass)
             if(Password===''||!validPass.test(Password)){
             isError=true
                userErrors.Password='valid Password is required'
              }
              const ph='7074467104'
            const validPh=/^\d{10}|\d{11}$/
            const PhoneNo=ph.match(validPh)
            if(PhoneNo===''||!validPh.test(PhoneNo)){
              console.log('regex')
              isError=true
              userErrors.PhoneNo='valid Phone No is required'
            }
            const FBurl = /^(http|https):\/\/www.facebook.com\/.*$/i;
            if(Url === '' || !FBurl.test(Url)){
              isError=true
              userErrors.Url='valid Url is required'
            }
            setUserData(initialData)
            setErrors(userErrors)
            if(isError)return
            setSubmitted(true)

        }
        const{FullName,Email,Password,UserName,PhoneNo,Url}=userData
  return (
    <>
    <div>
      <h3 align='center'>hello from contact form</h3>
    </div>

    <div style={{width:600,margin:'0 auto'}}>
    {submitted&&<h3>form is successfully submitted</h3>}
        <form onSubmit={handleSubmit}>
<label htmlFor='FullName'>FullName:</label>
<input type='text'
name='FullName' onChange={handleChange}
id=''
placeholder='FullName'
value={FullName}/>
<p style={{color:'red'}}>{errors.FullName}</p>
<label htmlFor='UserName'>UserName:</label>
<input type='text'name='UserName'onChange={handleChange}
id=''
placeholder='UserName'
value={UserName}
/>
<p style={{color:'red'}}>{errors.UserName}</p>
<div>
<label htmlFor='Email'>Email:</label>
<input type='text'name='Email'onChange={handleChange}
id=''
placeholder='Email'
value={Email}
/>
<p style={{color:'red'}}>{errors.Email}</p>
<label htmlFor='PhoneNo'>PhoneNo:</label>
<input type='text'name='PhoneNo'onChange={handleChange}
id=''
placeholder='PhoneNo'
value={PhoneNo}
/>
</div>
<p style={{color:'red'}}>{errors.PhoneNo}</p>
<div>
<label htmlFor='Password'>Password:</label>
<input type='text'readonly class="form-control-plaintext"name='Password'onChange={handleChange}
id='Password'
placeholder='Password'
value={Password}
/> 
<p style={{color:'red'}}>{errors.Password}</p>
<label htmlFor='Url'>FaceBookURL:</label>
<input type='text'name='Url'onChange={handleChange}
id='Url'
placeholder='FacbookUrl'
value={Url}
/> 
<p style={{color:'red'}}>{errors.Url}</p>
</div>
<input type='submit' value='submit'/>
</form>
    </div>
    </>
  )
}

export default Contact
