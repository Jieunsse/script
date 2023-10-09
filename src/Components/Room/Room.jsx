import React, { useState } from 'react';
import { Wrapper, Table, Td, Th, Tbody, Thead, Tr } from './style.js';
import RoomData from '../../DB/RoomData';


export default function Room() {

    const [ book, setBook ] = useState({
        name: '',
        roomNumber: '',
        persons: '',
        time: ''
    });

    const [ bookState, setBookState ] = useState([]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        });
    };

    const wholePrice = (hours, pricePerHour) => {
        // 입력된 시간을 3시간 단위로 올림처리하여 계산

        const totalHours = Math.ceil(parseFloat(hours) / 3);
        return totalHours * pricePerHour;
    };


    const handleBook = () => {
        if(book.name && book.roomNumber && book.persons && book.time) {
            const selectedRoom = RoomData.find(room => room.id === parseInt(book.roomNumber));
            if(selectedRoom) {
                const totalPrice = wholePrice(book.time, selectedRoom.price);
                const newBook = {
                    name: book.name,
                    roomNumber: selectedRoom.id,
                    roomName: selectedRoom.name,
                    persons: parseInt(book.persons),
                    time: book.time,
                    totalPrice: totalPrice
                };
                setBookState([...bookState, newBook]);
                setBook({
                    name: '',
                    roomNumber: '',
                    persons: '',
                    time: '',
                });
            } else {
                alert('잘못된 회의실 번호입니다.');
            }
        } else {
            alert('미입력된 부분을 전부 입력해주세요');
        }
    };


    return (
        <Wrapper>
            <h1> 예약 가능한 룸 </h1>
            <Table>
                <Thead>
                    <Tr>
                        <Th>방 번호</Th>
                        <Th>방 이름</Th>
                        <Th>인원</Th>
                        <Th>가격(3시간)</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {RoomData.map(room => (
                        <Tr key={room.id}>
                            <Td>{room.id}</Td>
                            <Td>{room.name}</Td>
                            <Td>{room.capacity}</Td>
                            <Td>{room.price}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <h2>Meeting Room Reservation</h2>
            <div>
                <label>
                예약자: 
                <input type="text" name="name" value={book.name} onChange={handleInput} />
                </label>
                <br />
                <label>
                룸번호: 
                <input type="text" name="roomNumber" value={book.roomNumber} onChange={handleInput} />
                </label>
                <br />
                <label>
                인원: 
                <input type="number" name="persons" value={book.persons} onChange={handleInput} />
                </label>
                <br />
                <label>
                이용시간: 
                <input type="text" name="time" value={book.time} onChange={handleInput} />
                </label>
                <br />
                <button onClick={handleBook}>예약하기</button>
            </div>

            <h2>Meeting Room Reservation Status</h2>
            <Table>
                <Thead>
                <Tr>
                    <Th>예약자</Th>
                    <Th>룸번호</Th>
                    <Th>룸이름</Th>
                    <Th>인원</Th>
                    <Th>이용시간</Th>
                    <Th>총 가격</Th>
                </Tr>
                </Thead>
                <Tbody>
                {bookState.map((res, index) => (
                    <Tr key={index}>
                    <Td>{res.name}</Td>
                    <Td>{res.roomNumber}</Td>
                    <Td>{res.roomName}</Td>
                    <Td>{res.persons}</Td>
                    <Td>{res.time}</Td>
                    <Td>{res.totalPrice}</Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </Wrapper>     
    );
}










