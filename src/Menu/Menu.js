import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export default function Menu(){
    
    const navigate = useNavigate();
    useEffect(()=> {
       
})
    return(
        <div>
            <div className='header'>
            <h1><img className="logoimg" src="/images/Logo.png" onClick={()=>{navigate("/");}}/></h1>
            <h1>메뉴판입니다.</h1>
            {/* <HorizonLine/> */}
            </div>
            <Table>
                <TableHead>
                    <TableRow bgcolor = "orange">
                        <TableCell align='center' >제품번호</TableCell>
                        <TableCell align='center'>제품사진</TableCell>
                        <TableCell align='center'>제품 이름</TableCell>
                        <TableCell align='center'>가격</TableCell>
                        <TableCell align='center'>설명</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>1</TableCell>
                    <TableCell align='center'><img className="burgerimg"src="/images/jakyburger.jpg"></img></TableCell>
                    <TableCell align='center'>재키버거</TableCell>
                    <TableCell align='center'>5000원</TableCell>
                    <TableCell align='center'>재키의 대표 메뉴인 재키버거. 패티 두장과 베이컨, 재키버거의 특제 소스가 들어간 버거</TableCell>

                </TableBody>
                <TableBody>
                    <TableCell>2</TableCell>
                    <TableCell align='center'><img className="burgerimg"src="/images/spicyburger.jpg"></img></TableCell>
                    <TableCell align='center'>스파이시 버거</TableCell>
                    <TableCell align='center'>6000원</TableCell>
                    <TableCell align='center'>매콤한 소스가 듬뿍 들어간 특제버거</TableCell>
                    </TableBody>
                <TableBody>
                    <TableCell>3</TableCell>
                    <TableCell align='center'><img className="burgerimg"src="/images/치즈버거.jpg"></img></TableCell>
                    <TableCell align='center'>치즈 버거</TableCell>
                    <TableCell align='center'>6000원</TableCell>
                    <TableCell align='center'>꾸덕꾸덕 끝판왕 햄버거</TableCell>
                </TableBody>

            
           


            </Table>
        </div>





    )}
  
