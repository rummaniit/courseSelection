import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ShowFromServicesCourse = (props) => {
    let { cname, price, duration, img } = props.coursee
    return (
        <div className='showfromhomecss'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <Card.Title>
                        <h1>Course Name: {cname}</h1>
                    </Card.Title>
                    <Card.Text>
                        <h3>Course Price: {price}</h3>
                    </Card.Text>
                    <Card.Text>
                        <h3>Course Duration: {duration}</h3>
                    </Card.Text>
                    <Button className='btn' >Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowFromServicesCourse;