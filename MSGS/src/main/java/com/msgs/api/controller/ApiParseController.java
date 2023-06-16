package com.msgs.api.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.io.IOException;

@RestController
@RequestMapping(value = "api")
@RequiredArgsConstructor
public class ApiParseController {
    @Value("${tourApi.decodingKey}")
    private String decodingKey;

    @GetMapping(value = "keyword")
    public void searchKeyword() throws IOException {
        String keyword = "경복궁";
        int contentTypeId = 12;
        /*
        https://apis.data.go.kr/B551011/KorService1/searchKeyword1
        ?MobileOS=ETC
        &MobileApp=schear%20test
        &keyword=%EA%B2%BD%EB%B3%B5%EA%B6%81
        &contentTypeId=12
        &serviceKey=
         */

        StringBuilder urlBuilder = new StringBuilder("https://apis.data.go.kr/B551011/KorService1/searchKeyword1");
        urlBuilder.append("?" + URLEncoder.encode("MobileOS", "UTF-8") + "=" + URLEncoder.encode("ETC", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("MobileApp", "UTF-8") + "=" + URLEncoder.encode("msgs", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("keyword", "UTF-8") + "=" + URLEncoder.encode(keyword, "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("contentTypeId", "UTF-8") + "=" + contentTypeId);
        urlBuilder.append("&" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + decodingKey);

        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;

        System.out.println(url);

        //getResponseCode가 200이상 300이하일때는 정상적으로 작동합니다.
        if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }

        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        url =null;
        //StringBuilder로 위에 파라미터 더 한값을 toString으로 불러옵니다.
        //그리고 println으로 확인을 하면 xml형식이 나오게됩니다.
        System.out.println(sb.toString());

        JSONObject obj = XML.toJSONObject(sb.toString());

        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        System.out.println(obj);
        JSONObject item = items.getJSONObject("item");
        System.out.println(item);
    }

    @GetMapping(value = "detail")
    public void detailCommon1() throws IOException {

        //----------------------------
        int contentId = 126508;
        int contentTypeId = 12;
        //----------------------------

        StringBuilder urlBuilder = new StringBuilder("https://apis.data.go.kr/B551011/KorService1/detailCommon1");
        urlBuilder.append("?" + URLEncoder.encode("MobileOS", "UTF-8") + "=" + URLEncoder.encode("ETC", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("MobileApp", "UTF-8") + "=" + URLEncoder.encode("detailSearch", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("contentId", "UTF-8") + "=" + contentId);
        urlBuilder.append("&" + URLEncoder.encode("contentTypeId", "UTF-8") + "=" + contentTypeId);
        urlBuilder.append("&" + "defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y");
        urlBuilder.append("&" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + decodingKey);

        //
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;

        System.out.println(url);

        //getResponseCode가 200이상 300이하일때는 정상적으로 작동합니다.
        if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }

        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        url =null;
        //StringBuilder로 위에 파라미터 더 한값을 toString으로 불러옵니다.
        //그리고 println으로 확인을 하면 xml형식이 나오게됩니다.
        System.out.println(sb.toString());

        JSONObject obj = XML.toJSONObject(sb.toString());

        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        System.out.println(obj);
        JSONObject item = items.getJSONObject("item");
        System.out.println(item);
    }


}