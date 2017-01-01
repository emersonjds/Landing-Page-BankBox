<?php

require_once 'DB_Connect.php';

// No direct access to this file 
define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'); 
if(!IS_AJAX) {
    die('Restricted access');
}

if (!isset($_POST) || empty($_POST)) {
    // Mata o script
    exit;
}

date_default_timezone_set('America/Sao_Paulo');
$dataAtual = date('Y-m-d H:i:s');

$db = new DB_Connect();
$conn = $db->connect();

$plataforma = mysql_real_escape_string($_POST['plataforma'], $conn);

$user_ip = getUserIP();

$result = mysql_query("INSERT INTO tblplataforma VALUES (NULL,'" . $plataforma . "', '" . $dataAtual . "', '" . $user_ip . "')") or die(mysql_error());
$confirmacao = mysql_affected_rows();


if($confirmacao >= 1){
    $dados = array("sucesso");
    echo json_encode($dados);
} else {
    $dados = array("problema");
    echo json_encode($dados);
}

function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}

?>