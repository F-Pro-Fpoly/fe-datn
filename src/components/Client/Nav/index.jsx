import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./Nav.scss"

function Nav (){
    let user = useSelector((state => state.auth.user));
    return(
     
       <>
       <div className="nav">
            <div className="logo">
               <Link to="/">
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX//////v8dTlU1jp7///38//8AO0I1jpwWS1IAQkoAQEkripwAf5H5///Z6erz+PgehpcbhZa+19vn8vMAPUifwca00dSuy9AniJvu9PPm8fNRmaXO4uTZ6enr8PEFRU1CkqCHtr6UwMUoh5Rjoq56sLpen6tHlp+BtLrI3+Cewsp0qbAMgpKYqawAMz6hs7WwwMGKnqDH0dLV3uAuWF0+Y2dNbXJ4j5NgfH6BsLunxs5Wn6gVgpiwzM2Qu8ZCjqCm0dRmq7S3yMhDZWp6kJNogogAHykANDs8YWMZSlZXdHjg5OWqtrhBZ2pyprKYyMvEToshAAAUgUlEQVR4nO1dCXuaStseBcQ4wAwQEAWR1YhLFjUmjTatWU5bTXP+/7/5ZtA0SZvzHkFUzvV5X1crEWHm5plnmw0ADjjggAMOOOCAAw444IADDjjggAMOOOCAnIMtFFZHSIqqGsVN/NHpxIdRA63OFwC7r0puDGRV3TC81RRLUpG4gtqwlKoXmliWW64uifuuZGrUdSKqSF0SQGpDspQVIkuq1xCVrd42BcF0o5U0/yuiJPVEpFkqKjkWJaUTBrzv4xiyPJ1OZRkbGPu+E7haVFel6gwLZkfiAOD2XfU1gRRdscmnVA1NQzYghAZhJPcM3pyFFIEDKUsj/t43Xd2yOo7Au9a+a74WkKVERBgNLfAxhDyEWObNUFMk9b2+qZKihaZPHgD9jd+t6p2W4HsSOcXmubGqliUCpHd5jCEDfZ8ISKm/UHvbBldmlmqi4xOWjO+ftDXP6ZlVMacESbU4u2EDUenKhB0DsdHqWK9y49gXVvTHSzGtvlAV1yGyZCBkQndmyG4d5NHoFAp1mwXSJ8PgY3qhQu3jevUkv5I0kz4XHpqzGZS70nYrmwacTcSnmzLkeaJVYURbJMuuqVFLj9/oOPHl0DSZXmAB8EboeweHEEAd3mCo+Ewd/fsVH8P6ZGCetAHHgUYg5Ygi5ecSRSL2AruN2BimUSPKB1UdDClJhpHbKA/qSGpVsAHyiP92eMO5ySAEUybykiLEWh5CAK5WABo0zAljMDqXzUOPWjKxOgzPG+a+g4ACIOGlwk9bMwfz1QxvbLUwE8tRcMW9RgCczaqB4HiTKb7hSLqU1X0JJSW2W6SpftmfGFmg2kCTDc/DU2oUsszy6LPSfNpUGV5292RwCuKQU02hq5vTSWMrVah1ZdpSiTaqW7j7v4K1LfC15+teD1MFzJ4hvaPCk4iVBDq+AtI5oE2KlxpiMH1uTIRgmw8YhTgWo+yBwi7df4EFSk3ie7piyPo2lYRaHJ9GEowRiNkZsjUK5j6LVcFUbwWzvvXC0CQ2qvxJHXA741jTQFtoo5bgclvveCDO0JNjt+HvLuGofxbNnqLysrKjAqOl+8fWjjpypM/qFyhFMi/tKPYvAImHDnGOONpBaRywPtcNR9SmZuocKQWQCSc03VB2YFKjz5IQcG2hu9uwn332ZwxkpsrW202kWUIXdAV3y+X8CVcOqWOMtkzR6lg9l5sI3lZL+Rhez3W2a26Ix5XaluBxJ1NtL6GwJ/ztQJ44ja0Vzta7knArnkw72yrhX9ARbk5IS61tjSJqSbJLJOjtqfeEBbc9nThGk9tWBSaSHwJzug8dfIGLFcgYz1u6exi1Wlwwbe+x/4sF3RPFZ/DNNm4NbrRPDujiIPubJ4IZRAbTyz64KbBWUJWRNzX33b+HeFfHkFibzG/sREJDgf5e+hPeod5Tbn04oUlqpmjpWJF4vO/uSwpFaDxDrGV815v2sys6cF+O8D1uecQzcqbZIqs6nRMQnOzbyizBArMt+dDM9Kbm1x7SJgzKyQB0TbCqGGfWoEg4ehOauuTAPCjhEkpP7EI5O6tXY7wAOK12ZjfcFCwIu6IPs1IaEkd4vvhp9kXMwWDeEiwQZSvy5azS4cicKJbp7KKPZH1EEIQGk1Gq6LRbgA+7uZEgBWlYHdE3sjA2LKi2nNptyKPcjKlTsEDtIR37WfSGif7MU2F7C9H8huh0QQtnMfDmtU5Ay3MyqFK2KHB+XZWn6sYeWvQnumXOlFxp4RJKQBLicGNzqjkmcLRWJlXKGo6E/E3DU1b0TyLF7OYnmnkLqwVucXfDm1SZCfCr+RQhCZcbCMsbdi6eMJHealv5mX71BiywnoFrbCbECE8A1PMqQiLEWh37Gw3SBlBRTrx8xWtvoXRIFT9tcANVdoCjt/LnKF7AmkDBxga9Uh7WJKxX88sQVBXA4PSjKNwXjLq33Tyv+EAB8Aw+9eVWL0RC5ObSkL6gXZOwkdpQtGWr06ruarQ+HawbYMKU4xgc8BnA65vGDNvGM9D8dLaGBdHUkwQrf2nTe2iqJPspp7a6vbo7u6nn2JJS1KvA5Fup0kTOOQG+svsZCUnRBre0YzEFQ0noWEIj742UNFPR8tM10xuh4QbK9mfmbYpGxPlwlubKmQyY6j5HtNeFRmJTmLxLigVyWBekrMewtgEN/G0kn/HGEjVUbvx6ftOKVyg1C8PbpFex4PO0FoRKLc/xzApqJMI0Y20hwwn65+zrkz04HZgMTq6ITij1pM+p85J/ua6wXGS57vK9/12SDj7B5IqIetUqRnnsJv0TCqji5APwJCINW416KoYsWPQvzv9BjvEUCjS4eJyP78fj64vB5v3yC2QZyfMLRag7qTto+t+azcpo8eE5DthP89JRsxzjR/O4eLcpRa5Rkxkn6UBbp6cKekqGT8dFgnLx486Bi9LRj+ISzUqp8qN0epGumFdYJNFLPOYdnliClI6heERr/6NYefrw9PVxuVguNyvF4uhsQBK7xZhSvLg6T1VYDImkF4mn+pizqoDSdebfkcofnTWLPx4/OsuC/uh4dH1x1yxfg3iNvt38tgDF5vF1qtIoJNCFMGnwDd1bGTRSlTcnMrrnKqSZgo92ulgp3eK4+QCWy/BGlTMwKBWPz1IVR+8FPGgkDKGR3AlMlCqxWJSICM8BIVhBhMDw/GMTcFY5ihkVgB0fnZXK5bSj8ipXhTBhd4va050Qper+uGjG0iOSrAyJwManDx/+bF6uEEdBZXjV/Eb3CTn7djpIUx6ga8kVzCSM2yRBx56dYpScBUdUC2OiFWI86qUmVUf7d9eBmsUjOybYPz66AOhxCIYP9vKcfZewUIQizDDJrrF6X+WqnbCgGOfEzjTJozk7Ljb75OOoeQGGP7+djt8/rkGlPIp18uH4+IrQLF3GX1+OyX/XfyUsuYAaBp9o1gILFNmTlWTlPI0GtIz7cswM3B0Vm6TqY9IY706Jgzh6fOPYWSLiMjkL0Pi0TCX2s3xMvx+UTsl33xIrJKobPE5iNQjDqSdHyQzNeem4eTkel4vEKN4Nhn2ijnOACM+zb6V+rVL89uYZs+B7uXkxHJ41L5/oanRElJbGB48/CNHaIvFyA1STeZxsvFuX27KUSIYsVyScyuU4VjmqVJokqrknjZEQvrSJOhYrb7Wrdlosnp6eVsoPsXWxyWla0Ur5JwDNcaKqUqAaTrqwrYrbcj2hNiwuS81y8QXkqHwZG9ZL0uaGlWXbfQHR1tHg6eGydHo6GsanyyBW2itwVyol9hoswryRbDVkFc9kNbGzGJ5dEm9fKh2XSkc/ydEIkL+pyYy18i3Dq2Y5Ni3c8OLo2zm1O0RwNm3SYHzc//ju/wMcgoyhJ7qEMqwld4eISk5Ftm1z6Ji00lppRYwEce8YjspESZdYlEt3Axrg2KNm8XiwKJVJeoySaSKLoIOTMGQJw1YahsS8HK1iL1Qqlq+JGpZiA3PxeoKCxD3NZSBAkvx587taap6dV+6vyseL81PyJOzrZAwRwiZOEpiyQCdXJGeImuUfo1/HxfJVv0k9BlgyfGNpzo9oYLfCqHxKEo7mt5H4WC7Zg1MbDK8TaiKxNAFhuH63GWFoOIkZFiiP0kvkxY7Kzf5FszSM/yKWpTJ8/ekjCXheopxBiXqVq/uLAniolGzw/e4isSISbzFLyFAhHjSxDG0SxrxmTPflo6env1Z/E4WsDMXzlztSV7I6HDZ/HL2QXZS+EXKD5NpRqwthwlYaYT65Hj4SZ4F+6c91mXjA4Yubfyj9KP9K5okallfU+6UfsdiXC5gXZ+ccm6LjpiYR/53MlkqEYVJ/ODgu/5JGHJcdvw23H4qXvxTx6Willefl49Lc3ngYnbUtGmUmuqZOYoRkMQ3gikflN6pGrMnxm44a9jUXZok3LDY5sOiPTkvzAdh8ATpr0ygzGcMa5rGVjOHV6cO7yNP+a/7m7DsS/VJxdDU6Pb3s2yCLnYk4u4r/FpL1uXA8Y0S1JDabG77PXlhw909PiC08HlWa12e0EWcyLoJqHv4qJJxp6jBQR8kyrrVBjAmyl9dkM/Bj10Kn2kvYnRhA2EnXi7EH1JHZ9eSEPRIuhC7I4f6MH8IC2GvDhBdVDab7n2EYiYIeJB1BjDDjgHxO7/4TiiRYTJjwIlVmegkYsv9oduMQZWWGiF3huNjSvOKdrSl88N0aUPSemnSrDpbjoayuyVBE4sdrhu5iKsNXr2EPYrLoVygw/K2XkSMZx2IIkoGLPEcSEm54xBFjii3VXssJPI3K89WekEtxESdOGd+VzgaA6w/OX+5SK/ZpsIZK89EdGCCSG5791jWK7kn01yc3YO11BxYLrNRohVZSdwhAB8IbsE7nDuGyeKD/s8s/yL+XJjtHhMhgQB9Y/BV3GQ9kEBrcCA0QOX6KGS6ZxNIdxwwJ7hC77to7HeHqTS/xRF+SXYRgLckXwPCBZOUPi8urOTd+nIPHxzFhZd9fFblrcPFwgcbz+TXNhAfjhwvSBNFPkhIPrrj+/Ol8fk84Dh/Q4935kDBD88HZ4Oe8L/58GHMP83VG3DhQrQuN0ElKENRk3gRrJiSE4eIePAzBd3AJLhfXcePrn4Mxd98Yn13Yc+47IM0PNMEF/aBN8dKe2+Tj6XxIU6rrx8V5fITKIzC4QI/n5+C+MQfrGZ3PugCcpKYU0LgNI2W9OGH4CAitu3G/KF6Ckfj9bEwFM+qXuO9csT+0r0njo70bj1ePdOwbHV2NzsBYHPcHT3cD2l+zmIO760fKcHzeH1zUrhejs4p42R+sw9BWwgAJKaaNuDyO6utZUxJlisRgNmy7YIMFUb0rmtTaC5u1WXGIOPq5oBUYkiM6kWFBBzZI667VELLZpeaex7k9uR7RH5GL/wjm/wGK6lcjIcXioMiAHkg1Zej88WxVXOGNDAq/2cbFG/HEeyQvncryNxxYP5b3JKHuyimmOyAIJyAf20T8b3ifGeCnmn45gVjU97+Xyb9BUgJXnaaYQlsgwTdWatXcz4rqNKaWJqSacqD2SAK1zz2T1kNb8YGZeL4QBQtMyANNzTdDtq51XbXnphNE1Z9KUpa7dG8DmjVtaEKUjmHNgLcg92tmFB4wftrtI56hA7R8J/oNrdWR5NTbrkQGltTbXK/scqMeak/Td0bwsA12vFFpMohdLxAxk34ms4Z9TtHza03Zqu5bN3LiifqvQAbWwSS7GmUN1tQdwG+0ndInaAIvv11u0e2Johgb7aZU94mtSbf2bRdo6ZDEJZttut01uuA5rw7D6gZ69OVkE1PIAkmWa4187ET3J1pfSUjKbBp1dfEtaOVTiFZ3oiiOv+lqekk2kJRPIU48Bzjmprs2F8An7ILAyqGpUWamVZ3ATUXIsupUVutOFlXKFAXgeC2Rn2zcz8LS3YmfQZhsKscucDP7on6awQxiStb25QhtrM8Zo4D80KvzrWx6WToGyfXztT0GC7ozB5y0nWxuxvHEY+zwDSHrIHLMRqf1JZNVvGwBKFNfsvg8xW4cM3NVv/2cWZUCkux33Ry9zNadmJzZhrXMVEeVDZfr5SfHiPiTescMbzK0DR0sR5accG7y1oB850aa/p3xXskQonaQC1VkQcB0Rd9zsh1xkGRocnyWzSI9OtARu0GYdU/uDYaumnD+33ZgyXxdg18zzgZYak+xrgi7fAXSx1BJiBUJuoMyVxjE8LLU/rJvj8E502q91wmkzAkWgNVjYH3yvE9rQ5uS7Ir4k5dkYv76qGKGr5/s9x0lbaErmi0lxcyLtRBCxpSEfY58e9OAa/HWJMO3ur4BEV3L4CdRbz9ve6IV8KYT7hlLW9urkgXIgXygCF+3VMC/oSNMuE+CFdS47VGs+wwMvgp72AGM5YAmtEBXsLpS5m9geQUHLMzD1o2wj/2jqA52e5a71aiDqHckM4b5965fLUe7i4SQCwRL23ZYRdJhmYeOJ+96M76u4Ilmb/sE44xfZhi+7Qe7jG7QRNBV3pe03byKNMKQgTPG2dFyDKIadX5qWfIXdTeTCohRs3wixdbuXjwT+Yyq90xR290eh3WGSNFxqEndwVuIPaGF2kIoajtLbIg3QqZPXwluzLZeKIsCwVVPBE3UtucF/0QBiF1MGDKQt7bofuP3chuyrsjQUvXdxorEpHaoFBkou9s0bmI4NRuhECBr53v7s1T/IRWj4VhbeXk9vWfE9DwF9qogSrWTzMZQSapBOPKyux1trHUFR+8KZgNFe+tZ6Ez5pTbqmax2fQW9V9Wftj1jqoHGPjfClb5g+mZ3BptRlr0bLAsUR255phCo7GKfvV8cEG8Foo2kqRpBlvGG1ZKZ2WTKK6C2Hw18C8nEPLWqjEzn3WTy+sAG4eeY2L8BBTsXI7NVg4qR4SF+ziKOiwIS9zKGfyuyNZSHTnYiNORiyC+9o6mnfugxF1E3ZUgeluEhQNeS54AgWAb/z/JSjgyGbnqFlFxoEJ32GRKCsty+O5/fgD7oxkyGxG/QxiqbN/Gw0Po6Gf9QvSHiIyZLNhUOIG4HIX0ysEAKSVt1GMoSY7MaO7F1xBD/pq6ZVPugAd0GAIn2OtgVqBhUz8fOpEVTKwhlx4tWFS2A3+K61Q7JKykhxT2R6TVYflZEgNR8vYnwPcQqaWnBbHZCw3JIRNnWpZXpKbzbwuSFnKS7jo9jenxXQYCTGrneyYGKRvJgzwk9r4UNWnFDhmaoKZL6W4NVLb3TPYGyQcSNfXmiWeRJNCwJZeRTtwvLdQS//VW/CU3DiClgLPd48zlst1233Q1M2JPJd5A+AMMMq3RdFpKiKI/q9xHopgKNjtmbmq5uNZRO2OJ9AsLyBZjCd1phR4kbsWjpivVfoQd+ReAo8lqygAMtqlPz0bCiSFkhkhrqilDNqmpVPf+v0fgniJJ+G8BezzfDTpUQk9SaSIDUumTpmtf+5FX/S7L7Da/764jErNxomtbR3kCPpBdnwv0HbMsBf7wF4SC1Aw444IADDjjggAMOOOCAAw444ID/b/g/v6nd/D1L2bkAAAAASUVORK5CYII=" alt="logo" width="60"  />
               </Link>
            </div>
            <div className="main-menu">
                <ul>
                    {/* <li>
                        <Link to="/home">
                            <h4>Trang chủ</h4>
                            <p></p>
                        </Link>      
                    </li> */}
                    <li>
                        <Link to="/chuyenkhoa">
                            <h4>Cơ sở y tế</h4>
                            <p>Tìm bác sĩ chuyên khoa</p>
                        </Link>  
                    </li>
                    <li>
                        <Link to="/home">
                        <h4>Bác sĩ</h4>
                        <p>Chọn bác sĩ giỏi</p>    
                        </Link>  
                    </li>
                    <li>
                        <Link to="/home">
                            <h4>Gói khám</h4>    
                            <p>Khám sức khỏe tổng quát</p>
                        </Link>  
                    </li>           
                    <li>
                        <Link to="/home">
                            <h4>Vaccin</h4>    
                            <p>Đăng ký tiêm ngừa vaccsin</p>
                        </Link>  
                    </li>           
                </ul>
               
            </div>
            <div className="login">
                <ul>
                    {
                    user ?
                   <>
                    <li>                                    
                        <Link to="/admin">{user.name}</Link>                                                                 
                    </li>
                    <li>
                        <Link to="/logout">Đăng xuất</Link>     
                    </li>
                   </>
                     : 
                   <>
                    <li>
                         <Link to="/login"><h4>Đăng nhập</h4></Link>  
                    </li>
                    <li>                       
                        <Link to="/register"><h4>Đăng ký</h4></Link>                         
                    </li>
                   </>
                    }
                </ul>
            </div>
        </div>
       </>
       
    )
}   

export default Nav; 