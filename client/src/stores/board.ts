import { makeVar } from "@apollo/client";

export interface Board {
    id: number;
    name: string;
    age: number;
    title: string;
    content: string;
}

const boardCounterVar = makeVar(0)
const boardVar = makeVar<Board[]>([])

export const addBoard = (name: string, age: number, title: string, content: string) => {
    const prevId = boardCounterVar()
    const currentBoard = boardVar()
    const newBoard = {id: prevId+1, name, age, title, content}
    boardVar([...currentBoard, newBoard])
    boardCounterVar(prevId + 1)
}

export default boardVar;