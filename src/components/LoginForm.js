import { useDispatch } from "react-redux";
import { logIn, logOut } from "redux/userSlice";

export const LoginForm = () => { 


    const dispath = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        // console.log(form.elements.login.value);
        dispath(logIn(form.elements.login.value));
        form.reset();
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
