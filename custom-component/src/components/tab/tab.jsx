import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './tab.module.css';

const Tab = (props) => {
  const [tab, setTab] = useState('tab1');
  const [tabLength, setTabLength] = useState(['1', '2', '3']);

  useEffect(() => {}, [tab]);

  const onClick = (e) => {
    const selectedTab = e.target.innerText;
    const tabArr = e.target.parentNode.childNodes;

    tabLength.map((tab, index) => {
      selectedTab === `Tab${tabLength[index]}`
        ? (tabArr[index].style.backgroundColor = 'darkslategray')
        : (tabArr[index].style.backgroundColor = 'lightgrey');
    });

    tabLength.map((tab, index) => {
      selectedTab === `Tab${tabLength[index]}`
        ? (tabArr[index].style.color = 'white')
        : (tabArr[index].style.color = 'gray');
    });

    return selectedTab === 'Tab1'
      ? setTab('tab1')
      : selectedTab === 'Tab2'
      ? setTab('tab2')
      : selectedTab === 'Tab3'
      ? setTab('tab3')
      : '';
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.title}>Tab</header>
        <div className={styles.tab}>
          <ul className={styles.lists}>
            {tabLength.map((tab, index) => (
              <li key={index} className={styles.list} onClick={onClick}>
                Tab{tabLength[index]}
              </li>
            ))}
          </ul>
          {tab === 'tab1' ? (
            <div className={styles.menu}>Tab1 menu</div>
          ) : undefined}
          {tab === 'tab2' ? (
            <div className={styles.menu}>Tab2 menu</div>
          ) : undefined}
          {tab === 'tab3' ? (
            <div className={styles.menu}>Tab3 menu</div>
          ) : undefined}
        </div>
      </div>
    </>
  );
};

export default Tab;
