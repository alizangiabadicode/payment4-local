export const configurationCode = `'apiKey' => env('PAYMENT4_API_KEY', '')`

export const callbackUrlCode = `'callbackUrl' => env('PAYMENT4_CALLBACK_URL', '')`


export const webhookUrlCode = `'webhookUrl' => env('PAYMENT4_WEBHOOK_URL', '')`


export const instanceCode = `Example1

/**

* apiKey and sandBox are optional if already set them to config file.

*/

$initParams = [

'apiKey' => '######',

'sandBox' => false,

];


$paymentInstance = Payment4($initParams);


Example2


$paymentInstance = Payment4();
`

export const requestingPaymentCode =  `
/**


 * amount is required

 * callbackParams, webhookParams, webhookUrl, language, currency are optional.

 * callbackUrl is optional if already set it to config file.

 * If no language is provided, the default language is set to 'en'.

 * If no currency is provided, the default currency is set to 'USD'.

 */
 
$amount = 10;

$options = [

  'callbackUrl' => "https://your-domain.com/callback",

  'callbackParams' => [

    'your key' => 'your value',

    'your key' => 'your value',
  ],

  'webhookUrl' => "https://your-domain.com/webhook",

  'webhookParams' => [

    'your key' => 'your value',

    'your key' => 'your value',
  ],

  'language' => 'EN',

  'currency' => 'USD',
];

$response = $paymentInstance->requestPayment($amount, $options);

if ($createPayment->status) {

    return responseSuccess(

        [
            'url' => $createPayment->data->paymentUrl,
        ]
    );

} else {

   return responseError(

        [
            'message' => $createPayment->message ?? '',
        ]
    );
}
`
export const verifyPaymentCode = `**

* amount and paymentUid are required

*/


$paymentUid = '';

$amount = 10;

$options = [

 'currency' => 'USD',

];


$response = $paymentInstance->verifyPayment($paymentUid, $amount, $options);
`

export const requirementCode = `- php " ^7.2|^8.0 "

- laravel-framework " ^7.0|^8.0|^9.0|^10.0 "

- Register for Free or Login on the https://payment4.com

- Create new gateway and get apiKey
`