import {useEffect, useRef, useState} from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { setLoading } from '../../../redux/slices/InterfaceSile';
import { createBookingService } from '../../../services/normal/BookingService';
import { paymentVNPAY } from '../../../services/Payment';

function Payment({bookingDescription}) {
  
    const navigate = useNavigate();
    const formPaymentVNPAY = useRef();
    let dataPayment = [
        {
            'payment_method': "default",
            'price': "100000"
        },
        // {
        //     'payment_method': "momo",
        //     'price': "90000"
        // },
        {
            'payment_method': "vnpay",
            'price': "90000"
        }
    ];
    const token = useSelector(state => state.auth.token);
    const [paymentMethod, setPaymentMethod] = useState('default');
    const [paymentData, setPaymentData] = useState({});
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const handleOnchangePaymentMethod = (e) => {
        dispatch(setLoading(true));
        let payment_method = e.target.value;
        setPaymentMethod(payment_method);
        handleChangePaymentMethod(payment_method, dataPayment);
        setPaymentData(getPaymentData())
        dispatch(setLoading(false));
    }
    const handleChangePaymentMethod = (payment_method, data = []) => {
        if(sessionStorage['booking_info2']) {
            let booking_info2 = JSON.parse(sessionStorage['booking_info2']);
            if(data.length > 0){
                data.forEach((item, index) => {
                    if(item.payment_method === payment_method) {
                        booking_info2 = {...booking_info2, ...item};
                    }
                })
            }else{
                booking_info2 = {...booking_info2, "payment_method": payment_method};
            }

            sessionStorage['booking_info2'] = JSON.stringify(booking_info2);
        }
    }
    const getPaymentData = () => {
        if(sessionStorage['booking_info2']) {
            let booking_info2 = JSON.parse(sessionStorage['booking_info2']);
            return booking_info2;
        }

        return null;
    }

    const handlePayment = async () => {
        dispatch(setLoading(true));
        try {
            let booking_info = JSON.parse(sessionStorage['booking_info'] ?? null);
            let booking_info2 = JSON.parse(sessionStorage['booking_info2'] ?? "{}");
            if(bookingDescription === ''){
                dispatch(setLoading(false));
                toast.error("Vui lòng nhập thông tin khám bệnh");
                return;
            }
            if(!token){
                if(!booking_info){
                    dispatch(setLoading(false));
                    toast.error("Vui lòng nhập địa chỉ");
                    return;
                }
            }
            let dataReq = {
                ...booking_info2,
                'description': bookingDescription,
                'specialist_code': booking_info2.code,
            };
            if(!token){
                dataReq = {
                    ...dataReq,
                    ...booking_info,
                    'customer_name': booking_info.name
                }
            }
            // console.log(dataReq);
            // return;
            
            let res = await createBookingService({token, data: dataReq});
            let message = res.data.message;
            dispatch(setLoading(true));
            setTimeout(()=>{
                dispatch(setLoading(true));
                navigate('/thong-bao-da-dat-lich');
                dispatch(setLoading(false));
            }, 2000);
        } catch (error) {
            dispatch(setLoading(false));
            let message = error.response.data.message;
            toast.error(message);
        } 
    }
  

    const PaymentVNPAY = async (e) => {
       
        e.preventDefault();
        let booking_info2 = JSON.parse(sessionStorage['booking_info2'] ?? "{}");
        const req = {
            "data": booking_info2,
            "token": token,
            // "dataSpe" : booking_info2
          };
    
        let res = await paymentVNPAY(req);
        window.location.assign(res.data.data);
       
    }



    useEffect(() =>{
        handleChangePaymentMethod(paymentMethod, dataPayment);
        setPaymentData(getPaymentData())
    }, [])

    return ( 
       <>
       
        <div className='payment booking-main-address mt-3 p-3'>
            {/* <ToastContainer /> */}
            <div className='payment-checks'>
                {/*  */}
                <div className="row" onChange={handleOnchangePaymentMethod}>
                    <div className="col-12" >
                        <Form.Check type='radio' value="default" defaultChecked  id='payment-method-default' label="Thanh toán tại cơ sở" name="payment-method" />
                    </div>
                    {/* <div className="col-12">
                        <Form.Check type='radio' value="momo"  id='payment-method-momo' label="Thanh toán qua MOMO" name="payment-method" />
                    </div> */}
                   {
                    token &&  <div className="col-12">
                    <Form.Check type='radio' value="vnpay"  id='payment-method-vnpay' label="Thanh toán qua VNpay" name="payment-method" />
                </div>
                   }
                   

                </div>
                {/*  */}
                
            </div>
            {
                paymentMethod == "default" && (
                    <div className='row mt-2 ms-0 me-0'>
                        <h4 className='booking-hr booking-hr--dashed py-2'>Thanh toán tại cơ sở y tế</h4>
                        {paymentData && (
                            
                            <p className='d-flex justify-content-between fw-bold'>Tổng tiền cần thanh toán: <span className='text-danger fw-bold'>
                                
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(paymentData.price)} </span></p>

                        )}
                    </div>
                )
            }
           
            {/* {
                paymentMethod == 'momo' && (
                    <div className="row mt-2 ms-0 me-0">
                        <h4 className='booking-hr booking-hr--dashed py-2'>Thanh toán qua momo</h4>
                        {paymentData && (
                            <p className='d-flex justify-content-between fw-bold'>Tổng tiền cần thanh toán: <span className='text-danger fw-bold'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(paymentData.price)}</span></p>
                        )}
                    </div>
                )
            } */}
            {
                paymentMethod == 'vnpay' && (
                    <div className="row mt-2 ms-0 me-0">
                        <h4 className='booking-hr booking-hr--dashed py-2'>Thanh toán qua VNpay</h4>
                        {paymentData && (
                            <p className='d-flex justify-content-between fw-bold'>Tổng tiền cần thanh toán: <span className='text-danger fw-bold'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(paymentData.price)}</span></p>
                        )}
                    </div>
                )
            }
            {
                paymentMethod && (
                    
                    <>
                    {
                        paymentMethod == 'vnpay' ?
                        <div className='mt-3'>
                       <button className='btn btn-primary booking-button--full booking-button--payment' onClick={PaymentVNPAY}>Thanh Toán</button>
                       </div>
                        :
                        <div className='mt-3'>
                        <button className='btn btn-primary booking-button--full booking-button--payment' onClick={handlePayment}>Thanh Toán</button>
                    </div>
                    }
                 
                    </>
                    
                )
            }
        </div>
       </>
    );
}

export default Payment;
