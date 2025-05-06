import { PaymentMethod } from "@/interFace/interFace";
import methodImg1 from "../../public/assets//img/payment/master-card.png";
import methodImg2 from "../../public/assets//img/payment/payoneer.png";
import methodImg3 from "../../public/assets//img/payment/paypal.png";
import methodImg4 from "../../public/assets//img/payment/visa.png";

const paymentData: PaymentMethod[] = [
    {
        id: 1,
        type: 'Credit Card',
        cardNumber: '**** **** **** 1234',
        expiry: '09/24',
        image: methodImg1,
    },
    {
        id: 2,
        type: 'PayPal',
        cardNumber: "**** **** **** 7547",
        expiry: "10/24",
        image: methodImg3,
    },
    {
        id: 3,
        type: 'Debit Card',
        cardNumber: '**** **** **** 5678',
        expiry: '11/24',
        image: methodImg4,
    },
    {
        id: 4,
        type: 'Payoneer',
        cardNumber: "**** **** **** 3591",
        expiry: "12/24",
        image: methodImg2,
    }
];

export default paymentData;



