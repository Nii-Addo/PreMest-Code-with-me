import React, { useState } from "react";
import Form from "react-bootstrap/Form"; 
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button"
import { postArray } from "./PostArray"; //Import postArray from PostArray.js
import moment from "moment"

const Newpostform = () =>{

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleContentChange = e => {
        setContent(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault(); 

        //counting the number of item in the post array
        const numberOfPost = postArray.length; 

        const freshPost = {
            id: numberOfPost + 1,
            title: title,
            author: "Arnold {Nitro}",
            content: content,
            date:moment().format('MMMM Do YYYY, h:mm:ss a') ,
            upvote: 0,
            downvote: 0,
        }

        postArray.push(freshPost)


    }

    return (
            <Form onSubmit={handleSubmit} >

                <FormGroup>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="type your title" onChange={handleTitleChange} required />
                </FormGroup>  


                <FormGroup>
                    <label htmlFor="Content">Content</label>
                    <textarea name="content" placeholder="Type your post here" onChange={handleContentChange} required/>
                </FormGroup>  


                <FormGroup>
                    <Button as='input' type="submit" value="Create New Post" variant="primary"/>
                </FormGroup>  

            </Form>
        )
    }
export default Newpostform;