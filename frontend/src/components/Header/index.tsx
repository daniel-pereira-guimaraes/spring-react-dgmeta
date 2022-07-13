import logo from '../../assets/img/logo.svg';
import './styles.css';

export const Header = () => {
  return (
    <header>
      <div className="dgmeta-logo-container">
        <img src={logo} alt="dgMeta" />
        <h1>DGMeta</h1>
        <p>Desenvolvido por <a href="#">Daniel Guimarães</a>
        </p>
      </div>
    </header>
  );
};