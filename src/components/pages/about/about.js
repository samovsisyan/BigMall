import React from 'react';
import {Container,Row} from 'react-bootstrap';
import AboutAside from '../../about-aside/about-aside';
import AboutMain from '../../about-main/about-main';
import classes from './about.module.scss';

export default function About() {
    return (
        <Container fluid  className={`${classes.about}`}>
            <Container>
                <Row>
                    <aside className={`${classes.aboutSidebar}`}>
                        <AboutAside/>
                    </aside>
                    <AboutMain/>
                </Row>
            </Container>
        </Container>
    )
}