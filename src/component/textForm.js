import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import '../component/textForm.css';

export default function TextForm(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to upper case", "success")
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to lower case", "success")
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.ShowAlert("cleared the text", "success")
    }


    const handleExtraSpaces = () => {
        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem) => {
            if (elem.trim() !== '') {
                joinedWords += elem.trim() + " ";
            }
        });
        setText(joinedWords.trim()); // Remove trailing space from the final string
        props.ShowAlert("Extra spaces have been formatted.", "success");
    };


    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.ShowAlert("text is copied to clipboard", "success")
    }


    const handleOnchange = (event) => {
        setText(event.target.value)
    }



    const [text, setText] = useState('');
    return (
        <div>
            <>
                <Form>
                    <h3 style={{ backgroundcolour: props.mode === 'dark' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h3>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Control
                            as="textarea"
                            
                            placeholder="Enter text here"
                            value={text}
                            onChange={handleOnchange}
                            style={{
                                color: props.mode === 'dark' ? 'white' : 'black',
                                backgroundColor: props.mode === 'dark' ? 'black' : 'white',
                                '::placeholder': { color: props.mode === 'dark' ? 'white' : 'black' }
                            }}
                            rows={10}
                            
                        />



                        <button className='btn my-3' type='button' onClick={handleUpclick}>upperCase</button>
                        <button className='btn my-3 mx-2' type='button' onClick={handleLoclick}>lowerCase</button>
                        <button className='btn my-3' type='button' onClick={handleExtraSpaces}>removeSpaces</button>
                        <button className='btn my-3 mx-2' type='button' onClick={handleClear}>ClearText</button>
                        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    </Form.Group>
                </Form>
                <div className="container" style={{ backgroundcolour: props.mode === 'dark' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h3>Your Summary</h3>
                    <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} word and {text.length} char</p>
                    <p>you need {0.008 * text.trim().split(' ').length} min to read this</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
                </div>
            </>




        </div>
    )
}
