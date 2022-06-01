import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image1 from '../../images/choiceImage/adult-blur-blurred-background-687824.png';
import image2 from '../../images/choiceImage/architecture-building-city-2047397.png';
import image3 from '../../images/choiceImage/chef-cook-food-33614.png';
import './ChoiseUs.css'
const ChoiseUs = () => {
    return (
        <div >
            <div className='text-center'>
                <h1>why you choise us!!!</h1>

                <p className='w-50 d-inline-block' >Having a healthy diet has a lot of benefits. It can help you lose weight or maintain your desired weight. It also can lower your cholesterol and prevent certain health conditions. In general, a healthy diet keeps your body running on a daily basis. Learn how to make healthier food choices.</p>

            </div>
            <div className='d-flex justify-content-around mb-5'>
                <Card  style={{ width: '18rem' }}>
                    <img src={image1} alt="" />
                    <Card.Body>
                        <Card.Title>Fast delivery</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '18rem' }}>
                    <img src={image2} alt="" />
                    <Card.Body>
                        <Card.Title>Home delivery</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '18rem' }}>
                   <img src={image3} alt="" />
                    <Card.Body>
                        <Card.Title>Fast respone</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default ChoiseUs;