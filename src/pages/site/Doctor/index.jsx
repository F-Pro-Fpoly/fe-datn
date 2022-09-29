import { Link } from "react-router-dom"
import "./Doctor.scss"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function DocTor () {

    return (
        <>
        <div className="container">
            <div className="navCate">       
               <h3>
                <Link to={'/'} > <i className="fa-solid fa-arrow-left-long">  </i></Link>
                  &nbsp;Bác sĩ 
               </h3>
           </div>
           <div className="ListBacSi">
               <div className="rowCate">
                <ul>
                   <li>
                        <Link to={'bs-nguyen-van-a'}> 
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" />
                                <h3>Nguyễn Văn A</h3>
                                <h4><span> Da liễu</span></h4>
                            </Stack>
                        </Link>
                    </li>
                   <li>
                        <Link to={'co-xuong-khop'}> 
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" />
                                <h3>Nguyễn Văn B</h3>
                                <h4><span>Thần kinh</span></h4>
                            </Stack>
                        </Link>
                    </li>
                   <li>
                        <Link to={'co-xuong-khop'}> 
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" />
                                <h3>Nguyễn Văn c</h3>
                                <h4><span>Khoa Nội</span></h4>
                            </Stack>
                        </Link>
                    </li>
                </ul>
               </div>
           </div>
        </div>


        </>
    )

}
export default DocTor