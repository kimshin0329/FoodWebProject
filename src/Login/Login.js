import { useNavigate,Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import '../page.css'
import HorizonLine from "../HorizonLine";




const Login = () => {

    
    const onSubmit = async (values) => {      
       
        
        const { email, password } = values
        try {
            await axios.post("http://localhost:8000/api/login",{
            email,
            password,
          })
          .then((res) => {
             const obj = JSON.stringify(res.data[0].USER_NICKNAME)
              sessionStorage.setItem('email',values.email);
              sessionStorage.setItem('nickname',(obj));
              
                
                alert(`${obj}님 환영합니다!`);
                

              
             
              navigate("/");
            })
            
            } catch (err){
                
                    alert("아이디 또는 비밀번호가 맞지 않습니다.")
            }
        
        }
    const navigate = useNavigate(); 
    const {
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,

    } = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
       onSubmit,
    })
    
    return (
        <div className="header">
            <h1><img className="logoimg" src="/images/Logo.png" onClick={()=>{navigate("/");}}/></h1>
            <h2>로그인 페이지입니다.</h2>
            <HorizonLine/>
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