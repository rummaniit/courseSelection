import React from 'react';

const About = () => {
    let imageName = require('../../images/tvp-course.jpg')
    return (
        <div>
            <h1>About Us</h1>
            {/* <img src="../../../public/tvp-course.jpg" alt="" /> */}
            <img src={imageName} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur itaque quam pariatur sit porro hic, rem sed dolorem commodi iste ea, cumque natus odit modi atque! Voluptatem, modi officia.</p>
        </div>
    );
};

export default About;