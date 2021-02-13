import React, {useState} from 'react';
import {Button} from 'react-bootstrap'
import Select from 'react-select';
import classes from './custom-select.module.scss';

export default function CustomSelect() {
    const [select, setSelect] = useState('');
    const filter = [
        {value: 'Популярные', label: 'Популярные', isFixed: false},
        {value: 'Россия', label: 'Россия', isFixed: false},
        {value: '500г', label: '500г', isFixed: false},
        {value: 'Образ жизни Алтая', label: 'Образ жизни Алтая', isFixed: false},
    ];
    const getValue = (e) => {
        setSelect(e.value);
    };
    const resetValue = () => {
        setSelect('');
    };


    const seletItem = !select ?
        <div className={`${classes.selectContainer}`}>
            <Select
                options={filter}
                placeholder="Показывать с начало"
                onChange={getValue}
                classNamePrefix='custom-select'
            />
        </div>
        : <div className={`d-flex align-items-center ${classes.value}`}>
        <span>{select}</span>
        <Button type='reset' variant="link"
                className={`p-0 ${classes.value__reset}`}
                onClick={resetValue}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1.0001 6.99986" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4"
                      strokeLinecap="round"/>
                <path d="M7 7L1.0001 1.00014" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4"
                      strokeLinecap="round"/>
            </svg>
        </Button>
    </div>;

    return (
        seletItem
    )
}
