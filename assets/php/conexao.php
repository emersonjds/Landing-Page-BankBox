<?php

$servidor = 'localhost';
$usuario = 'root';
$senha = 'usbw';
$banco = 'bankbox';


// Conecta-se ao banco de dados MySQL
$connAdmin = new mysqli($servidor, $usuario, $senha, $banco);
mysqli_set_charset($connAdmin, "utf8");

if ($connAdmin->connect_error) {
  trigger_error('Database connection failed: '  . $connAdmin->connect_error, E_USER_ERROR);
}

// Turn off error reporting
//error_reporting(0); oculta erros da tela habilitar;
?>