import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header(){
    return(
      <header id="masthead" class="p-3 mb-2 bg-light">

      <div class="container">
        {/* <!--Navigation--> */}
  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* <!-- <li class="nav-item">
                <a class="nav-link" href="index.html">STEVEN DYTEWSKI <span class="sr-only">(current)</span></a>
              </li> --> */}
              <li class="nav-item">
                <a class="nav-link" href="index.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">PORTFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACT</a>
  
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/steven-dytewski/" target="_blank">LINKEDIN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/SDytewski?tab=repositories" target="_blank">GITHUB</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  href="https://drive.google.com/file/d/1mcWH1cB91Ff0J_AenFrJgAwIQJe1gay3/view?usp=sharing"
                  target="_blank">RESUMÉ</a>
              </li>
  
            </ul>
          </div>
        </nav>
      </div>        
    </header>
    )
}

export default Header;