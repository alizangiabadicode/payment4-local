export const configurationCode = `\n\nconst { Payment4 } = require("payment4")

// or

import { Payment4 } from 'payment4';

/**
* Create Payment4 instance

* apiKey and callbackUrl are both required.

* sandBox is optional.
*/

const initParams = {
  
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',

  callbackUrl: 'https://your-domain/verify',

  sandBox: false,
};


const payment4 = new Payment4(initParams);
`

export const  requestingPaymentCode = `/**

* amount is required

* callbackParams, webhookParams, webhookUrl and language are optional

* If no language is provided, the default language is set to 'en'

* If no currency is provided, the default currency is set to 'USD'.


*/

const params = {
    
 amount: 100,

 callbackParams: { "your-key": "your-value" },

 webhookParams: { "your-key": "your-value" },

 webhookUrl: "https://your-domain.com/webhook",

 language: "en",        //Not sensitive to uppercase or lowercase

 currency: "USD",       //Not sensitive to uppercase or lowercase
};

/**

* requestPayment

* @param {PaymentRequestType} params

* @returns Promise<String>

*/

const paymentUrl = await payment4.requestPayment(params);`

export const verifyPaymentCode = `/**

* amount and paymentId and currency are required

*/

const params = {

 paymentUid: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",

 amount: 100,

 currency: "USD",      //Not sensitive to uppercase or lowercase
};

/**
 
* Verify Payment from PaymentId.

* @param  {VerifyPaymentRequest} params

* @returns Promise<boolean>

*/


const response = await payment4.verifyPayment(params);`