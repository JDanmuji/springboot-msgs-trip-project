package com.msgs.user.service;

import org.json.JSONArray;
import org.json.JSONObject;

//import net.sf.json.JSONArray;
//import net.sf.json.JSONObject;
//import org.json.simple.JSONArray;
//import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.crypto.Mac;

import javax.crypto.spec.SecretKeySpec;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Slf4j
@RequiredArgsConstructor
@Service
public class SmsService {

	@Value("${smsApi.naver-cloud-sms.accessKey}")
	private String accessKey;

	@Value("${smsApi.naver-cloud-sms.secretKey}")
	private String secretKey;

	@Value("${smsApi.naver-cloud-sms.serviceId}")
	private String serviceId;

	@Value("${smsApi.naver-cloud-sms.senderPhone}")
	private String from;
	
	// 시크릿 key 암호화
    private String makeSignature(String url, String timestamp, String method) {
        String space = " ";                    // one space
        String newLine = "\n";                 // new line

        String message = new StringBuilder()
                .append(method)
                .append(space)
                .append(url)
                .append(newLine)
                .append(timestamp)
                .append(newLine)
                .append(accessKey)
                .toString();

        SecretKeySpec signingKey;
        String encodeBase64String;
        
        try {
            signingKey = new SecretKeySpec(secretKey.getBytes("UTF-8"), "HmacSHA256");
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(signingKey);
            byte[] rawHmac = mac.doFinal(message.getBytes("UTF-8"));
            encodeBase64String = Base64.getEncoder().encodeToString(rawHmac);
//            encodeBase64String = Base64.encodeBase64String(rawHmac);
        } catch (UnsupportedEncodingException e) {
            encodeBase64String = e.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        } catch (InvalidKeyException e) {
            throw new RuntimeException(e);
        }
        
        return encodeBase64String;
	}
	
	// 문자 전송
	public void sendSms(String to, String numStr) throws ParseException {
		System.out.println("sendSms 메소드" + numStr);
		
		String hostNameUrl = "https://sens.apigw.ntruss.com";     		// �샇�뒪�듃 URL
        String requestUrl= "/sms/v2/services/";                   		// �슂泥� URL
        String requestUrlType = "/messages";
        String method = "POST";											// �슂泥� method
        String timestamp = Long.toString(System.currentTimeMillis()); 	// current timestamp (epoch)
        requestUrl += serviceId + requestUrlType;
        String apiUrl = hostNameUrl + requestUrl;

        JSONObject toJson = new JSONObject();
        JSONArray toArr = new JSONArray();
        JSONObject bodyJson = new JSONObject();
        JSONParser parser = new JSONParser();
        
        Object obj = parser.parse( to );
//        toJson.put("to", obj);
//        toArr.put(toJson);
        toArr.put(obj);

        bodyJson.put("type", "SMS");
        bodyJson.put("from", from);
        bodyJson.put("content", "마실가실 휴대폰 등록 인증번호 [" + numStr + "]");
        bodyJson.put("messages", toArr);

        String body = bodyJson.toString();

        try {
            URL url = new URL(apiUrl);

            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setUseCaches(false);
            con.setDoOutput(true);
            con.setDoInput(true);
            con.setRequestProperty("content-type", "application/json");
            con.setRequestProperty("x-ncp-apigw-timestamp", timestamp);
            con.setRequestProperty("x-ncp-iam-access-key", accessKey);
            con.setRequestProperty("x-ncp-apigw-signature-v2", makeSignature(requestUrl,timestamp, method));
            con.setRequestMethod(method);
            con.setDoOutput(true);
            DataOutputStream wr = new DataOutputStream(con.getOutputStream());

            wr.write(body.getBytes());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader br;
            System.out.println("responseCode" +" " + responseCode);
            if(responseCode == 202) {
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }

            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();

            System.out.println(response.toString());

        } catch (Exception e) {
            System.out.println(e);
        }
	}
}