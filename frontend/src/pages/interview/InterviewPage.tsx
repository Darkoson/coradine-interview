import React, { FC } from "react";
import "./interview.css"

const InterviewPage: FC = () => (
    <>
        <h1 id="live-interview">Live Interview</h1>
        <div className="interview-grid">
            <div className="candidate-info">
                <form>
                    <label htmlFor="candidate">Candidate</label>
                    <select id="candidate">
                        <option>Anne Marie</option>
                    </select>
                </form>
            </div>
    
            <div className="details">
                <h2>Candidate Details</h2>
                    <div className="profile">
                        <div className="profile-together">
                            <p id="profile-picture">photo</p>
                            <div>
                                <p id="profileName">Anne Marie</p>
                                <p id="email">annemarie@gmail.com</p>  
                            </div>
                        </div>
                        <img src="" alt="PDF"/>                    
                </div>            
                <p><b>Position Applied</b>: Senior Software Developer</p>
                <div className="top-skills">
                    <h2>
                        Top Skills
                    </h2>
                    <ul>
                        <li>Node JS: Intermediate</li>
                        <li>Angular: Advanced</li>
                        <li>JavaScript: Expert</li>                    
                    </ul>
                </div>
                <div className="top-projects">
                    <h2>
                        Top Projects
                    </h2>
                    <ul>
                        <li>School Management System</li>
                        <li>Quiz app</li>                                        
                    </ul>
                </div>
            </div>
            <div className="skills-assess">
                <h2>Skills Accessed</h2>
                <form>
                    <div id="oop">
                      <select>
                        <option>O.O.P</option>
                    </select>
                        <p>80</p>
                        <img src={''} alt="delete" />  
                    </div>
                    <div id="js">
                        <select>
                        <option>JavaScript</option>
                    </select>
                        <p>90</p>
                        <img src={''} alt="delete" />  
                    </div>                                     
                    <div id="mvc">
                       <select>
                        <option>MVC Architecture</option>
                    </select>
                        <p>70</p>
                        <img src={''} alt="delete" />
                    </div>
                    <div id="scrum">
                        <select>
                        <option>Scrum</option>
                    </select>
                        <p>50</p>
                        <img src={''} alt="delete" />   
                    </div>                            
                 </form>
                <p id="add-skill">Add skill</p> 
            </div>
            <div className="comments">
                <form>
                    <textarea placeholder="  Comments..."></textarea>
                </form>
                <div className="button-rejAcc">
                    <p id="reject">Reject</p>
                    <p id="accept">Accept</p>
                </div>
                
            </div>
            
            <div className="sample-question">
                <div className="desktop-question">
                    <div className="left-question">
                        <h2>Sample questions</h2>
                        <form>
                            <label htmlFor="skill-set">Skill Set:</label>
                            <select id="skill-set">
                                <option>Data Structures</option>
                                <option>O.O.P</option>
                                <option>Scrum</option>
                                <option>MVC Architecture</option>
                                <option>JavaScript</option>
                            </select>                
                        </form>
                        <div className="questions">
                            <ul>
                            <li style={{color:"rgb(29, 148, 228) "}}>1 - Can you explain the difference... </li>
                            <li>2 - Can you tell how linear data structures ... </li>
                            <li>3 - What is an array? </li>
                            <li>4 - What is a mujltidimensional array? </li>
                            <li>5 - What is a linked list? ... </li>
                            <li>6 - Are linked lists of linear or non ... </li>
                            <li>7 - What is a linked list? ... </li>
                            <li>8 - Are linked lists of linear or non ... </li>
                            </ul>
                    </div>             
                        
                    </div>
                    <div className="sub-questions">
                        <div id="hThree">
                             <h3>Can you explain the difference between file structure and storage structure?</h3>
                        </div>
                       
                        <div className="expectations">
                            <p>Expectations:</p>
                                <ul>
                                    <li>Explain file structure</li>
                                    <li>Explain storage structure</li>
                                    <li>Show the difference between the two</li>
                                </ul>
                                
                        </div>
                    </div>
                </div>
                    <div className="mobile-question">
                        <div className="left-question">
                            <h2>Sample questions</h2>
                            <form>
                                <label htmlFor="skill-set">Skill Set:</label>
                                <select id="skill-set">
                                    <option>Data Structures</option>
                                    <option>O.O.P</option>
                                    <option>Scrum</option>
                                    <option>MVC Architecture</option>
                                    <option>JavaScript</option>
                                </select>                
                            </form>
                            <div className="questions">
                                <ul>
                                    <li style={{color:"rgb(29, 148, 228) "}}>1 - Can you explain the difference... </li>
                                    <li>2 - Can you tell how linear data structures ... </li>
                                    <li>3 - What is an array? </li>                                
                                </ul>
                        </div>             
                            
                        </div>
                        <div className="sub-questions">
                            <div id="hThree">
                                 <h3>Can you explain the difference between file structure and storage structure?</h3>
                            </div>
                           
                            <div className="expectations">
                                <p>Expectations:</p>
                                    <ul>
                                        <li>Explain file structure</li>                                        
                                    </ul>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    </>
    )



export default InterviewPage