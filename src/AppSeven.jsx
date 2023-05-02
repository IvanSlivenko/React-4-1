
import { update, getClicksValue } from "redux/clicksSlise/clicksSlice";
import { useDispatch, useSelector } from "react-redux";





export default function AppSeven(){
    
    const dispatch = useDispatch();
    const numberOfclicks = useSelector(getClicksValue);
   

    return (
    <>
            <h1> Number of clicks: {numberOfclicks}</h1>

            <button type="button" onClick={()=>dispatch(update(5))}> 
                Add 5 clicks
            </button>
            <button type="button" onClick={()=>dispatch(update(10))}> 
                Add 10 clicks
            </button>
            <button type="button" onClick={()=>dispatch(update(20))}> 
                Add 20 clicks
            </button>
        
        
    </>
      
    
    )     
            
     
                 
  
};

    
