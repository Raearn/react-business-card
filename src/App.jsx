import Header from '../components/Header'
import Main from '../components/Main'
import Info from '../components/Info'
import Footer from '../components/Footer'

export default function App() {
    return (
        <div className="container">
            <Header />
            <Main>
                <Info />
            </Main>
            <Footer />
        </div>
    )
}