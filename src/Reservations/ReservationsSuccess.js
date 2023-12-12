import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@material-ui/core";

const ReservationsSuccess = () => {

    const seq = sessionStorage.getItem("seq")
    const nickname = sessionStorage.getItem("nickname")
    const guest = sessionStorage.getItem("guest")
    const phone = sessionStorage.getItem("phone")
    const sum = sessionStorage.getItem("sum")
    const date = sessionStorage.getItem("date")
    const memo = sessionStorage.getItem("memo")
    const navigate = useNavigate();
    const Button = styled.button`
    background-color: orange;
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 140px;
    text-align: center;
    color: white;
    cursor:pointer;
    margin: auto;
    display: block;
    
    &: active {
        opacity: 0.3;
    }
    `;
    
    useEffect(()=> {
        if(sessionStorage.getItem("email") === null){
            alert("로그인 후 이용해주세요.")
            navigate("/Login");
           
        }else if(sessionStorage.getItem("date") === null){
            alert ("날짜 선택 후 이용해주세요.")
            navigate("/");
        }else if (sessionStorage.getItem("seq") === null){
            
            alert("예약 정보 입력 후 이용해주세요.")
            navigate("/");
        }

    })

    return(
        <div>
            <div className='header'>
            <h1><img className="logoimg" src="/images/Logo.png" onClick={()=>{navigate("/");}}/></h1>
            <h1>예약이 완료되었습니다.</h1>
            </div>
            <Table>
                <TableHead>
                    <TableRow bgcolor = "orange">
                        <TableCell>예약번호</TableCell>
                        <TableCell>예악자</TableCell>
                        <TableCell>인원수</TableCell>
                        <TableCell>연락처</TableCell>
                        <TableCell>가격</TableCell>
                        <TableCell>날짜</TableCell>
                        <TableCell>요청사항</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>{seq}</TableCell>
                    <TableCell>{nickname}</TableCell>
                    <TableCell>{guest}</TableCell>
                    <TableCell>{phone}</TableCell>
                    <TableCell>{sum}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>{memo}</TableCell>

                </TableBody>
               
            
           


            </Table>
            <h1><Button onClick={()=>{navigate("/")}}>메인으로</Button></h1>
        </div>





    )}


export default ReservationsSuccess;