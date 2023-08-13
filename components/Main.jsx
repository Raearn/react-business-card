import Buttons from "./Buttons"
export default function Main(props) {
    return (
        <main className="main-container wrapper">
            <section className="section-name">
                <h1>Raearn Malig</h1>
                <h2>Frontend Developer</h2>
                <p>raearn.website</p>
                <Buttons />
            </section>
            {props.children}
        </main>
    )
}