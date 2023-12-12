import { useNavigate } from "react-router-dom";
import HorizonLine from "../HorizonLine";

export default function Kitchen(){
    const navigate = useNavigate();
    return (
        <div>
            <div className="header">
        <h1><img className="logoimg" src="/images/Logo.png" onClick={()=>{navigate("/");}}/></h1>
        
        <HorizonLine/>
        <h1>우리의 주방</h1>
        </div>
        <h2><img className="kitchenimg" src="/images/kitchen.jpeg"/></h2>
        <div className="kitchentext">
        <h2> 우리 주방은 항상 고객님을 위해 존재합니다.</h2>
        <h4> 고객님을 위해 항상 우리 주방은 청결을 유지하고 있으며, 모든 채소는 신선함을 유지하고 있음을 보장합니다.</h4>
        <h4> 우리가게를 찾아주시는 모든 고객님께 항상 감사한 마음으로 정성을 다해 보답하겠습니다.</h4>
        </div>
        
    
        </div>    
        
        
        )
}