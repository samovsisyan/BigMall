// import React, {useState} from 'react'
// import {Container, Tabs, Tab} from 'react-bootstrap'
// import  './home-tab.scss'
// import {CarouselContainer,Title} from '../index'
//
// const HomeTab = () => {
//     const [key, setKey] = useState('all');
//     return (
//         <Container fluid className="tab position-relative">
//         <Container>
//             <Title align="center" title="Выбирайте и заказывайте!"/>
//         </Container>
//         <Container className="tab__container">
//             <Tabs id="controlled-tab-example" className="border-0 d-flex justify-content-center align-items-center"
//                   activeKey={key} onSelect={k => setKey(k)}>
//                 <Tab eventKey="all" className="border-0" title="Все">
//                     <CarouselContainer/>
//                 </Tab>
//                 <Tab eventKey="" className="border-0" title="" disabled>
//                 </Tab>
//                 <Tab eventKey="shop" className="border-0" title="Магазины">
//                     <CarouselContainer/>
//                 </Tab>
//                 <Tab eventKey="" className="border-0" title="" disabled>
//                 </Tab>
//                 <Tab eventKey="institution" className="border-0" title="Заведения">
//                     <h2>text 3</h2>
//
//                 </Tab>
//                 <Tab eventKey="" className="border-0" title="" disabled>
//                 </Tab>
//
//                 <Tab eventKey="pharmacy" className="border-0" title="Аптеки">
//                     <h2>text</h2>
//                 </Tab>
//             </Tabs>
//         </Container>
//         </Container>
//     )
// }
//
// export default HomeTab


import React, {Component, useState} from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap'
import './home-tab.scss'
import {CarouselContainer, Title} from '../index'

<<<<<<< HEAD
const HomeTab = () => {
  const [key, setKey] = useState('all');
  return (
    <Container fluid className="tab position-relative">
      <Container>
        <Title align="center" title="Выбирайте и заказывайте!"/>
      </Container>
      <Container className="tab__container">
        <Tabs id="controlled-tab-example" className="border-0 d-flex justify-content-center align-items-center"
          activeKey={key} onSelect={k => setKey(k)}>
          <Tab eventKey="all" className="border-0" title="Все">
            <CarouselContainer/>
          </Tab>
          <Tab eventKey="" className="border-0" title="" disabled>
          </Tab>
          <Tab eventKey="shop" className="border-0" title="Магазины">
            <CarouselContainer/>
          </Tab>
          <Tab eventKey="" className="border-0" title="" disabled>
          </Tab>
          <Tab eventKey="institution" className="border-0" title="Заведения">
            <h2>text 3</h2>

          </Tab>
          <Tab eventKey="" className="border-0" title="" disabled>
          </Tab>

          <Tab eventKey="pharmacy" className="border-0" title="Аптеки">
            <h2>text</h2>
          </Tab>
        </Tabs>
      </Container>
    </Container>
  )
}

export default HomeTab

=======

class HomeTab extends Component {
        constructor(props) {
            super(props);
            this.state = {
                key: "all",
                setKey: "all",
            }
        }


    // const [key, setKey] = useState('all');

    render() {
        return (
            <div>
                <Container fluid className="tab position-relative">
                    <Container>
                        <Title align="center" title="Выбирайте и заказывайте!"/>
                    </Container>
                    <Container className="tab__container">
                        <Tabs id="controlled-tab-example" className="border-0 d-flex justify-content-center align-items-center"
                              >
                              {/*activeKey={key} onSelect={k => setKey(k)}>*/}
                            <Tab eventKey="all" className="border-0" title="Все">
                                <CarouselContainer/>
                            </Tab>
                            <Tab eventKey="" className="border-0" title="" disabled>
                            </Tab>
                            <Tab eventKey="shop" className="border-0" title="Магазины">
                                <CarouselContainer/>
                            </Tab>
                            <Tab eventKey="" className="border-0" title="" disabled>
                            </Tab>
                            <Tab eventKey="institution" className="border-0" title="Заведения">
                                <h2>text 3</h2>

                            </Tab>
                            <Tab eventKey="" className="border-0" title="" disabled>
                            </Tab>

                            <Tab eventKey="pharmacy" className="border-0" title="Аптеки">
                                <h2>text</h2>
                            </Tab>
                        </Tabs>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default HomeTab;
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
