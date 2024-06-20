export default function Header () {
    return (
        <header style={navbar}>
            <span className="logo">LOGO</span>
            <nav>
                <a className="link" href="#">Home</a>
                <a className="link"  href="#">Catalog</a>
                <a className="link" href="#">Cart</a>
            </nav>
        </header>
    );
}

const navbar = {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 30px'
}