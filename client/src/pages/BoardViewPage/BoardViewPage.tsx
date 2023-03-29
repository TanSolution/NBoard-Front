import {FC, useState} from "react"
import styles from './BoardView.module.css'
import { useNavigate } from "react-router"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import { useQuery } from "@apollo/client";
import { GET_BOARDS } from "../../queries/board";


const BoardViewPage: FC = () => {
    const navigate = useNavigate();
    const {data} = useQuery(GET_BOARDS)

    const [open, setOpen] = useState(false)

    const [info, setInfo] = useState({name: '', age: 0, title: '', content: ''})
    
    const handleOpen = (boards: any) => {
        setOpen(true)
        setInfo(boards)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onClickMove = () => {
        navigate('/write')
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className='fullDiv'>
            <div className={styles.btnDiv}>
                <Button onClick={onClickMove} size="large" variant="contained">등록하기</Button>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" width={150}>순번</TableCell>
                                <TableCell align="center" width={500}>제목</TableCell>
                                <TableCell align="center" width={200}>글쓴이</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.getBoards?.map((boards: any) => {
                                return (
                                    <TableRow
                                        key={boards.id}
                                        onClick={() => handleOpen(boards)}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{boards.id}</TableCell>
                                        <TableCell align="center">{boards.title}</TableCell>
                                        <TableCell align="center">{boards.name}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <p>작성자: {info.name}</p>
                        <p>나이: {info.age}</p>
                        <p>제목: {info.title}</p>
                        <p>내용: {info.content}</p>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default BoardViewPage