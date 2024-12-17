import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
    return (
        <section className="container my-5">
            <h2>Kontakt</h2>
            <p>Masz pytania lub chcesz nawiązać współpracę? Napisz do mnie!</p>
            <ul>
                <li>Email: <a href="mailto:twojemail@example.com">twojemail@example.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">Twój profil</a></li>
                <li>GitHub: <a href="https://github.com" target="_blank" rel="noreferrer">Twój GitHub</a></li>
            </ul>
        </section>
    );
}

export default Contact;
