import React, {useState} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addBoard } from "../../stores/board";
import { useNavigate } from "react-router-dom";

export default function BoardWritePage() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const navigate = useNavigate()

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addBoard(name, age, title, content)
        navigate('/')
    }

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(e.target.value))
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }


    return (
        <div className="fullDiv">
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField 
                        label="Name"
                        sx={{m: 1}}
                        value={name}
                        onChange={onChangeName}
                    />
                    <TextField
                        label="Age"
                        sx={{m: 1}}
                        value={age}
                        onChange={onChangeAge}
                    />
                    <TextField
                        label="Title"
                        fullWidth
                        sx={{m: 1}}
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <TextField
                        label="Content"
                        fullWidth
                        multiline
                        rows={10}
                        sx={{m: 1}}
                        value={content}
                        onChange={onChangeContent}
                    />
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button variant="outlined" sx={{m: 1}}>임시등록</Button>
                    <Button variant="contained" sx={{m: 1}} onClick={onSubmit}>등록하기</Button>
                </div>
            </Box>
        </div>
    )
}