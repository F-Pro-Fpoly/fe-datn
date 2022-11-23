import {useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { createBookingService } from '../../../services/normal/BookingService';


function Payment({bookingDescription}) {
    const navigate = useNavigate();
    let dataPayment = [
        {
            'payment_method': "default",
            'price': "100000"
        },
        {
            'payment_method': "momo",
            'price': "90000"
        }
    ];
    const token = useSelector(state => state.auth.token);
    const [paymentMethod, setPaymentMethod] = useState('default');
    const [paymentData, setPaymentData] = useState({});

    const handleOnchangePaymentMethod = (e) => {
        let payment_method = e.target.value;
        setPaymentMethod(payment_method);
        handleChangePaymentMethod(payment_method, dataPayment);
        setPaymentData(getPaymentData())
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
        try {
            let booking_info = JSON.parse(sessionStorage['booking_info'] ?? null);
            let booking_info2 = JSON.parse(sessionStorage['booking_info2'] ?? "{}");
            if(bookingDescription === ''){
                toast.error("Vui lòng nhập thông tin khám bệnh");
                return;
            }
            if(!token){
                if(!booking_info){
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
            toast.success(message);

            setTimeout(()=>{
                navigate('/');
            }, 2000);
        } catch (error) {
            let message = error.response.data.message;
            toast.error(message);
        } 
    }

    useEffect(() =>{
        handleChangePaymentMethod(paymentMethod, dataPayment);
        setPaymentData(getPaymentData())
    }, [])

    return ( 
        <div className='payment booking-main-address mt-3 p-3'>
            {/* <ToastContainer /> */}
            <div className='payment-checks'>
                {/*  */}
                <div className="row" onChange={handleOnchangePaymentMethod}>
                    <div className="col-12" >
                        <Form.Check type='radio' value="default" defaultChecked  id='payment-method-default' label="Thanh toán tại cơ sở" name="payment-method" />
                    </div>
                    <div className="col-12">
                        <Form.Check type='radio' value="momo"  id='payment-method-momo' label="Thanh toán qua momo" name="payment-method" />
                    </div>
                </div>
                {/*  */}
                
            </div>
            {
                paymentMethod == "default" && (
                    <div className='row mt-2 ms-0 me-0'>
                        <h4 className='booking-hr booking-hr--dashed py-2'>Thanh toán tại cơ sở y tế</h4>
                        {paymentData && (
                            <p className='d-flex justify-content-between fw-bold'>Tổng tiền cần thanh toán: <span className='text-danger fw-bold'>{paymentData.price} <span className='text-dark'>VND</span></span></p>

                        )}
                    </div>
                )
            }
            {
                paymentMethod == 'momo' && (
                    <div className="row mt-2 ms-0 me-0">
                        <h4 className='booking-hr booking-hr--dashed py-2'>Thanh toán qua momo</h4>
                        {paymentData && (
                            <p className='d-flex justify-content-between fw-bold'>Tổng tiền cần thanh toán: <span className='text-danger fw-bold'>{paymentData.price} <span className='text-dark'>VND</span></span></p>
                        )}
                    </div>
                )
            }
            {
                paymentMethod && (
                    <div className='mt-3'>
                        <button className='btn btn-primary booking-button--full booking-button--payment' onClick={handlePayment}>Thanh Toán</button>
                    </div>
                )
            }
        </div>
    );
}

export default Payment;
