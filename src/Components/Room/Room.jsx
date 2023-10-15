import React, { useState } from 'react';
import { Wrapper, Table, Td, Th, Tbody, Thead, Tr, H1, H2, Label, Input, Button } from './style.js';
import RoomData from '../../DB/RoomData';


export default function Room() {
    const [book, setBook] = useState({
        name: '',
        roomNumber: '',
        persons: '',
        time: '',
    });

    const [bookState, setBookState] = useState([]);
    const [availableRooms, setAvailableRooms] = useState(RoomData);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const wholePrice = (hours, pricePerHour) => {
        const totalHours = Math.ceil(parseFloat(hours) / 3);
        return totalHours * pricePerHour;
    };

    const handleBook = () => {
        if (!book.name || !book.roomNumber || !book.persons || !book.time) {
            alert('미입력된 부분을 전부 입력해주세요');
            return;
        }

        const selectedRoom = availableRooms.find((room) => room.id === parseInt(book.roomNumber));
        if (selectedRoom && !selectedRoom.isBooked) {
            const totalPrice = wholePrice(book.time, selectedRoom.price);
            const newBook = {
                name: book.name,
                roomNumber: selectedRoom.id,
                roomName: selectedRoom.name,
                persons: parseInt(book.persons),
                time: book.time,
                totalPrice: totalPrice,
            };

            setBookState([...bookState, newBook]);
            setAvailableRooms((prevRooms) => prevRooms.filter((room) => room.id !== selectedRoom.id));
            setBook({
                name: '',
                roomNumber: '',
                persons: '',
                time: '',
            });
        } else {
            if (!selectedRoom) {
                alert('잘못된 회의실 번호입니다.');
            } else {
                alert('이미 예약된 방입니다.');
            }
        }
    };

    return (
        <Wrapper>
            <H1> 예약 가능한 룸 </H1>
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
                    {availableRooms.map((room) => (
                        <Tr key={room.id}>
                            <Td>{room.id}</Td>
                            <Td>{room.name}</Td>
                            <Td>{room.capacity}</Td>
                            <Td>{room.price}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <H2>Meeting Room Reservation</H2>
            <div>
                <Label>
                예약자: 
                <Input type="text" name="name" value={book.name} onChange={handleInput} />
                </Label>
                <br />
                <Label>
                룸번호: 
                <Input type="text" name="roomNumber" value={book.roomNumber} onChange={handleInput} />
                </Label>
                <br />
                <Label>
                인원: 
                <Input type="text" name="persons" value={book.persons} onChange={handleInput} />
                </Label>
                <br />
                <Label>
                이용시간: 
                <Input type="text" name="time" value={book.time} onChange={handleInput} />
                </Label>
                <br />
                <Button onClick={handleBook}>예약하기</Button>
            </div>

            <H2>Meeting Room Reservation Status</H2>
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