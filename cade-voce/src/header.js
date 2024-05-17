import './header.css';

function Header() {
    return (
        <header className="Header">
            <img src="#" alt="Logo"></img>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Como usar?</a></li>
                    <li><a href="#">Pets encontrados</a></li>
                    <a href="#" className="Button">
                        <button>Cadastrar um pet &gt;</button>
                    </a>
                </ul>
            </nav>
        </header>
    )
}

export default Header