import React from 'react';
import './User.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    // console.log(props.user)
    const { name, email, location, company, salary, imgUrl, add } = props.user
    const { street, city } = location
    return (
        <div className="row shadow my-4 rounded py-4">
            <div className="col-md-3 my-3 text-center text-md-right">
                <img className="round" src={imgUrl} />
            </div>
            <div className="col-md-9 text-left">
                <div className="row">
                    <div className="col-md-7 col-12 text-center text-md-left">
                        <h5> {name} </h5>
                        <h6> {email} </h6>
                        <br />
                        <p> {`${street}, ${city}`} </p>
                        Company: <p className="badge bg-danger text-white">{company} </p>
                    </div>
                    <div className="col-md-5 col-12 border-left pt-4 pr-4 text-center text-md-right">
                        <h5 className="lead">$ {salary} </h5>
                        <button
                            className={`${add ? "added" : ""} btn btn-info btn-sm`}
                            onClick={() => props.cartHandler(props.user)}>
                            <FontAwesomeIcon className="icon" icon={faCodeBranch} /> 
                            {add ? "Added" : "Add employee"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;