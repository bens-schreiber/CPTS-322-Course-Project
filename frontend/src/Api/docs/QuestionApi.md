# PollPalApi.QuestionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**questionCreateCreate**](QuestionApi.md#questionCreateCreate) | **POST** /api/question/create | 

<a name="questionCreateCreate"></a>
# **questionCreateCreate**
> Question questionCreateCreate(body)



Creates a question with the provided prompt and answers.

### Example
```javascript
import {PollPalApi} from 'poll_pal_api';
let defaultClient = PollPalApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new PollPalApi.QuestionApi();
let body = new PollPalApi.QuestionCreate(); // QuestionCreate | 

apiInstance.questionCreateCreate(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuestionCreate**](QuestionCreate.md)|  | 

### Return type

[**Question**](Question.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

