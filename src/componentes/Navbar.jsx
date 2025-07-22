
const Navbar = () => {
    return (
        <nav className="nav navbar">
            <div className="container center">
                <ul className="hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#localizacao">Localização</a></li>
                    <li><a href="#infraestrutura">Infraestrutura</a></li>
                    <li><a href="#implantacao">Implantação</a></li>
                    <li><a href="#plantas">Plantas</a></li>
                </ul>
                <ul className="sidenav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#localizacao">Localização</a></li>
                    <li><a href="#infraestrutura">Infraestrutura</a></li>
                    <li><a href="#implantacao">Implantação</a></li>
                    <li><a href="#plantas">Plantas</a></li>
                    <li><a className="btn-custom" href="#lancamento">Cadastre-se</a></li>
                    <li>
                        <a href="#" id="fechar">Fechar&nbsp;&nbsp;<i className="fa-solid fa-circle-xmark"></i></a>
                    </li>
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i class="fa-solid fa-bars"></i></a>
            </div>
        </nav>
    )
}
export default Navbar;
