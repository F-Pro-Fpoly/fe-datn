import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Tomail() {
   

   

    useEffect(() => {
        document.title = "Quên mật khẩu"
    }, [])
    


    return (
        <>

        <div className="login">

            <div className="content" >
                <h4 style={{color: "white",fontWeight:"700"}}>Kiểm tra email</h4 >
                <p  style={{color: "white",fontWeight:"700"}}>  để có thể thay đổi mật khẩu mới</p>
                 <br />
                <a href ="https://gmail.com/"><button className='btn btn-primary'>Nhấn vào đây</button></a>
                 
               
                
            </div>
        </div>
        </>
     );
}

export default Tomail;