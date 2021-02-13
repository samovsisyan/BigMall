import React, {useState} from 'react';
import {Modal, Button,Form} from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import {ConfirmeCodeModal} from '../index'
import classes from './confirm-phone-modal.module.scss'

export default function ConfirmePhoneModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className={classes.confirmPhone}>
            <Modal.Header className="p-0 border-0" closeButton>
            </Modal.Header>
                <Modal.Title className={`text-center ${classes.confirmPhone__title}`}>Пожалуйста, укажите
                    ваш телефон</Modal.Title>
            <Modal.Body className="p-0">
                <Form>
                    <PhoneInput
                        placeholder="номер телефона"
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true,
                        }}
                        value=""
                        country={'am'}
                        enableAreaCodes={true}
                        onlyCountries={['am', 'ru']}
                        onChange={(e)=>{
                            console.log(e)
                        }}
                    />
                    <Button  onClick={handleClose} disabled={true} className={`shadow-none border-0 w-100 m-0 ${classes.confirmPhone__success}`}>
                        Отправить
                    </Button>
                    <p className={`border-0 mb-0 p-0 ${classes.confirmPhone__desc}`}>
                        Нажимая кнопку «Далее», вы принимаете условия
                         <a href="" className={classes.confirmPhone__desc__link}>Политикой конфиденциальности</a></p>
                </Form>
           </Modal.Body>
            {/*<ConfirmeCodeModal/>*/}
        </Modal>
    )
}
