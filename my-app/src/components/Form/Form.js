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
            <form>
          <input onSubmit={handleOnSubmit} className="form">
            <ReactQuill
              className="form__input"
              placeholder="Search repository..."
              value={inputValue}
              onChange={setInputValue}
      
            />
            </input>
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