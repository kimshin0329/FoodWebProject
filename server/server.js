const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const cors = require('cors');
const bodyParser = require("body-parser");



let corsOptions = {
    origin: "*",
    credentail: true,
}
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.use(cors(corsOptions));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1235",
    database: "jkdb",
});


app.post("/api/signup", (req,res)=> {
    var email = req.body.email;
    var nickname = req.body.nickname;
    var password = req.body.password;
    const sql = "SELECT USER_EMAIL FROM userinfor WHERE USER_EMAIL = ?";
    const sqlQuery =
    "SELECT USER_NICKNAME FROM userinfor WHERE USER_NICKNAME = ?";
    const sqlQuery2 =
    "INSERT INTO userinfor (USER_EMAIL,USER_NICKNAME,USER_PASSWORD) VALUES(?,?,?);";
    
    db.query(sql,[email],(err,data) =>{
        if(err) return res.json("Error")
        if(data.length === 0){
            db.query(sqlQuery,[nickname],(err,result)=>{
                if(err) return res.json("Error")
                if(result.length === 0){
                    db.query(sqlQuery2,[email,nickname,password],(err)=>{
                        res.send(200);
                    })
                }else{
                    
                    res.send(501,"501")
                }
            })
            
        }else{
            
            res.send(500,"500")

        }

    })
    
        
        })


app.post("/api/login",(req,res)=> {
    var email = req.body.email
    var password = req.body.password
    const sqlQuery = "SELECT USER_NICKNAME FROM userinfor WHERE USER_EMAIL = ? AND USER_PASSWORD = ?";
    db.query(sqlQuery,[email, password],(err,data)=> {
        
        if(err) return res.json("Error");
        if (data.length >0 ){
            res.send(data)
            
            
        } else {
            res.send(500)
            
        }
    })
})

app.post("/api/reservations", (req,res)=> {
    var guest = req.body.guest  
    var phone = req.body.phone
    var memo = req.body.memo
    var email = req.body.email
    var nickname = req.body.nickname
    var date = req.body.date
    
    const sql = "SELECT * FROM reservationsinfor WHERE email =? AND rsdate = ?"
    const sqlQuery =
                    "INSERT INTO reservationsinfor (email, nickname, guest, phone, memo, rsdate) VALUES(?,?,?,?,?,?)";
    const sqlQuery2 = "SELECT seq FROM reservationsinfor WHERE email =? AND rsdate = ?"
        db.query(sql,[email,date],(err,data)=>{
            if(err) return res.json("Error")
            if (data.length === 0){
                    db.query(sqlQuery,[email,nickname,guest,phone,memo,date],(err)=> {
                        db.query(sqlQuery2,[email,date],(err,result)=>{
                            
                            res.send(result)
                        })})
                        
                   }else{
                    res.send(404)
                   }
        })

        
        
})

app.get("/api/history", (req,res)=> {
    var email = req.body.email
    
    const sqlQuery = "SELECT * FROM reservationsinfor WHERE email =?";
    db.query(sqlQuery, [email],(err,data)=> {
        if(err) return res.json("Error")
        if(data.length > 0){
            res.send(data)
        } else{
            res.status(500);
        }
    })
    })

    
  

app.listen(PORT,()=>{
    console.log(`Start server ${PORT}`);
});

