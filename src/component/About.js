import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function About(props) {
    
    const[myStyle, setmyStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        }
    )

    const[btnText, setbtnText] = useState("Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
                
            })
            setbtnText("Light Mode")
        }
        else{
            setmyStyle({
                color: 'black',
                backgroundColor: 'white',
                
            })
            setbtnText("Dark Mode")
        }
    }

    return (
        <>
        
            <h1 className='my-1'>About Us</h1>
        <Accordion defaultActiveKey="0" flush style={{color: `${props.mode === 'light' ? {backgroundColor:'dark'} : {backgroundColor:'light'}}` }}>
            <Accordion.Item eventKey="0" style={{color: `${props.mode === 'light' ? {backgroundColor:'dark'} : {backgroundColor:'light'}}` }}>
                <Accordion.Header style={{color: `${props.mode === 'light' ? {backgroundColor:'dark'} : {backgroundColor:'light'}}` }}>Accordion Item #1</Accordion.Header >
                <Accordion.Body style={{color: `${props.mode === 'light' ? {backgroundColor:'dark'} : {backgroundColor:'light'}}` }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={myStyle}>
                <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
                <Accordion.Body >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Button className="btn mx-4 my-3" onClick={toggleStyle} variant="dark" type='button'>{btnText}</Button>
        
        </>
    );
}

export default About;
