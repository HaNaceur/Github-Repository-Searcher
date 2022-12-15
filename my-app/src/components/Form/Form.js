import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import './styles.scss';


    function Form({ onSubmitForm }) {
        const [inputValue, setInputValue] = useState('');
        const inputRef = useRef();
      
        useEffect(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, []);
      
        const handleOnSubmit = (event) => {
          event.preventDefault();
          onSubmitForm(inputValue);
      
          setInputValue('');
        };
      
      
        return (
          <form onSubmit={handleOnSubmit} className="form">
            <ReactQuill
              className="form__input"
              theme="bubble"
              value={inputValue}
              onChange={setInputValue}
      
            />
            <button
              type="submit"
            >
              Ajouter
            </button>
          </form>
        );
      }
      
      Form.propTypes = {
        onSubmitForm: PropTypes.func.isRequired,
      };
      
      export default Form;