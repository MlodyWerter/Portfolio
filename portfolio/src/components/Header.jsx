import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
    return (
        <header className="bg-dark text-white text-center py-5">
            <div className="container">
                <h1>Twoje Imię i Nazwisko</h1>
                <p className="lead">Junior Developer | Pasjonat Linuxa | Homelab Enthusiast</p>
            </div>
        </header>
    );
}

export default Header;
