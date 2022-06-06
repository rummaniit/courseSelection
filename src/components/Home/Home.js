import React, { useEffect, useState } from 'react';
// import { Button, Card } from 'react-bootstrap';
import ShowFromHomeCourse from '../ShowFromHomeCourse/ShowFromHomeCourse';
import './Home.css'

const Home = () => {
    let [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1>Home Page</h1>
            <div className='homecss'>
                {
                    courses.slice(0, 4).map(course => <ShowFromHomeCourse
                        key={course.id}
                        course={course}
                    ></ShowFromHomeCourse>)
                }
            </div>
        </div>
    );
};

export default Home;