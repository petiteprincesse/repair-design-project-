<?php

$userName = $_POST['userName'];
$userEmail= $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];
  

require 'phpmailer/Exception.php';
require 'phpmailer/PHPmailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPmailer\PHPmailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'evangelina.btfl@gmail.com';                     // SMTP username
    $mail->Password   = 'SoloLearn201406';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('evangelina.btfl@gmail.com', 'Евангелина');
    $mail->addAddress('olgavm2007@yandex.ru');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, телефон: ${userPhone}, почта: ${userEmail}, вопрос: ${userQuestion}";

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено. Есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }

} 

catch (Exception $e) {
      echo "Письмо не отправлено. Есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }