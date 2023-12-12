import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { Formik, Form, useField } from "formik";
import "./Reservations.css";
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';




export default function Reservations(){
    const navigate = useNavigate(); 
    useEffect (()=>{
        if (sessionStorage.getItem("email") === null){
            
            alert("로그인 후 이용해주세요.")
            navigate("/Login");
            
           
        }
    })
    
    const MyDatePicker = ({ name = " "}) =>{
        const [field, meta, helpers] = useField(name);

        const { value } = meta;
        const { setValue } = helpers;

        return (
            <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            {...field}
            selected={value}
            minDate={new Date()}
            onChange={(date) => setValue(date)}
            locale={ko}
            />
            
        );
    };
    
  
        
    
        return (
          
          <div className="Reservations">
            <h1><img className="logoimg" src="/images/Logo.png" onClick={()=>{navigate("/");}}/></h1>
            <h1>예약날짜를 선택해주세요.</h1>
            <Formik
              initialValues={{ date: new Date() }}
              onSubmit={(values) => {
                try{
                const date = `${values.date.getFullYear()}년 ${values.date.getMonth() + 1}월 ${values.date.getDate()}일`;
                sessionStorage.setItem('date', date)
                
                if(window.confirm(`선택하신 날짜는 ${date}입니다.`)){
                  navigate("/ReservationsPage")
                  alert("예약 정보 입력 페이지로 이동합니다.")
                }else{
                  alert("취소 되었습니다.")
                }
                  


                }catch(err){
                  alert(err)
                }
              }}
            >
              {(props) => (
                <Form>
                  <div class="form-group">
                    <MyDatePicker name="date" />
                  </div>
                  <button type="submit">날짜 선택하기 </button>
                </Form>
              )}
            </Formik>
  
           
          </div>
        );
      }
    
      
    
