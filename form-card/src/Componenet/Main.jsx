import React from 'react'
import './Main.css'
import { useState } from 'react'

const Main = () => {
    let h1 = document.querySelector("h1")
    const [name, setname] = useState("")
    const [surname, setsurname] = useState("")
    const [mobile, setmobile] = useState("")
    const [email, setemail] = useState("")
    const [serh, setserh] = useState("")

    const input1 = (e1) => {
        setname(e1.target.value)
    }

    const input2 = (e2) => {
        setsurname(e2.target.value)
    }

    const input3 = (e3) => {
        setmobile(e3.target.value)
    }

    const input4 = (e4) => {
        setemail(e4.target.value)
    }

    const input5 = (e5) => {
        setserh(e5.target.value)
    }


    const num = () => {
        let a = email.endsWith("ru");
        let b = mobile.startsWith(+77);
        if (name != '' && surname != '' && mobile != '' && email != '' && serh != '' && name != ' ' && surname != ' ' && mobile != ' ' && email != ' ' && serh != ' ' && a == true && b == true) {
            h1.innerText = "Ugurla Qeydiyatdan kecdiz"
            setname("")
            setsurname("")
            setmobile("")
            setemail("")
            setserh("")
        } else if (name == '' || surname == '' || mobile == '' || email == '' || serh == '' || name == ' ' || surname == ' ' || mobile == ' ' || email == ' ' || serh == ' ') {
            alert(" Butun deyerleri daxil edin")
            h1.Text = "User Login."
        } else if (b == false) {
            alert("Nomre '+77' ile baslamalidir")
            h1.innerText = "User Login"
        } else if (a == false) {
            alert("Emailin sonu 'ru' ile bitmelidir")
            h1.innerText = "User Login"
        }
        else {
            alert("Deyerleri duzgun daxil edin")
            h1.innerHTML = "User Login"
        }
    }

    return (
        <div className='main'>
            
            <h1>User Login</h1>
            <input value={name} onChange={input1} className='Name' type="text" placeholder='Name' />
            <br />
            <br />
            <input value={surname} onChange={input2} className='Surname' type="text" placeholder='Surname' />
            <br />
            <br />
            <input value={mobile} onChange={input3} className='Number' type="number" placeholder='Number' />
            <br />
            <br />
            <input value={email} onChange={input4} className='email' type="email" placeholder='Email' />
            <br />
            <br />
            <textarea value={serh} placeholder='50 Sozden ibaret ' maxLength={50} onChange={input5} className='serh' name="" id="" cols="30" rows="10"></textarea>
            <br />
            <br />
            <button onClick={num}>Send</button>
        </div>
    )
}

export default Main
