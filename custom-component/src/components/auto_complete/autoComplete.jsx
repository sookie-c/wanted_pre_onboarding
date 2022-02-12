import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styles from './autoComplete.module.css';

const AutoComplete = (props) => {
  const data = [
    'apple',
    'asparagus',
    'banana',
    'beetroot',
    'broccoli',
    'chobani',
    'carrot',
    'corn',
    'dart',
    'eggplant',
    'fixer',
    'god',
    'hot',
    'hexagon',
    'ice',
    'illustrator',
    'jargon',
    'koreanjjang',
    'lettuce',
    'mushroom',
    'nsync',
    'onion',
    'pea',
    'potato',
    'pumpkin',
    'queen',
    'qualified',
    'radish',
    'spinach',
    'tomato',
    'turnip',
    'ulmost',
    'ultrasound',
    'victory',
    'wonder',
    'world wide web',
    'xman',
    'yolanda',
    'yoda',
    'zero',
  ];

  const [auto, setAuto] = useState({ suggestions: [], text: '' });

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = data.sort().filter((v) => regex.test(v));
    }
    setAuto(() => ({ suggestions, text: value }));
  };

  const suggestionSelected = (value) => {
    setAuto(() => ({
      text: value,
      suggestions: [],
    }));
  };

  const [closeBtn, setCloseBtn] = useState(false);

  const renderSuggestions = () => {
    const { suggestions } = auto;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div className={styles.searchList} onClick={onClick}>
        {closeBtn === true ? undefined : (
          <ul className={styles.lists}>
            {suggestions.map((item) => (
              <li
                className={styles.list}
                key={item}
                onClick={() => suggestionSelected(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const [selected, setSelected] = useState('');
  const inputRef = useRef();

  const onClick = (e) => {
    const selectedItem = e.target.innerText;
    inputRef.current.value = selectedItem;
    setSelected(selectedItem);

    console.log(e);
  };

  const handleClose = (e) => {
    if (!closeBtn) {
      inputRef.current.value = '';
      setCloseBtn(!closeBtn);
    }
    setTimeout(() => {
      setCloseBtn(closeBtn);
    }, 500);
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.title}>Auto Complete</header>
        <div className={styles.autoComplete}>
          <div className={styles.inner}>
            <input
              ref={inputRef}
              className={styles.input}
              onChange={onTextChanged}
              type="text"
            />
            <div>{renderSuggestions()}</div>
            <button className={styles.closeBtn} onClick={handleClose}>
              x
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
