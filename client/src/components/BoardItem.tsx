import React, {FC} from "react"
import styles from '../pages/BoardViewPage/BoardView.module.css'
import { useNavigate } from "react-router"
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useReactiveVar, useQuery } from "@apollo/client";
import {Board} from "../stores/board"


interface Props {
    boards: Board;
}

const BoardItem: FC<Props> = ({boards}) => {
    const navigate = useNavigate();
    console.log(boards)

    const onClickMove = () => {
        navigate('/write')
    }

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
                            <TableRow
                                key={boards.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{boards.id}</TableCell>
                                <TableCell align="center">{boards.title}</TableCell>
                                <TableCell align="center">{boards.name}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default BoardItem