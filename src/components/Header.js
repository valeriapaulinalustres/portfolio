import { TiThMenu } from 'react-icons/ti';
import './header.css'


function Header(props) {

  const { menu, setMenu } = props;

  return (
    <div className="header">
      <button
        className="menu-button"
        onClick={() => setMenu(!menu)}>
        <TiThMenu className='menu-icon' />
      </button>
    </div>
  )
}

export default Header