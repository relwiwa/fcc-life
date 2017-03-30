import React from 'react';

const LifeInstructionsNav = (props) => {
  const { activeInstruction, navItems, onChangeActiveInstruction } = props;

  const renderNavItems = () => {
    let navItemsRendered = [];
    navItems.map((navItem) => navItemsRendered.push(
      <li
        key={navItem}
        className="nav-item"
      >
        <a
          className={'nav-link ' + (activeInstruction === navItem ? ' active' : '')}
          href="#"
          onClick={(event) => onChangeActiveInstruction(event, navItem)}
          >{navItem[0].toUpperCase() + navItem.substr(1)}</a>
      </li>
    ));
    return navItemsRendered;
  }

  return (
    <div className="life-instructions-nav card-header">
      <ul className="nav nav-tabs card-header-tabs">
        {renderNavItems()}
      </ul>
    </div>
  );
}

export default LifeInstructionsNav;
