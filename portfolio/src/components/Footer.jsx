import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Twoje Imię i Nazwisko. Wszystkie prawa zastrzeżone.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
