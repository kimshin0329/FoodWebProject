import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const nicknameRules = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/;
const phoneRules = /^\d{2,3}-\d{3,4}-\d{4}$/;
export const basicSchema = yup.object().shape({
    email: yup.string().email("유효한 이메일을 입력하세요!").required("이메일을 입력해주세요."),
    nickname: yup
    .string()
    .min(2 , "닉네임은 최소 2자리 이상이여야 합니다.")
    .max(10, "닉네임은 최대 10자리입니다.")
    .matches(nicknameRules, {message:"영어 대/소문자, 숫자, 한글 자모음 조합, 2~10자 이내로 입력해주세요."})
    .required("닉네임을 입력해주세요."),
    password: yup
        .string()
        .min(5,"비밀번호는 최소 5자리 이상이여야 합니다.")
        .matches(passwordRules, {message:"최소 5자 이상, 하나 이상의 대문자, 소문자, 특수문자로 입력해주세요."})
        .required("비밀번호를 입력해주세요."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'),null],"비밀번호가 맞지 않습니다.")
        .required("비밀번호를 확인해주세요."),
    })
    
export const ReservationsSchema = yup.object().shape({
    guest: yup
    .number("숫자를 입력해주세요.")
    .min(1, "최소 한명 이상이여합니다.")
    .max(8,"최대 8명까지 예약 가능합니다.")
    .required("최소 1명 최대 8명까지 입력해주세요."),

    phone: yup
    .string()
    .matches(phoneRules, {message:"전화번호 형태로 적어주세요!"})
    .required("연락처를 입력해주세요."),

})
    
    
        
        
