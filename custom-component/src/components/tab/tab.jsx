import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './tab.module.css';

const Tab = (props) => {
  const [tab, setTab] = useState('tab1');

  useEffect(() => {}, [tab]);

  const onClick = (e) => {
    const selectedTab = e.target.innerText;
    const tabArr = e.target.parentNode.childNodes;

    if (selectedTab === 'Tab1') {
      tabArr[0].style.backgroundColor = 'darkslategray';
      tabArr[0].style.color = 'white';
    } else {
      tabArr[0].style.backgroundColor = 'lightgrey';
      tabArr[0].style.color = 'gray';
    }

    if (selectedTab === 'Tab2') {
      tabArr[1].style.backgroundColor = 'darkslategray';
      tabArr[1].style.color = 'white';
    } else {
      tabArr[1].style.backgroundColor = 'lightgrey';
      tabArr[1].style.color = 'gray';
    }

    if (selectedTab === 'Tab3') {
      tabArr[2].style.backgroundColor = 'darkslategray';
      tabArr[2].style.color = 'white';
    } else {
      tabArr[2].style.backgroundColor = 'lightgrey';
      tabArr[2].style.color = 'gray';
    }

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
            <li className={styles.list} onClick={onClick}>
              Tab1
            </li>
            <li className={styles.list} onClick={onClick}>
              Tab2
            </li>
            <li className={styles.list} onClick={onClick}>
              Tab3
            </li>
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
