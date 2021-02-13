// import React, {useState} from 'react'
// import {Button} from 'react-bootstrap'
// import Select from 'react-select'
// import classes from './custom-select.module.scss'
//
// export default function CustomSelect() {
//     const [select, setSelect] = useState('')
//     const filter = [
//         {value: 'Популярные', label: 'Популярные', isFixed: false},
//         {value: 'Россия', label: 'Россия', isFixed: false},
//         {value: '500г', label: '500г', isFixed: false},
//         {value: 'Образ жизни Алтая', label: 'Образ жизни Алтая', isFixed: false},
//     ]
//     const getValue = (e) => {
//         setSelect(e.value)
//     };
//     const resetValue = () => {
//         setSelect('')
//     };
//
//
//     const selectItem = !select ?
//         <div className={`${classes.selectContainer}`}>
//             <Select
//                 options={filter}
//                 placeholder="Показывать с начало"
//                 onChange={getValue}
//                 classNamePrefix='custom-select'
//             />
//         </div>
//         : <div className={`d-flex align-items-center ${classes.value}`}>
//         <span>{select}</span>
//         <Button type='reset' variant="link"
//                 className={`p-0 ${classes.value__reset}`}
//                 onClick={resetValue}>
//             <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M7 1L1.0001 6.99986" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4"
//                       strokeLinecap="round"/>
//                 <path d="M7 7L1.0001 1.00014" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4"
//                       strokeLinecap="round"/>
//             </svg>
//         </Button>
//     </div>
//
//     return (
//         selectItem
//     )
// }


import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
import Select from 'react-select'
import classes from './custom-select.module.scss'
import CustomSelectData from './Custom-Select-Data'

class CustomSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "",
            setSelect: "",
        }
    }

<<<<<<< HEAD
export default function CustomSelect() {
  const [select, setSelect] = useState('')
  const filter = [
    {value: 'Популярные', label: 'Популярные', isFixed: false},
    {value: 'Россия', label: 'Россия', isFixed: false},
    {value: '500г', label: '500г', isFixed: false},
    {value: 'Образ жизни Алтая', label: 'Образ жизни Алтая', isFixed: false},
  ]
  const getValue = (e) => {
    setSelect(e.value)
  };
  const resetValue = () => {
    setSelect('')
  };


  const selectItem = !select ?
        <div className={`${classes.selectContainer}`}>
          <Select
            options={filter}
            placeholder="Показывать с начало"
            onChange={getValue}
            classNamePrefix='custom-select'
          />
        </div> :
        <div className={`d-flex align-items-center ${classes.value}`}>
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
        </div>

  return (
    selectItem
  )
}


// import React, {Component} from 'react'
// import {Button} from 'react-bootstrap'
// import Select from 'react-select'
// import classes from './custom-select.module.scss'
//
//
// class CustomSelect extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       select: '',
//       filter: [
//         {value: 'Популярные', label: 'Популярные', isFixed: false},
//         {value: 'Россия', label: 'Россия', isFixed: false},
//         {value: '500г', label: '500г', isFixed: false},
//         {value: 'Образ жизни Алтая', label: 'Образ жизни Алтая', isFixed: false},
//       ]
//     }
//   }
//
//   getValue = (e) => {
//     this.setState({select: e.target.value})
//   }
//   resetValue = () => {
//     this.setState({select: ''})
//   }
//
//   render() {
//     return (
//       <div>
//         { !this.state.select ?
//             <div className={`${classes.selectContainer}`}>
//               <Select
//                 options={this.state.filter}
//                 placeholder="Показывать с начало"
//                 onChange={this.getValue}
//                 classNamePrefix='custom-select'
//               />
//             </div> :
//             <div className={`d-flex align-items-center ${classes.value}`}>
//               <span>{this.state.select}</span>
//               <Button type='reset' variant="link" className={`p-0 ${classes.value__reset}`} onClick={this.resetValue}>
//                 <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M7 1L1.0001 6.99986" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round"/>
//                   <path d="M7 7L1.0001 1.00014" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round"/>
//                 </svg>
//               </Button>
//             </div> }
//       </div>
//     )
//   }
// }
//
// export default CustomSelect
=======
    getValue = (e) => {
        this.setState({
            setSelect: e.target.value
        })
    };

    resetValue = () => {
        this.setState({
            setSelect: ""
        })
    };


    render() {
        const select = this.state.select;
        const filter = CustomSelectData;
        return (
            <div>
                {!select ? <div className={`${classes.selectContainer}`}>
                        <Select
                            options={filter}
                            placeholder="Показывать с начало"
                            onChange={this.getValue}
                            classNamePrefix='custom-select'
                        />
                    </div>
                    : <div className={`d-flex align-items-center ${classes.value}`}>


                        <span>{select}</span>
                        <Button type='reset' variant="link"
                                className={`p-0 ${classes.value__reset}`}
                                onClick={this.resetValue}>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1.0001 6.99986" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4"
                                      strokeLinecap="round"/>
                                <path d="M7 7L1.0001 1.00014" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4"
                                      strokeLinecap="round"/>
                            </svg>
                        </Button>
                    </div>
                }
            </div>

        );
    }
}

export default CustomSelect;


// import React, {Component} from 'react';
//
// import CustomSelectData from './Custom-Select-Data'
// import classes from "./custom-select.module.scss";
// import Select from "react-select";
// import {Button} from "react-bootstrap";
// import {any} from "prop-types";
//
//
// class CustomSelect extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filter: CustomSelectData,
//             setSelect: '',
//             select: '',
//             name: ''
//         }
//     }
//
//     getValue = (event) => {
//         console.log("event", event)
//         this.setState({setSelect: event.target.value})
//     };
//
//
// //     getValue = (event) => {
// //         this.setState({setSelect: event.target.value})
// // }
//
//     resetValue = () => {
//         this.setState({
//         setSelect: ''
//         })
//
//     };
//
//
//     render() {
//         console.log("this.state.setSelect", this.state)
//         return (
//             <div>
//                 {!this.state.select ?
//                     // <div className={`${classes.selectContainer}`}>
//                     <div>
//                         <Select
//                             options={this.state.filter}
//                             placeholder="Показывать с начало"
//                             onChange={this.getValue}
//                             classNamePrefix='custom-select'
//                         />
//                     </div>
//                     : <div className={`d-flex align-items-center ${classes.value}`}>
//                         <span>{this.state.select}</span>
//                         <Button type='reset' variant="link"
//                                 className={`p-0 ${classes.value__reset}`}
//                                 onClick={this.resetValue}>
//                             <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 1L1.0001 6.99986" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4"
//                                       strokeLinecap="round"/>
//                                 <path d="M7 7L1.0001 1.00014" stroke="#222C54" strokeOpacity="0.5" strokeWidth="1.4"
//                                       strokeLinecap="round"/>
//                             </svg>
//                         </Button>
//                     </div>}
//
//             </div>
//         );
//     }
// }
//
// export default CustomSelect;
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
