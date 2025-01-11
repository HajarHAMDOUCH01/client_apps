<?php 
require_once __DIR__ . '/../vendor/autoload.php';
use GuzzleHttp\Client;

class TranslateClient{
    private $client;

    public function __construct(){
        $this->client = new Client([
            'base_uri' => 'http://localhost:8080',
             'timeout' => 5.0
        ]);
    }

    public function translate($text, $sender){
        try{
            $response = $this->client->post('/jakartaee-rest-project/rest/translate/test', [
                'json' => [
                    'text' => $text,
                    'sender' => $sender
                ]
            ]);
            return json_decode($response->getBody(), true);//the method returns an associative array
        }
        catch(Exception $e){
            return ['error' => $e->getMessage()];
        }
    }
}