import React, { FC } from "react";
import './candidate.css';
import Logo from '../../logo-coradine.png';


const CandidateConfirmationPage: FC = () => (<>

    <div className="container">
        <div className="head">
            <nav>
                <a><img src={Logo} alt="" width="150" height="32"/></a>
            </nav>
        </div>

        <div className="main">
            <h2>Candidate Interview Preparation</h2>

            <p>Kindly let your interviewer know your areas of expertise
               and skills so that you have an amazing session.</p>
        </div>

        <div className="form">
            <form action="" method="GET">
                <div className="name">
                <label htmlFor="email" style={{fontSize: "14px;"}}>Email</label>
                <br/>
                        <input id="email" name="email" placeholder="darkothomas80@gmail.com" type="text" required  pattern="[a-zA-Z0-9]+"/>
                    </div>
                <br/>
                <div className="code">
                <br/>
                        <input id="pw" name="pw" type="password" placeholder="xxxxxx" required  />
                <br/>
                <input id="sub" type="submit" value="Confirm"/>
            </div>

            <div>
                <p style={{fontSize: "14px;"}}>Kindly confirm the code sent to your email</p>
            </div>

              </form>
        </div>
    </div>

</>)



export default CandidateConfirmationPage