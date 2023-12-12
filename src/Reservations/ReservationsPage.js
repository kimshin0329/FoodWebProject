import { ReservationsSchema } from "../schemas";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";


const ReservationsPage = () => {
  
  useEffect(()=> {
    if(sessionStorage.getItem("email") === null){
      alert ("로그인 후 이용해주세요.")
      navigate("/Login");
    
        
       
    }else if (sessionStorage.getItem("date") === null){
        
      alert("날짜 선택 후 이용해주세요.")
      navigate("/");
    }
    
})
    const date = JSON.stringify(sessionStorage.getItem("date"))
    const onSubmit = async (values) => {
        const { guest, phone, memo } = values
        const email = sessionStorage.getItem("email")
        const nickname = sessionStorage.getItem("nickname")
        const sum = values.guest * 1000;
        
        
        await axios.post("http://localhost:8000/api/reservations",{
            guest,
            phone,
            memo,
            email,
            nickname,
            date,
                
            })
            .then((res) => {
                const seq =  JSON.stringify(res.data[0].seq)
                sessionStorage.setItem("seq",seq)
                sessionStorage.setItem("guest",guest);
                sessionStorage.setItem("phone",phone);
                sessionStorage.setItem("memo",memo);
                sessionStorage.setItem("sum",sum);
              alert(`예약이 완료되었습니다. 가격은 ${sum}원입니다.`)
                
            navigate('/ReservationsSuccess');
                
            }).catch((e)=> {
                alert("중복된 날짜 예약은 불가능합니다.");
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
          guest : "",
          phone : "",
          memo : "",
        },
        validationSchema: ReservationsSchema,
        onSubmit,
        
      });
      const navigate = useNavigate();
      
      
    
      return (
        <div className="header">
          <h1><img className="logoimg" src="/images/Logo.png" onClick={()=>{navigate("/");}}/></h1>
          <h2>예약 정보 입력</h2>
          <h3>예약 날짜:{date}</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="guest">인원수(한 사람당 1000원입니다.)</label>
          <input
            value={values.guest}
            onChange={handleChange}
            id="guest"
            type="guest"
            placeholder="인원수를 입력해주세요."
            onBlur={handleBlur}
            className={errors.guest && touched.guest ? "input-error" : ""}
          />
          {errors.guest && touched.guest && <p className="error">{errors.guest}</p>}
          <label htmlFor="phone">연락처(-포함)</label>
          <input
            id="phone"
            type="phone"
            placeholder="연락처를 입력해주세요."
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? "input-error" : ""}
          />
          {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
          <label htmlFor="memo">요청사항</label>
          <input
            id="memo"
            type="memo"
            placeholder=""
            value={values.memo}
            onChange={handleChange}
            onBlur={handleBlur}
            />
           <button onClick={()=>{navigate("/reservations")}}>날짜 다시 선택하기</button>
          <button disabled={isSubmitting} type="submit">
           만나서 결제하기
          </button>
          
          
        </form>
        </div>
      );
          };
             
        
export default ReservationsPage;







  















