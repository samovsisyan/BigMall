<<<<<<< HEAD
// import React, {useState, useEffect} from 'react'
// import {Modal, Button} from 'react-bootstrap'
// import classes from './confirmation-modal.module.scss'
// import PropsTypes from 'prop-types'
//
// const ConfirmationModal = ({country, onChange}) => {
//   const [show, setShow] = useState(false);
//
//   const handleClose = () => setShow(false);
//   const handleOpen = () => setShow(true);
//
//   const handleAnswer = answer => {
//     return () => {
//       onChange(answer);
//       handleClose();
//     }
//   }
//
//   useEffect(() => {
//     if (!localStorage['firstEnter']) {
//       handleOpen()
//     }
//   }, []);
//
//   return (
//     <Modal show={show} onHide={handleClose} className={classes.confirmation}>
//       <Modal.Header className="p-0 border-0 justify-content-center">
//         <Modal.Title className={classes.confirmation__title}>Ваш город - {country}?</Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="p-0">
//         <Button onClick={handleAnswer(false)} className={`shadow-none border-0 ${classes.confirmation__success}`}>
//                     Да
//         </Button>
//         <Button onClick={handleAnswer(true) } className={`shadow-none border-0 ${classes.confirmation__ignore}`} >
//                     Нет
//         </Button></Modal.Body>
//       <Modal.Footer className={`border-0 p-0 text-center ${classes.confirmation__desc}`}>
//                 От города зависит актуальность ассортимента доставки
//       </Modal.Footer>
//     </Modal>
//   )
// }
//
// ConfirmationModal.propTypes = {
//   onChange: PropsTypes.func.isRequired,
//   country: PropsTypes.string.isRequired
// }
//
// export default ConfirmationModal;
//
//
import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap';
import classes from './confirmation-modal.module.scss'

class ConfirmationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose() {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const show = this.state.show
    return (
      <Modal show={show} onHide={this.handleClose} className={classes.confirmation}>
        <Modal.Header className="p-0 border-0 justify-content-center">
          <Modal.Title className={classes.confirmation__title}>Ваш город - Ереван?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Button onClick={this.handleClose} className={`shadow-none border-0 ${classes.confirmation__success}`}>
            Да
          </Button>
          <Button className={`shadow-none border-0 ${classes.confirmation__ignore}`} onClick={handleClose}>
            Нет
          </Button></Modal.Body>
        <Modal.Footer className={`border-0 p-0 text-center ${classes.confirmation__desc}`}>
          От города зависит актуальность ассортимента доставки
        </Modal.Footer>
      </Modal>
    )
  }
=======
import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap'
import classes from './confirmation-modal.module.scss'

class ConfirmationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            setShow: true
        }
    }


    handleClose = () => {
        this.setState({
            setShow: !this.state.setShow
        })
    }

    render() {
        const show = this.state.show;
        const setShow = this.state.setShow
        return (
            <div>
                <Modal show={show} onHide={this.handleClose} className={classes.confirmation}>
                    <Modal.Header className="p-0 border-0 justify-content-center">
                        <Modal.Title className={classes.confirmation__title}>Ваш город - Ереван?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-0">
                        <Button  onClick={this.handleClose} className={`shadow-none border-0 ${classes.confirmation__success}`}>
                            Да
                        </Button>
                        <Button className={`shadow-none border-0 ${classes.confirmation__ignore}`} onClick={this.handleClose}>
                            Нет
                        </Button></Modal.Body>
                    <Modal.Footer className={`border-0 p-0 text-center ${classes.confirmation__desc}`}>
                        От города зависит актуальность ассортимента доставки
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
}

export default ConfirmationModal