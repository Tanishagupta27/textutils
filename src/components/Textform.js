import React,{useState} from 'react'

export default function Textform(props) {
const[text,setText]=useState("")

const onchange=(event)=>{
  setText(event.target.value)
}
const uppercase=()=>{
  let newtext=text.toUpperCase();
   setText(newtext);
   props.b("Uppercase has been enabled","success")
}
const lowercase=()=>{
  let newtext=text.toLowerCase();
   setText(newtext);
   props.b("Lowercase has been enabled","success")
}
const cleartext=()=>{
  setText("");
  
}

  return (
   <div className="my-3 container" style={{color:props.a==='dark'?'white':'black'}}>
    <h2 className="my-3" >{props.heading}</h2>
    <textarea className="form-control" style={{backgroundColor:props.a==='dark'?'#13466e':'white',color:props.a==='dark'?'white':'black'}} value={text} onChange={onchange} id="mytext" rows="8"></textarea>
    <button type="button" onClick={uppercase} className="btn btn-primary my-3 ">Convert to Uppercase</button>
    <button type="button" onClick={lowercase} className="btn btn-primary my-3 mx-3">Convert to Lowercase</button>
    <button type="button" onClick={cleartext} className="btn btn-primary my-3">Clear text</button>
    <h3>Your text summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{text.split(" ").length*0.008} minutes read</p>
    <h4>Preview</h4>
    <p>{text}</p>
   </div>
  )
}
