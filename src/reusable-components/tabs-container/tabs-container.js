import React from 'react';

import './tabs-container.scss';

const TabsContainer = (props) => {
  const { activeTab, onChangeActiveTab, onToggleTabsContainer, tabs } = props;

  return (
    <div className="tabs-container grid-x">
      <div className="cell">
        <ul className="menu horizontal">
          {tabs.map((tab, index) => (
            <li
              className={activeTab === index ? 'active' : null}
              key={tab}
            >
              <a onClick={() => onChangeActiveTab(index)}>{tab}</a>
            </li>
          ))}
        </ul>
        <div className="cell callout">
          {props.children.map((child, index) => {
            if (index === activeTab) {
              return child;
            }
            else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="close-instructions cell">
        <ul className="menu horizontal align-right">
          <li><a onClick={onToggleTabsContainer}>Close Instructions</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TabsContainer;
