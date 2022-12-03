import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import CForm from "./form";
import Card from "./card";
import { Button } from "react-bootstrap";
import { nanoid } from "nanoid";

const generateRandomString = (size) =>  {
  try {
    return nanoid(64);
  } catch (error) {
    console.error('Error generating salt');
    throw error;
  }
};


const api = axios.create({
  baseURL: 'https://sandboxapi.rapyd.net/v1'
});

api.interceptors.request.use(req => {
  const method = req.method;
  const salt = generateRandomString(8);
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = 'M2ViYmU4ZWZjOWE2YjZjNTBkZmFhNjM0ZDkxNGZkZmYwOTQ5NzIyMjQ4M2UxNTQ5NWI2YTUxMzNlYTI5MzJmYQ';
  req.headers.salt = salt;
  req.headers.timestamp = timestamp;
  req.headers.access_key = process.env.REACT_APP_RAPYD_ACCESS_KEY;
  req.headers.signature = signature;
  return req;
});

const initialState = {
  cardNumber: "#### #### #### ####",
  cardHolder: "FULL NAME",
  cardMonth: "",
  cardYear: "",
  cardCvv: "",
  isCardFlipped: false,
};

const MainScreen = () => {
  const [state, setState] = useState(initialState);
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || initialState[keyName],
      });
    },
    [state]
  );

  // References for the Form Inputs used to focus corresponding inputs.
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef(),
  };

  let focusFormFieldByKey = useCallback((key) => {
    formFieldsRefObj[key].current.focus();
  });

  // This are the references for the Card DIV elements.
  let cardElementsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
  };

  let onCardFormInputFocus = (_event, inputName) => {
    const refByName = cardElementsRef[inputName];
    setCurrentFocusedElm(refByName);
  };

  let onCardInputBlur = useCallback(() => {
    setCurrentFocusedElm(null);
  }, []);

  const handlePayment = () => {
    const request = {
      amount: 1,
      currency: "INR",
      customer: "cus_4eeeb68ee587ef34c05280a243bd9f98",
      payment_method: {
        type: "in_amex_card",
        fields: {
          number: state.cardNumber,
          expiration_month: state.cardNumber,
          expiration_year: state.cardYear,
          name: state.cardHolder,
          cvv: state.cardCvv,
        },
        metadata: {
          merchant_defined: true,
        },
      },
      capture: true,
    };
    api.post("payments", request)
         .then((resp) => {
        console.log(resp);
      }).catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="wrapper">
      <CForm
        cardMonth={state.cardMonth}
        cardYear={state.cardYear}
        onUpdateState={updateStateValues}
        cardNumberRef={formFieldsRefObj.cardNumber}
        cardHolderRef={formFieldsRefObj.cardHolder}
        cardDateRef={formFieldsRefObj.cardDate}
        onCardInputFocus={onCardFormInputFocus}
        onCardInputBlur={onCardInputBlur}
      >
        <Card
          cardNumber={state.cardNumber}
          cardHolder={state.cardHolder}
          cardMonth={state.cardMonth}
          cardYear={state.cardYear}
          cardCvv={state.cardCvv}
          isCardFlipped={state.isCardFlipped}
          currentFocusedElm={currentFocusedElm}
          onCardElementClick={focusFormFieldByKey}
          cardNumberRef={cardElementsRef.cardNumber}
          cardHolderRef={cardElementsRef.cardHolder}
          cardDateRef={cardElementsRef.cardDate}
        ></Card>
      </CForm>
      <div>
          <Button onClick={handlePayment}>Make Payment</Button>
        </div>
    </div>
  );
};

export default MainScreen;
