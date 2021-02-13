import React, {Component} from 'react';
import {Modal} from 'react-bootstrap'
import classes from './main-menu-modal.module.scss'
import MainMenuTab from './main-menu-tab/main-menu-tab'

class MainMenuModal extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      setShow: true
    }
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.setState({
      setShow: !this.state.setShow
    })
  }


  render() {
    const show = this.state.show;
    const setShow = this.state.setShow
    return (
      <div>
        {setShow == true ?
          <Modal show={show} onHide={this.handleClose} className={`container mx-auto p-0 ${classes.mainMenu}`}>
            <Modal.Header className="p-0 border-0 justify-content-center" closeButton>
            </Modal.Header>
            <Modal.Body className="p-0">
              <MainMenuTab/>
            </Modal.Body>
          </Modal>:<div></div>}
      </div>
    );
  }
}

export default MainMenuModal;
=======
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
                {setShow == true ?
                <Modal show={show} onHide={this.handleClose} className={`container mx-auto p-0 ${classes.mainMenu}`}>
                    <Modal.Header className="p-0 border-0 justify-content-center" closeButton>
                    </Modal.Header>
                    <Modal.Body className="p-0">
                        <MainMenuTab/>
                    </Modal.Body>
                </Modal>
                 : <div></div>}
            </div>
        );
    }
}

export default MainMenuModal;
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
