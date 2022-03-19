import React, { FC } from "react";
import "./applicants.css";
const ApplicantsPage: FC = () => (
  <>
    <section className="top">
      <div className="table-head">
        <div className="application">
          <a>
            {" "}
            <p id="select">Selected Applications</p>
          </a>
        </div>

        <div className="confirmed">
          <a>
            {" "}
            <p id="firm">Confirmed</p>
          </a>
          <p className="number">25/100</p>
        </div>
      </div>
    </section>

    <section className="selected-applications">
      <section className="for-select">
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
          <button>Confirm</button>
        </div>
      </section>

      <div className="tips">
        <div className="up">
          <div className="action">
            <div>
              <label htmlFor="action">Bulk action</label>
              <select name="user" id="user">
                <option value="administrator">Terminate</option>
                <option value="data analyst">Start</option>
                <option value="acountant">Release</option>
                <option value="receptionist">Clear</option>
              </select>
            </div>
          </div>

          <div>
            <button>Confirm</button>
          </div>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="check"
                    name="check"
                    value=""
                  />
                  Emails
                </th>
                <th></th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="check"
                    name="check"
                    value=""
                  />
                  firstemail@gmail.com
                </td>
                <td></td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="check"
                    name="check"
                    value=""
                  />
                  anotheremail@gmail.com
                </td>
                <td>Emmanuel Darko</td>
                <td>Confirmed</td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="check"
                    name="check"
                    value=""
                  />
                  anotheremail@gmail.com
                </td>
                <td>Emmanuel Darko</td>
                <td>Confirmed</td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="check"
                    name="check"
                    value=""
                  />
                  anotheremail@gmail.com
                </td>
                <td>Emmanuel Darko</td>
                <td>Confirmed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="confirmed-application">
      <div className="tips">
        <div className="up">
          <div className="action">
            <div>
              <label htmlFor="action">Bulk action</label>
              <select name="user" id="user">
                <option value="administrator">Terminate</option>
                <option value="data analyst">Start</option>
                <option value="acountant">Release</option>
                <option value="receptionist">Clear</option>
              </select>
            </div>
          </div>

          <div>
            <button>Confirm</button>
          </div>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="check"
                    name="check"
                    value=""
                  />
                  Emails
                </th>
                <th></th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="check"
                    name="check"
                    value=""
                  />
                  firstemail@gmail.com
                </td>
                <td></td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="check"
                    name="check"
                    value=""
                  />
                  anotheremail@gmail.com
                </td>
                <td>Emmanuel Darko</td>
                <td>Confirmed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="icons">
          <img src="" alt="" width="10px" height="10px" />
          <img src="" alt="" width="10px" height="10px" />
          <img src="" alt="" width="10px" height="10px" />
          <img src="" alt="" width="10px" height="10px" />
        </div>
      </div>
    </section>
  </>
);

export default ApplicantsPage;
