import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Portfolio() {
    return (
        <section className="container my-5">
            <h2>Portfolio</h2>
            <div className="row">
                {/* Placeholder for Project 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img
                            src="/images/project1-placeholder.jpg"
                            className="card-img-top"
                            alt="Project 1"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">
                                Opis projektu, technologie: React, Bootstrap, etc.
                            </p>
                            <a
                                href="https://github.com/your-github/project1"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                            >
                                Zobacz na GitHubie
                            </a>
                        </div>
                    </div>
                </div>

                {/* Placeholder for Project 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img
                            src="/images/project2-placeholder.jpg"
                            className="card-img-top"
                            alt="Project 2"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Project 2</h5>
                            <p className="card-text">
                                Opis projektu, technologie: React, Bootstrap, etc.
                            </p>
                            <a
                                href="https://github.com/your-github/project2"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                            >
                                Zobacz na GitHubie
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;