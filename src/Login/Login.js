import { useNavigate,Link } from "react-router-dom"
import Logo from '../images/Logo.png';
import '../Logo.css';
import { useFormik } from "formik";
import "./Login.css";



const Login = () => {


    const navigate = useNavigate(); 
    const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,

    } = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
       
    })
    return (
        <div className="header">
            <h1><img className="logoimg" src={Logo} onClick={()=>{navigate("/");}}/></h1>
            <h2>로그인 페이지입니다.</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email">이메일</label>
            <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            onBlur={handleBlur}
        />
        <label htmlFor="password">비밀번호</label>
        <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}/>
        <button disabled={isSubmitting} type="submit">
        로그인
        </button>
        </form>
        
         <Link to="/Signup" style={{ textDecoration:"none" }} color="red">
                <div className="Linkcolor">아직 회원이 아니신가요?</div></Link>
                
            
        
        </div>
        
        
    )
}

export default Login;