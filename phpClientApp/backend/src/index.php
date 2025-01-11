<?php
require_once __DIR__ . '/ApiClient.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json; charset=utf-8');


if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $input = json_decode(file_get_contents('php://input'), true);//turns the json object from the request and decodes it to associative array
    $text = $input['text'] ?? '';
    $sender = $input['sender'] ?? '';

    if($text && $sender){
        $client = new TranslateClient();
        $response = $client->translate($text, $sender);//l'objet client appel la methode translate 
        echo json_encode((array)$response, JSON_UNESCAPED_UNICODE);
    }
    else{
        echo json_encode(['error' => 'Invalid input']);
    }
}
else{
    echo json_encode(['error' => 'Only POST method is supported']);
}