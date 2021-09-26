import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div>
              <div className="alert alert-success alert-dismissible fade show m-4" role="alert">
                <strong>{props.alert.message}</strong> 
            </div>
        </div>
    )
}
