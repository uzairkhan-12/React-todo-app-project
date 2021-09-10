import React, { useState } from "react"
import './App.css';

function App(){
const [name,setName]=useState('');
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')
const [favCar , setFavCar] = useState('')
const [txtArea , setTxtArea] = useState('')
const [radioBtn ,setRadioBtn] = useState('')

  function dataPopulate(){
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(favCar)
    console.log(txtArea)
    console.log(radioBtn)
  }



 const onTextChange=input=>{
setName(input.target.value)
  }

  const onEmailChange=input=>{
    setEmail(input.target.value)
  }

  const onPasswordChange=input=>{
    setPassword(input.target.value)
  }
  const onTxtAreaChange=input =>{
    setTxtArea(input.target.value)
  }
   const onfavCarChange=input=>{
     setFavCar(input.target.value)
   }
  const onradioChange = input => {
    setRadioBtn(input.target.value)
  }




  return(
    <div>
      <input id="allInOne" value={name} onChange={onTextChange} type="text" name="text" placeholder="please enter some text here"/>
      <br />
      <input id="allInOne" value={email} onChange={onEmailChange} type="email" name="email" placeholder="Email"/>
      <br />
      <input id="allInOne" value={password} onChange={onPasswordChange} type="password" id="pass" name="email" placeholder="Password"/>
      <br />
      <label>Favorite Car</label>
      <select name="favCar" onChange={onfavCarChange}
      >
        <option value="toyota">Toyota</option>
        <option value="honda">Honda</option>
        <option value="audi">Audi</option>
        <option value="mercidise">Mercidise</option>
      </select>
      <br />
      <label>Are you married</label>
      <input onChange={onradioChange}
      type="radio"
      name="yes"

      />Yes
      <input onChange={onradioChange}
      type="radio"
      name="No"
      />No
      <br />
      <label>Which vehicles do you have?</label>
      <input 
      type="checkbox"
      name="vehicleType"
      />I have a bike
      <input 
      type="checkbox"
      name="vehicleType"
      />I have a car
      <input 
      type="checkbox"
      name="vehicleType"
      />I have a boad
      <br />
      <textarea onChange={onTxtAreaChange} 
      type="textarea"
      name="textfield"
      id="allInOne"
      />
      <br />
      <button onClick={dataPopulate}>Submit</button>
    </div>
  )
}

export default App;
