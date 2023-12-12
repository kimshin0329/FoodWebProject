import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HorizonLine from "../HorizonLine";




const Signup = () => {
  
  
  const onSubmit = async (values) => {
    
    const { email, nickname, password } = values
    
    await axios.post("http://localhost:8000/api/signup",{
      email,
      nickname,
      password,
    })
    .then((res) => {
      alert("회원가입이 완료되었습니다.")
      navigate('/Login');
      
    })
    .catch((e)=> {
      alert("중복된 이메일 또는 닉네임이 존재합니다.")
      
    })
    
    

    
   
};

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      nickname: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
    
  });
  const navigate = useNavigate();
  
  

  return (
    <div className="header">
      <h1><img className="logoimg" src="/images/Logo.png" onClick={()=>{navigate("/");}}/></h1>
      <h2>회원가입 페이지입니다.</h2>
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
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="nickname">닉네임</label>
      <input
        id="nickname"
        type="nickname"
        placeholder="닉네임을 입력해주세요."
        value={values.nickname}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.nickname && touched.nickname ? "input-error" : ""}
      />
      {errors.nickname && touched.nickname && <p className="error">{errors.nickname}</p>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label htmlFor="confirmPassword">비밀번호 확인</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="비밀번호 확인"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        회원가입
      </button>
    </form>
    </div>
  );
      };
export default Signup;