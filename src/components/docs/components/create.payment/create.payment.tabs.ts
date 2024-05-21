export const jsCode: string = `\nconst axios = require("axios");

const createPayment = async () => {
  const payment4Payload = {
    amount: 10,
    callbackUrl: "https://example.com/callback-url",
    callbackParams: { key1: "value1", key2: "value2" },
    webhookUrl: "https://example.com/webhook-url",
    webhookParams: { key1: "value1", key2: "value2" },
    language: "EN",
    currency: "USD",
    sandBox: false,
  };

  const headers = {
    "x-api-key": "YOUR_GATEWAY_API_KEY",
  };

  try {
    const response = await axios({
      method: "POST",
      baseURL: "https://service.payment4.com",
      url: "/api/v1/payment",
      headers: headers,
      data: payment4Payload,
    });

    const { id, paymentUid, paymentUrl } = response.data;
    return { id, paymentUid, paymentUrl };
  } catch (error) {
    console.error("Payment request failed:", error);
    throw error;
  }
};

module.exports = createPayment;
`;

export const tsCode: string = `\nimport axios, { AxiosResponse } from "axios";

interface PaymentPayload {
  amount: number;
  callbackUrl: string;
  callbackParams: {
    key1: string;
    key2: string;
  };
  webhookUrl: string;
  webhookParams: {
    key1: string;
    key2: string;
  };
  language: string;
  currency: string;
  sandBox: boolean;
}

interface PaymentResponse {
  id: number;
  paymentUid: string;
  paymentUrl: string;
}

export const createPayment = async (): Promise<PaymentResponse> => {
  const payment4Payload: PaymentPayload = {
    amount: 10,
    callbackUrl: "https://example.com/callback-url",
    callbackParams: { key1: "value1", key2: "value2" },
    webhookUrl: "https://example.com/webhook-url",
    webhookParams: { key1: "value1", key2: "value2" },
    language: "EN",
    currency: "USD",
    sandBox: false,
  };

  const headers = {
    "x-api-key": "YOUR_GATEWAY_API_KEY",
  };

  try {
    const response: AxiosResponse<PaymentResponse> = await axios({
      method: "POST",
      baseURL: "https://service.payment4.com",
      url: "/api/v1/payment",
      headers,
      data: payment4Payload,
    });

    const { id, paymentUid, paymentUrl } = response.data;
    return { id, paymentUid, paymentUrl };
  } catch (error) {
    console.error("Payment request failed:", error);
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

export const cs: string = `\nusing System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class PaymentService
{
    private static readonly HttpClient client = new HttpClient();

    public async Task CreatePayment()
    {
        var paymentPayload = new
        {
            amount = 10,
            callbackUrl = "https://example.com/callback-url",
            callbackParams = new { key1 = "value1", key2 = "value2" },
            webhookUrl = "https://example.com/webhook-url",
            webhookParams = new { key1 = "value1", key2 = "value2" },
            language = "EN",
            currency = "USD",
            sandBox = false
        };

        client.DefaultRequestHeaders.Add("x-api-key", "YOUR_GATEWAY_API_KEY");
        
        var response = await client.PostAsync("https://service.payment4.com/api/v1/payment",
            new StringContent(JsonConvert.SerializeObject(paymentPayload), Encoding.UTF8, "application/json"));

        if (response.IsSuccessStatusCode)
        {
            var responseData = JsonConvert.DeserializeObject<dynamic>(await response.Content.ReadAsStringAsync());
            var id = responseData.id;
            var paymentUid = responseData.paymentUid;
            var paymentUrl = responseData.paymentUrl;
            // Process the payment data
        }
        else
        {
            throw new Exception("Payment request failed");
        }
    }
}
`;

export const phpCode: string = `\nfunction createPayment() {
    $url = "https://service.payment4.com/api/v1/payment";
    $headers = [
        "x-api-key: YOUR_GATEWAY_API_KEY",
        "Content-Type: application/json"
    ];
    $payload = [
        "amount" => 10,
        "callbackUrl" => "https://example.com/callback-url",
        "callbackParams" => ["key1" => "value1", "key2" => "value2"],
        "webhookUrl" => "https://example.com/webhook-url",
        "webhookParams" => ["key1" => "value1", "key2" => "value2"],
        "language" => "EN",
        "currency" => "USD",
        "sandBox" => false
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpcode == 200) {
        $responseData = json_decode($response, true);
        // Process the payment data
        $id = $responseData["id"];
        $paymentUid = $responseData["paymentUid"];
        $paymentUrl = $responseData["paymentUrl"];
    } else {
        throw new Exception("Payment request failed");
    }
}
`;

export const curlCode: string = `\ncurl -X POST https://service.payment4.com/api/v1/payment \
-H "x-api-key: YOUR_GATEWAY_API_KEY" \
-H "Content-Type: application/json" \
-d '{
  "amount": 10,
  "callbackUrl": "https://example.com/callback-url",
  "callbackParams": {"key1": "value1", "key2": "value2"},
  "webhookUrl": "https://example.com/webhook-url",
  "webhookParams": {"key1": "value1", "key2": "value2"},
  "language": "EN",
  "currency": "USD",
  "sandBox": false
}'
`;
export const golangCode: string = `\npackage main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func createPayment() error {
    url := "https://service.payment4.com/api/v1/payment"
    payload := map[string]interface{}{
        "amount":        10,
        "callbackUrl":   "https://example.com/callback-url",
        "callbackParams": map[string]string{"key1": "value1", "key2": "value2"},
        "webhookUrl":    "https://example.com/webhook-url",
        "webhookParams": map[string]string{"key1": "value1", "key2": "value2"},
        "language":      "EN",
        "currency":      "USD",
        "sandBox":       false,
    }
    jsonData, err := json.Marshal(payload)
    if err != nil {
        return err
    }

    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
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
        return fmt.Errorf("payment request failed with status: %s", resp.Status)
    }

    var responseData map[string]interface{}
    if err := json.NewDecoder(resp.Body).Decode(&responseData); err != nil {
        return err
    }

    // Process the payment data
    fmt.Println("Payment ID:", responseData["id"])
    fmt.Println("Payment UID:", responseData["paymentUid"])
    fmt.Println("Payment URL:", responseData["paymentUrl"])

    return nil
}

func main() {
    if err := createPayment(); err != nil {
        fmt.Println("Error:", err)
    }
}
`;
export const rustCode: string = `\nuse reqwest::header::{HeaderMap, HeaderValue, CONTENT_TYPE};
use serde_json::json;
use std::error::Error;

async fn create_payment() -> Result<(), Box<dyn Error>> {
    let client = reqwest::Client::new();

    let payload = json!({
        "amount": 10,
        "callbackUrl": "https://example.com/callback-url",
        "callbackParams": {"key1": "value1", "key2": "value2"},
        "webhookUrl": "https://example.com/webhook-url",
        "webhookParams": {"key1": "value1", "key2": "value2"},
        "language": "EN",
        "currency": "USD",
        "sandBox": false
    });

    let mut headers = HeaderMap::new();
    headers.insert("x-api-key", HeaderValue::from_static("YOUR_GATEWAY_API_KEY"));
    headers.insert(CONTENT_TYPE, HeaderValue::from_static("application/json"));

    let response = client
        .post("https://service.payment4.com/api/v1/payment")
        .headers(headers)
        .json(&payload)
        .send()
        .await?;

    if response.status().is_success() {
        let response_data: serde_json::Value = response.json().await?;
        println!("Payment ID: {}", response_data["id"]);
        println!("Payment UID: {}", response_data["paymentUid"]);
        println!("Payment URL: {}", response_data["paymentUrl"]);
    } else {
        eprintln!("Payment request failed with status: {}", response.status());
    }

    Ok(())
}

#[tokio::main]
async fn main() {
    if let Err(e) = create_payment().await {
        eprintln!("Error: {}", e);
    }
}
`;
export const pythonCode: string = `\nimport requests

def create_payment():
    url = "https://service.payment4.com/api/v1/payment"
    headers = {
        "x-api-key": "YOUR_GATEWAY_API_KEY",
        "Content-Type": "application/json"
    }
    payload = {
        "amount": 10,
        "callbackUrl": "https://example.com/callback-url",
        "callbackParams": {"key1": "value1", "key2": "value2"},
        "webhookUrl": "https://example.com/webhook-url",
        "webhookParams": {"key1": "value1", "key2": "value2"},
        "language": "EN",
        "currency": "USD",
        "sandBox": False
    }

    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        response_data = response.json()
        # Process the payment data
        id = response_data["id"]
        payment_uid = response_data["paymentUid"]
        payment_url = response_data["paymentUrl"]
    else:
        raise Exception("Payment request failed")
`;
export const dartCode: string = `\nimport 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> createPayment() async {
  final url = Uri.parse('https://service.payment4.com/api/v1/payment');
  final headers = {
    'x-api-key': 'YOUR_GATEWAY_API_KEY',
    'Content-Type': 'application/json',
  };
  final payload = jsonEncode({
    'amount': 10,
    'callbackUrl': 'https://example.com/callback-url',
    'callbackParams': {'key1': 'value1', 'key2': 'value2'},
    'webhookUrl': 'https://example.com/webhook-url',
    'webhookParams': {'key1': 'value1', 'key2': 'value2'},
    'language': 'EN',
    'currency': 'USD',
    'sandBox': false,
  });

  final response = await http.post(url, headers: headers, body: payload);

  if (response.statusCode == 200) {
    final responseData = jsonDecode(response.body);
    // Process the payment data
    print('Payment ID: \${responseData['id']}');
    print('Payment UID: \${responseData['paymentUid']}');
    print('Payment URL: \${responseData['paymentUrl']}');
  } else {
    throw Exception('Payment request failed');
  }
}

void main() {
  createPayment().catchError((error) {
    print('Error: $error');
  });
}
`;
