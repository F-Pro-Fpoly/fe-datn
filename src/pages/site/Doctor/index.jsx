import { Link } from "react-router-dom"
import React from 'react';

import "./Doctor.scss"
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
               <div class="left-section mCustomScrollbar" data-mcs-theme="minimal-dark">
				<ul>
					<li>
                        <Link to={'bs-nik'}>
						<div class="chatList">
							<div class="img">
								<img src="https://th.bing.com/th/id/R.c2fd8a8e8118f08046ea8cfedb6d4e3b?rik=1AT%2fC3joowSXXw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-3U5IWY8nqOA%2fVdo5H_gCEOI%2fAAAAAAAADog%2fiGUMMqdblew%2fs1600%2fhinh-nen-mat-troi-moc-buoi-sang-binh-minh-cuc-dep-678969.jpg&ehk=gwik1LlLs1IFimfaedBEt08ih4IGIePPmHNm7wj6pL8%3d&risl=&pid=ImgRaw&r=0"/>
							</div>
							<div class="desc">
								<h5>Nik Minaj</h5>
								<small>Khoa Nội</small>
							</div>
						</div>
                        </Link>
					</li>
					<li>
                    <Link to={'bs-nik'}>
						<div class="chatList">
							<div class="img">
								<img src="https://th.bing.com/th/id/R.c2fd8a8e8118f08046ea8cfedb6d4e3b?rik=1AT%2fC3joowSXXw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-3U5IWY8nqOA%2fVdo5H_gCEOI%2fAAAAAAAADog%2fiGUMMqdblew%2fs1600%2fhinh-nen-mat-troi-moc-buoi-sang-binh-minh-cuc-dep-678969.jpg&ehk=gwik1LlLs1IFimfaedBEt08ih4IGIePPmHNm7wj6pL8%3d&risl=&pid=ImgRaw&r=0"/>
							</div>
							<div class="desc">
								<h5>Nik Minaj</h5>
								<small>Thần Kinh</small>
							</div>
						</div>
                        </Link>
					</li>
				
				</ul>
			</div>
               </div>
           </div>
        </div>


        </>
    )

}
export default DocTor