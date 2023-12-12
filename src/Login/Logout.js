


const Logout = () => {
    
    let token = sessionStorage.getItem("email")
    alert("로그아웃이 완료되었습니다.")
    sessionStorage.clear()
    window.location.replace('http://localhost:3000/');

    
    
}


export default Logout;