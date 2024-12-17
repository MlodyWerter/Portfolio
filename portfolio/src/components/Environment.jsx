import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Environment() {
    return (
        <section className="container my-5">
            <h2>Moje Środowisko Pracy</h2>
            <ul>
                <li>
                    <strong>ThinkPad 1:</strong> Specyfikacja (RAM, CPU, OS - Linux)
                </li>
                <li>
                    <strong>ThinkPad 2:</strong> Specyfikacja (RAM, CPU, OS - Linux)
                </li>
                <li>
                    <strong>Stacja Robocza:</strong> Szczegóły specyfikacji sprzętowej.
                </li>
            </ul>
            <p>
                Dodatkowo posiadam **homelab**, gdzie testuję różne technologie i rozwijam swoje
                umiejętności z zakresu administracji i automatyzacji.
            </p>
        </section>
    );
}

export default Environment;
