import { useDispatch } from "react-redux";
import { logIn, logOut } from "redux/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => { 

    const navigate = useNavigate();
    const dispath = useDispatch();
    


    const handleSubmit = (event) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        // console.log(form.elements.login.value);
        dispath(logIn(form.elements.login.value));
        form.reset();
        navigate('/DashboardPage', { replace: true });
        // navigate('/dogs', {replace:true});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="login"
            style={{    
                padding: 4,
                marginBottom: 8,       

                }}
            ></input>
              
        {/* <input type="text" name="password"></input> */}
        <br />
            <button type="submit">Log in</button>
    </form>
    );

};
