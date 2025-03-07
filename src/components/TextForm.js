import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const [color, setColor] = useState(props.themeMode)

    const clickedUpperCaseUpdate = () =>{
        console.log("Update to Uppercase clicked " + text)
        setText(text.toUpperCase())
        setColor("green")
        props.showAlert('success', 'Text updated in uppercase!')
    }
    
    const clickedLowerCaseUpdate = (event) =>{
        console.log("Update to Lowercase clicked " + text)
        setText(text.toLowerCase())
        setColor("red")
        props.showAlert('success', 'Text updated in lowercase!')
    }

    const updateTextChange = (event) =>{
        console.log("Text entered")
        setText(event.target.value);
    }

  return (
    <>
    <div className='constainer col-12'>
        <h2 style= {{color : props.themeMode === 'dark' ? 'white' : 'black'}}>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" style= {{color : props.themeMode === 'dark' ? 'white' : 'black', backgroundColor : props.themeMode === 'dark' ? 'rgb(6 84 112)' : 'white'}} onChange={updateTextChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary " onClick={clickedUpperCaseUpdate}>Update to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={clickedLowerCaseUpdate}>Update to Lowercase</button>
    </div>
    <div className="container my-2" style= {{color : props.themeMode === 'dark' ? 'white' : 'black'}}>
        <h3>Your Text Summary</h3>
        <p>Your word constains {text.trim().split(/\s+/).filter(word => word !== '').length} words and {text.replace(/\s/g, '').length} characters.</p>
    </div>
    </>
  )
}
