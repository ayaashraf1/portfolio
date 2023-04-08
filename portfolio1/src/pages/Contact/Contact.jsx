import React,{ useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserIcon , EnvelopeIcon ,CursorArrowRaysIcon } from '@heroicons/react/24/solid';
import './Contact.css';

export default function Contact() {
    const [name, setName] = useState("");
    const [nameErrorMessage,setNameErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [emailErrorMessage,setEmailErrorMessage] = useState("");
    const [message, setMessage] = useState("");
    const [messageErrorMessage,setMessageErrorMessage] = useState("");

    const resetForm = (e) => {
        // eslint-disable-next-line no-console
        console.log(e);
        setName("");
        setEmail("");
        setMessage("");
    }
    return < div id="contact-container" data-testid="contact-section">
        <div id="contact-container-info">
            <h1>CONTACT</h1>
            <h2>Got a problem to solve?</h2>
            <p>Get your space suit ready and tell me your ideas to develop your dream application.</p>
            <p> <EnvelopeIcon className="h-6 w-6 text-blue-500" />Ayaashraf1111@gmail.com</p>
        </div>
        <div id="contact-form">
            <form  onSubmit={resetForm} method="post" 
            action="mailto:ayaashraf1111@gmail.com?subject=New Registration Alert &message= New Registration requires your approval" >
                <label htmlFor="name">
                    NAME<br />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => {
                           setName(e.target.value);
                           if(e.target.value===""){
                            setNameErrorMessage("Name is empty")
                            e.target.classList.add('error')
                           }else{
                            setNameErrorMessage("") 
                            e.target.classList.remove('error')
                        }
                        }}
                        onFocus={(e)=>{
                            if(e.target.value===""){
                                setNameErrorMessage("Name is empty")
                                e.target.classList.add('error')
                            }else{
                                setNameErrorMessage("") 
                                e.target.classList.remove('error')
                            }
                        }}
                        id="name"
                        required
                        onInvalid={e => e.target.setCustomValidity('Please Enter Name')}
                        onInput={e => e.target.setCustomValidity('')}
                    />
                 <UserIcon className="h-6 w-6 text-blue-500" />
                </label><br />
                <div className='errorMsg'>{nameErrorMessage}</div><br/>
                <label htmlFor="email">
                    EMAIL<br />
                    <input
                        type="email"
                        name="name"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if(e.target.value===""){
                                setEmailErrorMessage("Email is empty or invalid")
                                e.target.classList.add('error')
                            }else{
                                setEmailErrorMessage("") 
                                e.target.classList.remove('error')
                            }
                        }}
                        onFocus={(e)=>{
                            if(e.target.value===""){
                                setEmailErrorMessage("Email is empty or invalid")
                                e.target.classList.add('error')
                            }else{
                                setEmailErrorMessage("") 
                                e.target.classList.remove('error')
                            }
                        }}
                        onInvalid={e => e.target.setCustomValidity('Please Enter Email')}
                        onInput={e => e.target.setCustomValidity('')}
                        id="email"
                        required
                    />
                    <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                </label><br />
                <div className='errorMsg'>{emailErrorMessage}</div><br/>

                <label htmlFor="message">
                    MESSAGE<br />
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            if(e.target.value===""){
                                setMessageErrorMessage("Message is empty")
                                e.target.classList.add('error')
                            }else{
                                setMessageErrorMessage("") 
                                e.target.classList.remove('error')
                            }
                        }}
                        onFocus={(e)=>{
                            if(e.target.value===""){
                                setMessageErrorMessage("Message is empty")
                                e.target.classList.add('error')
                            }else{
                                setMessageErrorMessage("") 
                                e.target.classList.remove('error')
                            }
                        }}
                        onInvalid={e => e.target.setCustomValidity('Please Enter Message')}
                        onInput={e => e.target.setCustomValidity('')}
                        rows="4"
                        id="message"
                        required
                    />
                </label><br />
                <div className='errorMsg'>{messageErrorMessage}</div><br/>
                <button type='submit'>Hit Me Up<CursorArrowRaysIcon className="h-6 w-6 text-blue-500" /></button>
            </form>
        </div>
    </div>
}