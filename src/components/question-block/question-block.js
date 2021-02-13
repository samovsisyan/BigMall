import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import classes from './question-block.module.scss';
import QuestionItem from './question-item';
import {Title} from '../index';
export default function QuestionBlock() {
    return (
        <Container fluid className={`position-relative  ${classes.questions}`}>
            <Container className="text-center">
                <Title align="center" title="Частые вопросы"/>
                <Row className={`justify-content-between ${classes.questions__block}`}>
                    <Col md={6} className="p-0">
                        <QuestionItem title='Как заказать доставку товаров?'/>
                    </Col>
                    <Col md={6} className="p-0">
                        <QuestionItem title='Какое у вас время доставки?'/>
                    </Col>
                    <Col md={6} className="p-0">
                        <QuestionItem title='Какая у вас минимальная сумма заказа?'/>
                    </Col>
                    <Col md={6} className="p-0">
                        <QuestionItem title='Есть ли ограничения по весу или сумме?'/>
                    </Col>
                </Row>
                <Button variant="link" className={`p-0 ${classes.more}`}>Читать другие вопросы</Button>
            </Container>
        </Container>
    )
}