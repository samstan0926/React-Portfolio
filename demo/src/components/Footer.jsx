import '../style.css';
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>

                <a  href='https://github.com/samstan0926'><img className="links" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png'></img>      </a>
                <a href=''><img className='links' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"/></a>
            </footer>
        );
    }
}
export default Footer;