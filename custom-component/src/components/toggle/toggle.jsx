import React from 'react';
import { useState } from 'react';
import styles from './toggle.module.css';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.title}>Toggle</header>
        <div className={styles.toggle}>
          <input
            className={styles.checkbox}
            id={`toggle`}
            type="checkbox"
            checked={isToggled}
            onChange={onToggle}
          />
          <label className={styles.label} htmlFor={`toggle`}>
            <span className={styles.button} />
          </label>
        </div>
        <p className={styles.description}>
          Toggle Switch {isToggled === false ? 'OFF' : 'ON'}
        </p>
      </div>
    </>
  );
};

export default Toggle;
