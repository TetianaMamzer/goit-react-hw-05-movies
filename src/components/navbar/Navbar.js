import { NavLink } from 'react-router-dom';

import css from './Navbar.module.css';

import items from './items';
 
const Navbar = () => {
 const navigation = items.map(({id, text, link}) => 
 <li key={id}><NavLink to={link} className={css.link}>{text}</NavLink></li>
 )

 return (
  <ul className={css.menu}>
    {navigation}
  </ul>
 )
}

export default Navbar;