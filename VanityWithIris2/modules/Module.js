function manualInit()
{
      var appkey = "8ac138bd2db20364647ef585d750a561";
      var appsecret = "9e4e143982f613aa7b212163c9b24a98";
      var serviceUrl = "https://100000005.auth.dev-hclvoltmx.net/appconfig";
      var initOptions = {"vanityUrl": "foundry01.dev-hclvoltmx.com"}; 
      // Get an instance of SDK
      var client = new voltmx.sdk();
      // initialize SDK
  
      client.init(appkey, appsecret, serviceUrl, function(response) {
         alert("Init success: " + JSON.stringify(response));
         voltmx.print("Init success: " + JSON.stringify(response));
      }, function(error) {
         alert("Init failed: " + JSON.stringify(error));
         voltmx.print("Init failed: " + JSON.stringify(error));
      }, initOptions);
}

function identityService()
{
      var serviceName = "VanityIdentityTesting"; 
      var client = voltmx.sdk.getCurrentInstance();
      var identitySvc = client.getIdentityService(serviceName);
      var options = {};
      options["userid"] = "admin@hcl.com";
      options["password"] = "Hcl@1234"; 
      identitySvc.login(options, function(response) {
          alert("Login Success: " + JSON.stringify(response));
          voltmx.print("Login Success: " + JSON.stringify(response));
      }, function(error) {
          alert("Login Failure: " + JSON.stringify(error));
          voltmx.print("Login Failure: " + JSON.stringify(error));
      });
}


function integrationService()
{
      var serviceName = "CopyVanityIntegrationSvc";
      var client = voltmx.sdk.getCurrentInstance();
      var integrationSvc = client.getIntegrationService(serviceName);
      var operationName = "VanityInt";
      var params = {};
      var headers = {}; 
      var options = {};
	  integrationSvc.invokeOperation(operationName, headers, params, function(response) {
      alert("Integration Service Response is: " + JSON.stringify(response));
      voltmx.print("Integration Service Response is: " + JSON.stringify(response));
      }, function(error) {
          alert("Integration Service Failure:" + JSON.stringify(error));
          voltmx.print("Integration Service Failure:" + JSON.stringify(error));
      }, options);
}

function orchestrationService()
{
      var serviceName = "CopyVanityOrchestractionSvc";
      var client = voltmx.sdk.getCurrentInstance();
      var orchestrationSvc = client.getIntegrationService(serviceName);
      var operationName = "VanityOrchestration";
      var params = {};
      var headers = {}; 
      var options = {};
	  orchestrationSvc.invokeOperation(operationName, headers, params, function(response) {
      alert("Orchestration Service Response is: " + JSON.stringify(response));
      voltmx.print("Orchestration Service Response is: " + JSON.stringify(response));
      }, function(error) {
          alert("Orchestration Service Failure:" + JSON.stringify(error));
          voltmx.print("Orchestration Service Failure:" + JSON.stringify(error));
      }, options);
}

function objectService()
{
      var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("CopyVanityObjectSvc ", {
        "access": "online"
      });
      var dataObject = new voltmx.sdk.dto.DataObject("vanityObject");
      var options = {
          "dataObject": dataObject
      };
      objSvc.fetch(options,
          function(response) {
            alert("Object Service Response is: " + JSON.stringify(response));
            voltmx.print("Object Service Response is: " + response["records"]);
          },
          function(error) {
            alert("Object Service Failure: " + JSON.stringify(response));
            voltmx.print("Object Service Failure: " + JSON.stringify(error));
          });
}

function rulesService()
{
      var serviceName = "CopyVanityRulesSvc";
      var client = voltmx.sdk.getCurrentInstance();
      var rulesSvc = client.getIntegrationService(serviceName);
      var operationName = "VanityRule";
      var params = {};
      var headers = {}; 
      var options = {};
      rulesSvc.invokeOperation(operationName, headers, params, function(response) {
        alert("Rules Service Response is: " + JSON.stringify(response));
        voltmx.print("Rules Service Response is: " + JSON.stringify(response));
      }, function(error) {
          alert("Rules Service Failure:" + JSON.stringify(error));
          voltmx.print("Rules Service Failure:" + JSON.stringify(error));
      }, options);
}

function setUserId()
{
  voltmx.setUserID("1234");
  alert("userid configured successfully");
}

function sendEvent()
{
  KNYMetricsService.sendEvent("FormEntry", "frmHome", "frmHome", "widgetID", "flowTag", {
    "key1": "value1"
});
  alert("Events sent successfully");
}

function sendCustomMetrics()
{
    KNYMetricsService.sendCustomMetrics("formID", {
    "metric": "metricdata"
     });
  alert("Custom metrics sent successfully");
}

function reportHandledException()
{
  var JSONObj = { "exceptionfile" : "ExeceptionFile1",
                 "exceptionmethod" : "searchFile",
                 "exceptionline" : "32",
                 "flowTag" : "Login Flow",
                 "formID" : "Form 1",
                 "widgetID" : "Widget 1"};
  try{
    KNYMetricsService.reportHandledException("1234", "SpecificException", "custom exception message", JSON.stringify(JSONObj));
    alert("Exception reported successfully");
  }
  catch(err)
  {
    alert(JSON.stringify(err));
  }
}

function  reportError()
  {
    var JSONObj = {"errfile" : "ErrorFile1",
                   "errmethod":"searchFile",
                   "errline" : "32",
                   "flowTag": "Login Flow",
                   "formID" : "Form 1",
                   "widgetID" : "Widget 1"};  
    try{
      KNYMetricsService.reportError("400", "INVALID", "Invalid request",JSON.stringify(JSONObj));
      alert("Error reported successfully");
    }
    catch(err)
    {
      alert(JSON.stringify(err));
    }
  }

function flushEvents()
{
  KNYMetricsService.flushEvents();
  alert("Events flushed successfully");
}