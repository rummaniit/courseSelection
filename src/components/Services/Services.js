import React, { useEffect, useState } from 'react';
import ShowFromServicesCourse from '../ShowFromServicesCourse/ShowFromServicesCourse';

const Services = () => {
    let [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1>Services Page</h1>
            <div className='homecss'>
                {
                    courses.map(coursee => <ShowFromServicesCourse
                        key={coursee.id}
                        coursee={coursee}
                    ></ShowFromServicesCourse>)
                }
            </div>
        </div>
    );
};

export default Services;