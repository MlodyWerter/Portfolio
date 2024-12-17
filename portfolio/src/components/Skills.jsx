import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Skills() {
    return (
        <section className="container my-5">
            <h2>Umiejętności</h2>
            <div className="row">
                <div className="col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Bootstrap</li>
                        <li className="list-group-item">JavaScript (ES6+)</li>
                        <li className="list-group-item">HTML5 &amp; CSS3</li>
                        <li className="list-group-item">Linux Administration</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item">Docker</li>
                        <li className="list-group-item">Git &amp; GitHub</li>
                        <li className="list-group-item">Node.js (Podstawy)</li>
                        <li className="list-group-item">Responsywne projektowanie</li>
                        <li className="list-group-item">Homelab &amp; Networking</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;