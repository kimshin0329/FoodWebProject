import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const nicknameRules = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("유효한 이메일을 입력하세요!").required("이메일을 입력해주세요."),
    nickname: yup
    .string()
    .min(2)
    .max(10)
    .matches(nicknameRules, {message:"영어 대/소문자, 숫자, 한글 자모음 조합, 2~10자 이내로 입력해주세요."})
    .required("닉네임을 입력해주세요."),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, {message:"최소 5자 이상, 하나 이상의 대문자, 소문자, 특수문자로 입력해주세요."})
        .required("비밀번호를 입력해주세요."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'),null],"비밀번호가 맞지 않습니다.")
        .required("비밀번호를 확인해주세요."),
})