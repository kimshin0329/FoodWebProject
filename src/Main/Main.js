import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import Logo from '../images/Logo.png';
import '../Logo.css';
import background from '../images/배경.jpg'
import '../Background.css';
import '../footer.css';

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

    
    
    
    return (
        <div className="Main">
            <header>
            <h1><img className="logoimg" src={Logo} onClick={()=>{navigate("/");}}/>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/");}}>MAIN</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Menu");}}>MENU</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Kitchen");}}>OUR KITCHEN</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Reservations");}}>RESERVATIONS</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Q&A");}}>Q&A</Button>
            { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Login");}}>LOG IN</Button></h1></header>
            
            <h2><img className="backgroundimg" src={background}/></h2>
            
            <footer className="footer">만든 사람 : 안양대학교 융합소프트웨어 전공 2020E7410 </footer>
            
        
        </div>
    )
}