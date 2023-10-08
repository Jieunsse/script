import React from 'react';
import jsonData from '../../DB/data.json';
import { Wrapper, Table, Td, Th, Tbody, Thead, Tr } from './style.js';



export default function Room() {

    return (
        <Wrapper>
            <RoomTable/>
        </Wrapper>
    );
}




const RoomTable = () => {

    const tableRows = jsonData.map((item) => (
        <tr key={item.room}>
            <Td>{item.room}</Td>
            <Td>{item.name}</Td>
            <Td>{item.person}</Td>
            <Td>{item.price}</Td>
        </tr>
    ));

    return (
        <div>
            <h1>Room List</h1>
            <Table>
                <Thead>
                    <Tr>
                        <Th>번호</Th>
                        <Th>이름</Th>
                        <Th>인원</Th>
                        <Th>가격</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableRows}
                </Tbody>
            </Table>
        </div>
    );
}

