import React, { useState } from 'react'
import logo from '../images/logo.png'

const SearchBox = ({ city, setCity }) => {
    const [cty, setCty] = useState("")
    return (
        <div className="">
            <div className="row d-flex p-3 m-0">
                <div className="col-g-6 col-md-6 col-10 mx-sm-auto ">
                    <div className="logobox d-flex">
                        <img src={logo} alt="Logo" className="img-fluid" style={{ height: "2rem", width: "2rem" }} />
                        <h3>Weathery</h3>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mx-sm-auto  d-flex justify-content-sm-center align-items-lg-end ">
                    <div className="inputbox">
                        <input type="text" name="cityname" value={cty} onChange={(e) => setCty(e.target.value)} id="" placeholder="City Name..." />
                        <button className="btn-search" onClick={() => setCity(cty)}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBox
