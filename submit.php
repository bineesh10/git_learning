<?php
header('Content-Type: application/json');

// Get raw POST data
$data = json_decode(file_get_contents('php://input'), true);

$countryKey = strtolower($data['country']);
$languageInput = strtolower($data['language']);

// Load data from JSON file
$jsonData = json_decode(file_get_contents('data.json'), true);

if (isset($jsonData[$countryKey])) {
    $countryData = $jsonData[$countryKey];
    
    $response = [
        "country" => ucfirst($countryKey),
        "language" => ucfirst($languageInput),
        "continent" => $countryData["continent"],
        "population" => $countryData["population"]
    ];
    echo json_encode($response);
} else {
    echo json_encode(["error" => "Invalid country selected."]);
}
