import React, { FC } from "react";
import "./landing.css"
const LandingPage: FC = () => (
  <>
    <div className="sign">
      <div className="interview">
        <h1>Best Interview Platform</h1>
      </div>

      <div className="form">
        <h2>SignUp</h2>

        <form action="submission.html" method="POST">
          <div>
            <input
              id="firstname"
              placeholder="First Name"
              name="firstname"
              type="text"
              required
              minLength={3}
              maxLength={20}
              pattern="[a-zA-Z0-9]+"
            />
          </div>

          <div>
            <input
              id="lastname"
              placeholder="Last Name"
              name="lastname"
              type="text"
              required
              minLength={3}
              maxLength={20}
              pattern="[a-zA-Z0-9]+"
            />
          </div>

          <div className="role">
            <label htmlFor="user">User Role</label>
            <select name="user" id="user">
              <option value="administrator">Administrator</option>
              <option value="data analyst">Data Analyst</option>
              <option value="acountant">Accountant</option>
              <option value="receptionist">Receptionist</option>
            </select>
          </div>

          <div className="email">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="example@email.com"
              required
              minLength={10}
              maxLength={25}
              pattern="[a-zA-Z0-9]+"
            />
          </div>

          <div>
            <input
              id="pw"
              name="pw"
              type="password"
              placeholder="xxxxx"
              required
              minLength={8}
              maxLength={15}
            />
          </div>

          <div className="connect">
            <input id="in" type="submit" value="Connect" />
          </div>

          <div className="already">
            <p>Already have an account?</p>
            <a href="#">
              <p>click here to signin</p>
            </a>
          </div>
        </form>
      </div>
    </div>
  </>
);

export default LandingPage;
