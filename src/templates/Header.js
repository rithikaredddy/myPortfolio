import "../static/styles.min.css";
import "../static/styles.scss";
function Header(){
    return (
        <>
            <nav class="navbar is-max-desktop has-shadow" role="navigation" aria-label="main navigation">
                <div class="navbar-menu is-active">
                    <a class="navbar-item" href="/"><h1>Anumandla Rithika 👍</h1></a>
                    <div style={{display: "flex"}}>
                        <a class="navbar-item" href="/about">About</a>
                        <a class="navbar-item" href="/projects">Projects</a>
                        <a class="navbar-item" href="/certificates">Certificates</a>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;