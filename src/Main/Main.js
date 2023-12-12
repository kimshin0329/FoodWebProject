import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import '../page.css'
import '../Background.css';
import '../footer.css';
import '../Logo.css';
import HorizonLine from "../HorizonLine";
import Logout from "../Login/Logout";
import { useEffect } from "react";

export default function Main(){
    
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
    &: active {
        opacity: 0.3;
    }
    `;
    useEffect(()=> {
            sessionStorage.removeItem("seq")
            sessionStorage.removeItem("guest")
            sessionStorage.removeItem("date")
            sessionStorage.removeItem("memo")
            sessionStorage.removeItem("phone")  
            sessionStorage.removeItem("sum")  
    })
    
   

    function LoginButton() {
        if (sessionStorage.getItem("email") === null){
            
            return <Button onClick={()=>{navigate("/Login");}}>LOG IN</Button>;

    }else {
        
        return <Button onClick={()=>{Logout()}}>LOG OUT</Button>
    }
}
    
    
    return (
        <div className="Main">
            <header>
            <h1><img className="logoimg" src="/images/Logo.png" onClick={()=>{navigate("/");}}/>
            
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/");}}>MAIN</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Menu");}}>MENU</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Kitchen");}}>OUR KITCHEN</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Reservations");}}>RESERVATIONS</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Q&A");}}>Q&A</Button>
            { " \u00A0"}{ " \u00A0"}<LoginButton /></h1></header>
            <HorizonLine/>
            <h2><img className="backgroundimg" src="/images/배경.jpg"/></h2>
            
            <footer className="footer">만든 사람 : 안양대학교 융합소프트웨어 전공 2020E7410 </footer>
            
        
        </div>
    )
}