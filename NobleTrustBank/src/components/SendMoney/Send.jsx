import React, { useState } from 'react';
import styles from './send.module.css'; // Importing the CSS Module
import { PaystackButton } from 'react-paystack';

const NewTransfer = () => {
  const publicKey = "pk_test_9814427a6670d3799900c2fbfb981348ded786db";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const componentProps = {
    email,
    amount: amount ? amount * 100 : 0, // Ensure amount is multiplied by 100
    metadata: {
      name,
      phoneNumber,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thank you for the Successful Payment"),
    onClose: () => alert("Payment canceled"),
  };

  return (
    <div className='moneyContainer'>
      <h1>Make Payment here</h1>
      <div className="TransferContainer"> 
        <input
          type="text" 
          value={name} 
          placeholder="Full name"
          className={styles.input} 
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text" 
          value={email} 
          placeholder="Email Address"
          className={styles.input} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text" 
          value={amount} 
          placeholder="Amount"
          className={styles.input} 
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text" 
          value={phoneNumber} 
          placeholder="Account Number"
          className={styles.input} 
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <PaystackButton {...componentProps} className={styles.submitButton} />
      </div>
    </div>
  );
};

export default NewTransfer;
