// Code generated by protoc-gen-volcengine-sdk
// source: updateRelaySourceV2
// DO NOT EDIT!
<?php
require('../../vendor/autoload.php');

$client = Volc\Service\Live\Live::getInstance();
$client->setAccessKey('your ak');
$client->setSecretKey('your sk');

$request = new Volc\Service\Live\Models\Request\UpdateRelaySourceRequest();
$request->setVhost("your Vhost");
$request->setApp("your App");
$request->setRelaySourceDomainList([new Volc\Service\Live\Models\Business\RelaySourceDomainList()]);
$request->setRelaySourceParams([new Volc\Service\Live\Models\Business\RelaySourceParams()]);
$request->setRelaySourceProtocol("your RelaySourceProtocol");


$response = new Volc\Service\Live\Models\Response\UpdateRelaySourceResponse();
try {
    $response = $client->updateRelaySourceV2($request);
} catch (Exception $e) {
    echo $e, "\n";
} catch (Throwable $e) {
    echo $e, "\n";
}
if ($response != null && $response->getResponseMetadata() != null && $response->getResponseMetadata()->getError() != null) {
    echo $response->getResponseMetadata()->getError()->serializeToJsonString(), "\n";
} else {
    echo $response->serializeToJsonString(), "\n";
}
