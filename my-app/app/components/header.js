import Link from "next/link";

export default function Header () {
    return (
        <header style={navbar}>
            <span className="logo">LOGO</span>
            <nav>
                <Link className="link" href="/">Home</Link>
                <Link className="link"  href="/catalog">Catalog</Link>
                <Link className="link" href="/cart">Cart</Link>
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