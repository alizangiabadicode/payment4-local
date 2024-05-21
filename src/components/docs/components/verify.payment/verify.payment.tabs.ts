export const jsCode: string = `\nconst axios = require("axios");

function VerifyPayment() {
  const headers = {
    "x-api-key": "YOUR_GATEWAY_API_KEY",
  };

  const verifyPaymentPayload = {
    paymentUid: "paymentUid",
    amount: 12,
    currency: "USD",
  };

  return axios({
    method: "PUT",
    baseURL: "https://service.payment4.com",
    url: "/api/v1/payment/verify",
    headers: headers,
    data: verifyPaymentPayload,
  })
    .then(function (response) {
      var data = response.data;
      var paymentStatus = data.paymentStatus;
      var amountDifference = data.amountDifference;
      var verified = data.verified;
      // Return or process the verification data
      return {
        paymentStatus: paymentStatus,
        amountDifference: amountDifference,
        verified: verified,
      };
    })
    .catch(function (error) {
      // Handle the error appropriately
      console.error("Verification request failed:", error);
      throw error;
    });
}
`;

export const tsCode: string = `\nimport axios, { AxiosResponse } from "axios";

interface VerifyPaymentResponse {
  paymentStatus: string;
  amountDifference: number;
  verified: boolean;
}

interface VerifyPaymentPayload {
  paymentUid: string;
  amount: number;
  currency: string;
}

const VerifyPayment = async (): Promise<VerifyPaymentResponse> => {
  const headers = {
    "x-api-key": "YOUR_GATEWAY_API_KEY",
  };

  const verifyPaymentPayload: VerifyPaymentPayload = {
    paymentUid: "paymentUid",
    amount: 12,
    currency: "USD",
  };

  try {
    const response: AxiosResponse<VerifyPaymentResponse> = await axios({
      method: "PUT",
      baseURL: "https://service.payment4.com",
      url: "/api/v1/payment/verify",
      headers,
      data: verifyPaymentPayload,
    });

    const { paymentStatus, amountDifference, verified } = response.data;

    return { paymentStatus, amountDifference, verified };
  } catch (error: any) {

    console.error("Verification request failed:", error);
    throw error;
  }
};
`;

export const javaCode: string = `\nimport java.io.IOException;
import okhttp3.*;
import org.json.JSONObject;

public class VerifyPayment {
    private static final OkHttpClient client = new OkHttpClient();
    private static final String API_KEY = "YOUR_GATEWAY_API_KEY";

    public void verifyPayment() throws IOException {
        String json = "{"
                + "\"paymentUid\": \"paymentUid\","
                + "\"amount\": 12,"
                + "\"currency\": \"USD\""
                + "}";

        RequestBody body = RequestBody.create(json, MediaType.parse("application/json"));
        Request request = new Request.Builder()
                .url("https://service.payment4.com/api/v1/payment/verify")
                .put(body)
                .addHeader("x-api-key", API_KEY)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                String responseData = response.body().string();
                JSONObject jsonObject = new JSONObject(responseData);
                // Process the verification data
                String paymentStatus = jsonObject.getString("paymentStatus");
                Double amountDifference = jsonObject.isNull("amountDifference") ? null : jsonObject.getDouble("amountDifference");
                boolean verified = jsonObject.getBoolean("verified");
            } else {
                throw new IOException("Verification request failed");
            }
        }
    }
}
`;

export const csCode: string = `\nusing System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class PaymentService
{
    private static readonly HttpClient client = new HttpClient();

    public async Task VerifyPayment()
    {
        var verifyPaymentPayload = new
        {
            paymentUid = "paymentUid",
            amount = 12,
            currency = "USD"
        };

        client.DefaultRequestHeaders.Add("x-api-key", "YOUR_GATEWAY_API_KEY");
        
        var response = await client.PutAsync("https://service.payment4.com/api/v1/payment/verify",
            new StringContent(JsonConvert.SerializeObject(verifyPaymentPayload), Encoding.UTF8, "application/json"));

        if (response.IsSuccessStatusCode)
        {
            var responseData = JsonConvert.DeserializeObject<dynamic>(await response.Content.ReadAsStringAsync());
            var paymentStatus = responseData.paymentStatus;
            var amountDifference = responseData.amountDifference != null ? (decimal?)responseData.amountDifference : null;
            var verified = responseData.verified;
            // Process the verification data
        }
        else
        {
            throw new Exception("Verification request failed");
        }
    }
}
`;

export const phpCode: string = `\nfunction verifyPayment() {
    $url = "https://service.payment4.com/api/v1/payment/verify";
    $headers = [
        "x-api-key: YOUR_GATEWAY_API_KEY",
        "Content-Type: application/json"
    ];
    $payload = [
        "paymentUid" => "paymentUid",
        "amount" => 12,
        "currency" => "USD"
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpcode == 200) {
        $responseData = json_decode($response, true);
        // Process the verification data
        $paymentStatus = $responseData["paymentStatus"];
        $amountDifference = isset($responseData["amountDifference"]) ? $responseData["amountDifference"] : null;
        $verified = $responseData["verified"];
    } else {
        throw new Exception("Verification request failed");
    }
}`;

export const curlCode: string = `\ncurl -X PUT https://service.payment4.com/api/v1/payment/verify \
-H "x-api-key: YOUR_GATEWAY_API_KEY" \
-H "Content-Type: application/json" \
-d '{
  "paymentUid": "paymentUid",
  "amount": 12,
  "currency": "USD"
}'`;

export const golangCode: string = `\npackage main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func verifyPayment() error {
    url := "https://service.payment4.com/api/v1/payment/verify"
    payload := map[string]interface{}{
        "paymentUid": "paymentUid",
        "amount":     12,
        "currency":   "USD",
    }
    jsonData, err := json.Marshal(payload)
    if err != nil {
        return err
    }

    req, err := http.NewRequest("PUT", url, bytes.NewBuffer(jsonData))
    if err != nil {
        return err
    }
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("x-api-key", "YOUR_GATEWAY_API_KEY")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return err
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        return fmt.Errorf("verification request failed with status: %s", resp.Status)
    }

    var responseData map[string]interface{}
    if err := json.NewDecoder(resp.Body).Decode(&responseData); err != nil {
        return err
    }

    // Process the verification data
    fmt.Println("Payment Status:", responseData["paymentStatus"])
    fmt.Println("Amount Difference:", responseData["amountDifference"])
    fmt.Println("Verified:", responseData["verified"])

    return nil
}

func main() {
    if err := verifyPayment(); err != nil {
        fmt.Println("Error:", err)
    }
}
`;

export const rustCode: string = `\nuse reqwest::header::{HeaderMap, HeaderValue, CONTENT_TYPE};
use serde_json::json;
use std::error::Error;

async fn verify_payment() -> Result<(), Box<dyn Error>> {
    let client = reqwest::Client::new();

    let payload = json!({
        "paymentUid": "paymentUid",
        "amount": 12,
        "currency": "USD"
    });

    let mut headers = HeaderMap::new();
    headers.insert("x-api-key", HeaderValue::from_static("YOUR_GATEWAY_API_KEY"));
    headers.insert(CONTENT_TYPE, HeaderValue::from_static("application/json"));

    let response = client
        .put("https://service.payment4.com/api/v1/payment/verify")
        .headers(headers)
        .json(&payload)
        .send()
        .await?;

    if response.status().is_success() {
        let response_data: serde_json::Value = response.json().await?;
        println!("Payment Status: {}", response_data["paymentStatus"]);
        let amount_difference = response_data["amountDifference"].as_f64().unwrap_or(0.0);
        println!("Amount Difference: {}", amount_difference);
        println!("Verified: {}", response_data["verified"]);
    } else {
        eprintln!("Verification request failed with status: {}", response.status());
    }

    Ok(())
}

#[tokio::main]
async fn main() {
    if let Err(e) = verify_payment().await {
        eprintln!("Error: {}", e);
    }
}
`;

export const pythonCode: string = `\nimport requests

def verify_payment():
    url = "https://service.payment4.com/api/v1/payment/verify"
    headers = {
        "x-api-key": "YOUR_GATEWAY_API_KEY",
        "Content-Type": "application/json"
    }
    payload = {
        "paymentUid": "paymentUid",
        "amount": 12,
        "currency": "USD"
    }

    response = requests.put(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        response_data = response.json()
        # Process the verification data
        payment_status = response_data["paymentStatus"]
        amount_difference = response_data.get("amountDifference")
        verified = response_data["verified"]
    else:
        raise Exception("Verification request failed")
`;

export const dartCode: string = `\nimport 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> verifyPayment() async {
  final url = Uri.parse('https://service.payment4.com/api/v1/payment/verify');
  final headers = {
    'x-api-key': 'YOUR_GATEWAY_API_KEY',
    'Content-Type': 'application/json',
  };
  final payload = jsonEncode({
    'paymentUid': 'paymentUid',
    'amount': 12,
    'currency': 'USD',
  });

  final response = await http.put(url, headers: headers, body: payload);

  if (response.statusCode == 200) {
    final responseData = jsonDecode(response.body);
    // Process the verification data
    print('Payment Status: \${responseData['paymentStatus']}');
    final amountDifference = responseData['amountDifference'];
    print('Amount Difference: \${amountDifference ?? 0}');
    print('Verified: \${responseData['verified']}');
  } else {
    throw Exception('Verification request failed');
  }
}

void main() {
  verifyPayment().catchError((error) {
    print('Error: $error');
  });
}
`;
