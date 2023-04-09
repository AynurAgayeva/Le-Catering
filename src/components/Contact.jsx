import React, { Component } from 'react'

 class Contact extends Component {
  render() {
    return (
   <>
    <div id='contact' className=" con  col-12 ">
      <div className=" contact-main col-12    ">
        <h4 style={{ fontSize: 36,
    letterSpacing: 5, fontWeight: 500, marginBottom:60}}>
         Contact</h4>
        
              <p style={{ fontSize: 15,
   lineHeight:1.8}}>
We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy
 the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
          <p  style={{ fontSize: 16,
   fontWeight: "bold", color:"#607d8b"}}>
        Catering Service, 42nd Living St, 43043 New York, NYs</p>

   <p style={{ fontSize: 15,
    lineHeight:1.8}}>
You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
<form >
    <input className='name' type="text"placeholder='Name' required="Name" />
    <input type="number" placeholder='How many people'  required="Number" />
    <input type="datetime-local" placeholder='11/16/2020 08:00 PM' required="Date" />
       <input className='name' type="text"placeholder='Message/ Special requirements' required="Text" />
       <button type='submit'>SEND MESSAGE</button>
</form>


       
      </div>
      
    </div>
   
   
   </>
    )
  }
}

export default Contact