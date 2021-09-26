import React, { useState } from 'react'
import PreviewArea from './PreviewArea';

export default function TextForm(props) {

    const [text, setText] = useState('');
    const [preview, setPreview] = useState('');

    function handleUppercase() {
        let upperText = text.toUpperCase();
        setPreview(upperText)
    }

    function handleLowercase() {
        let lowerText = text.toLowerCase();
        setPreview(lowerText);
    }

    function handleCleartext() {
        let newText = ""
        setText(newText)
    }

    function handleRemoveSpaces() {
        let newText = text.replace(/\s+/g, ' ').trim()
        setPreview(newText);
        setText(newText);
    }


    function handleOnChange(e) {
        const text = e.target.value;
        setText(text)
    }

    return (
        <>
            <div className="container">
                <div className="mt-5 mb-3">
                    <label style={{ backgroundColor: props.mode === 'dark' ? '#1c2a35' : '' }} htmlFor="mytextbox" className={`form-label badge text-wrap ${props.mode === 'light' ? 'bg-dark' : ''} p-2 ms-2 fs-6`}>Enter your Text here 👇</label>
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? '#1c2a35' : '', border: props.mode === 'dark' ? 'none' : '', color: props.mode === 'dark' ? '#fff' : '' }} onChange={handleOnChange} placeholder={"Enter Text ✍"} value={text} className="form-control mt-2" id="mytextbox" rows="6"></textarea>
                </div>
               
                        <button style={{ backgroundColor: props.mode === 'dark' ? '#1c2a35' : '' }} onClick={handleUppercase} className="btn btn-dark m-2">Upper case</button>
                  
                  
                        <button style={{ backgroundColor: props.mode === 'dark' ? '#1c2a35' : '' }} onClick={handleLowercase} className="btn btn-dark ms-2">Lower case</button>
                
                  
                        <button style={{ backgroundColor: props.mode === 'dark' ? '#1c2a35' : '' }} onClick={handleRemoveSpaces} className="btn btn-dark ms-2">Remove Extra Spaces</button>
                    
                        <button style={{ backgroundColor: props.mode === 'dark' ? '#1c2a35' : '' }} onClick={handleCleartext} className="btn btn-dark ms-2">Clear</button>
                  

            

            </div>

            <div className="container">
                <h5 className="mt-5 mb-4 fw-bold">Text Summary</h5>
                <p>Words : {text.split(" ").length - 1} Characters : {text.length}</p>
                <p>Time to read : {text.split(" ").length - 1 > 0 ? 0.008 * text.split(" ").length : 0}</p>
            </div>

            <PreviewArea textopt={preview} mode={props.mode} setAlertState={props.setAlertState} />

        </>
    )
}
