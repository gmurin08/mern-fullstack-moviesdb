import React, {useState} from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Login(props){

    const [name, setName]= useState("")
    const [id, setId] = useState("")

    const onChangeName = e =>{
        const name = e.target.value;
        setName(name)
    }

    const onChangeId = e =>{
        const id = e.target.value;
        setId(id)
    }

    const login = () =>{
        props.login({name:name, id:id})
        props.history.push('/')
    }

    return(
        <div className="App">
            <Form style={{
                width:'50%',
                margin:'20px auto 10px auto',
                borderRadius:'5px',
                paddingBottom:'15px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                <Form.Group>
                    <Form.Label style={{marginTop:'10px'}}>Username</Form.Label>
                    <Form.Control
                        style={{width:'35%' , margin:'auto' , marginBottom:'15px'}}
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={onChangeName}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        style={{width:'25%', margin:'auto', marginBottom:'15px'}}
                        type="text"
                        placeholder="User ID"
                        value={id}
                        onChange={onChangeId}
                    />
                </Form.Group>
                <Button variant='primary' onClick={login}>Submit</Button>
            </Form>
        </div>
    )
}