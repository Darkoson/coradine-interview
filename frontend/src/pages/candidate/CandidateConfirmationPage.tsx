import React, { FC } from "react";
import "./candidate.css";
import Logo from "../../assets/logo.png";
import { useQueryAllCandidate, useQuerySingleCandidate } from "../../graphql/hooks/user-request";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const CandidateConfirmationPage: FC = () => {
  const candidate = useQueryAllCandidate({ email: "email1@email.fr" });
  const candidates = useQuerySingleCandidate({ email: "email1@email.fr" });


  const singleCandidate = gql`
    query SingleCandidate($singleCandidateInput: CandidateInput!) {
      singleCandidate(input: $singleCandidateInput) {
        _id
        email
        firstName
      }
    }
  `;

  const dataRes  =  useQuery(singleCandidate, {
    variables: {  },
  }); 
  console.log('single = ', candidate.loading);
  console.log('all = ', candidates.loading);
  console.log("in compo = ", dataRes.loading);

  return (
    <>
      <div className="container">
        <div className="head">
          <nav>
            <Link to={"#"} className="Logo">
              <img src={Logo} alt="" width="50" />
            </Link>
          </nav>
        </div>

        <div className="main">
          <h2>Candidate Interview Preparation</h2>

          <p>
            Kindly let your interviewer know your areas of expertise and skills
            so that you have an amazing session.
          </p>
        </div>

        <div className="form">
          <form action="" method="GET">
            <div className="name">
              <label htmlFor="email" style={{ fontSize: "14px" }}>
                Email
              </label>
              <br />
              <input
                id="email"
                name="email"
                placeholder="darkothomas80@gmail.com"
                type="text"
                required
                pattern="[a-zA-Z0-9]+"
              />
            </div>
            <br />
            <div className="code">
              <br />
              <input
                id="pw"
                name="pw"
                type="password"
                placeholder="xxxxxx"
                required
              />
              <br />
              <input id="sub" type="submit" value="Confirm" />
            </div>

            <div>
              <p style={{ fontSize: "14px" }}>
                Kindly confirm the code sent to your email
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CandidateConfirmationPage;
