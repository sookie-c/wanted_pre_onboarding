import React from 'react';
import { useState } from 'react';
import styles from './tag.module.css';

const Tag = (props) => {
  const [tagData, setTagData] = useState(['CodeStates', 'I', 'did', 'it']);

  const removeTagData = (indexToRemove) => {
    setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
  };

  const addTagData = (event) => {
    if (event.target.value !== '') {
      setTagData([...tagData, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.title}>Tag</header>
        <div className={styles.box}>
          <ul className={styles.tags}>
            {tagData.map((tag, index) => (
              <li key={index} className={styles.tag}>
                <span>{tag}</span>
                <span className={styles.x} onClick={() => removeTagData(index)}>
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            className={styles.input}
            type="text"
            onKeyUp={(event) =>
              event.key === 'Enter' ? addTagData(event) : null
            }
            placeholder="Press enter to add a tag"
          />
        </div>
      </div>
    </>
  );
};

export default Tag;
