import React from 'react'

export default function Navbar(props) {
    return (
        <div className="App">
            <nav style={{ backgroundColor: props.mode === 'dark' ? '#1c2a35' : '#F8F9FA' }} className={`navbar navbar-expand-lg navbar-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-4 fw-bold ms-2" href="/">Text Utils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} ms-2 me-4`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    );
}
