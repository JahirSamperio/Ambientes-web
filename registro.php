<?php
phpinfo();
// Conexión a la base de datos
$servername = "MATEBOOKD-16";
$username = "root@localhost";
$password = "Cervantes1";
$dbname = "Web";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contrasena = $_POST['pass'];

// Validar los datos (puedes agregar más validaciones aquí)
if (empty($nombre) || empty($correo) || empty($contrasena)) {
    echo "Por favor, complete todos los campos.";
    exit;
}

// Preparar la consulta SQL
$sql = "INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nombre, $correo, $contrasena);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Registro exitoso.";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>