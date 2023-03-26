import React, {FC} from "react"
import styles from './BoardView.module.css'
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
import {Board} from "../../stores/board"

function createData (
    index: number,
    title: string,
    writer: string,
    ) {
    return { index, title, writer };
}

interface Props {
    boards: Board;
}

const rows = [
    createData(1, '반갑습니다.', '홍길동'),
    createData(2, '환영해요.', '홍길동'),
];

export const BoardViewPage: FC<Props> = ({boards}) => {
    const navigate = useNavigate();

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
                            {boards.map((row) => {
                                return (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center">{row.title}</TableCell>
                                        <TableCell align="center">{row.name}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            
        </div>
    )
}