import React from 'react'

export default function PreviewArea(props) {

    function copyText() {
        navigator.clipboard.writeText(props.textopt)
        props.setAlertState("Text Copied !")
    }

    return (
        <div>
            <div className="mt-5 mb-3">
                <textarea style={{backgroundColor: props.mode==='dark'?'#1c2a35':'',border:props.mode==='dark'?'none':'',color:props.mode==='dark'?'#fff':''}}   placeholder="Your Preview Here 👉" readOnly={true} value={props.textopt} className="form-control mt-2" id="mytextbox" rows="4"></textarea>
            </div>
            <div className="text-center mb-5">
                <button style={{backgroundColor:props.mode==='dark'?'#1c2a35':''}} onClick={copyText} className="btn btn-dark ms-3 ">Copy</button>
            </div>
           
        </div>
    )
}
