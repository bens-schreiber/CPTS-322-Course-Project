# PollPalApi.PollApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pollAnswerRetrieve**](PollApi.md#pollAnswerRetrieve) | **GET** /api/poll/{poll_id}/answer | 
[**pollNextQuestionCreate**](PollApi.md#pollNextQuestionCreate) | **POST** /api/poll/next-question | 
[**pollSetAcceptingAnswerPartialUpdate**](PollApi.md#pollSetAcceptingAnswerPartialUpdate) | **PATCH** /api/poll/set-accepting-answer | 
[**pollSubmitResponseUpdate**](PollApi.md#pollSubmitResponseUpdate) | **PUT** /api/poll/submit-response | 

<a name="pollAnswerRetrieve"></a>
# **pollAnswerRetrieve**
> Answer pollAnswerRetrieve(poll_id)



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

let apiInstance = new PollPalApi.PollApi();
let poll_id = 56; // Number | 

apiInstance.pollAnswerRetrieve(poll_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_id** | **Number**|  | 

### Return type

[**Answer**](Answer.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pollNextQuestionCreate"></a>
# **pollNextQuestionCreate**
> Poll pollNextQuestionCreate(body)



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

let apiInstance = new PollPalApi.PollApi();
let body = new PollPalApi.PollNextQuestion(); // PollNextQuestion | 

apiInstance.pollNextQuestionCreate(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PollNextQuestion**](PollNextQuestion.md)|  | 

### Return type

[**Poll**](Poll.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pollSetAcceptingAnswerPartialUpdate"></a>
# **pollSetAcceptingAnswerPartialUpdate**
> Poll pollSetAcceptingAnswerPartialUpdate(opts)



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

let apiInstance = new PollPalApi.PollApi();
let opts = { 
  'body': new PollPalApi.PatchedPollSetAcceptingAnswers() // PatchedPollSetAcceptingAnswers | 
};
apiInstance.pollSetAcceptingAnswerPartialUpdate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PatchedPollSetAcceptingAnswers**](PatchedPollSetAcceptingAnswers.md)|  | [optional] 

### Return type

[**Poll**](Poll.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pollSubmitResponseUpdate"></a>
# **pollSubmitResponseUpdate**
> Response pollSubmitResponseUpdate(body)



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

let apiInstance = new PollPalApi.PollApi();
let body = new PollPalApi.PollSubmitResponse(); // PollSubmitResponse | 

apiInstance.pollSubmitResponseUpdate(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PollSubmitResponse**](PollSubmitResponse.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

