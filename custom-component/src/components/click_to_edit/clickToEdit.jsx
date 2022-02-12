import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styles from './clickToEdit.module.css';

const ClickToEdit = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  const nameRef = useRef();
  const ageRef = useRef();

  const onClick = () => {
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
  };

  return (
    <>
      <div className={styles.container} onClick={onClick}>
        <header className={styles.title}>Click to Edit</header>
        <div className={styles.clickToEdit}>
          <form className={styles.form} action="">
            <div className={styles.name}>
              <label className={styles.label} htmlFor="">
                Name:
                <input ref={nameRef} className={styles.input} type="text" />
              </label>
            </div>
            <div className={styles.age}>
              <label className={styles.label} htmlFor="">
                Age:
                <input ref={ageRef} className={styles.input} type="text" />
              </label>
            </div>
            <p className={styles.sentence}>
              Hello, my name is {name}. I am {age} years old. I need a job.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ClickToEdit;
