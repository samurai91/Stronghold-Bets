<?php 

$email = $_POST['user_email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 1;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '0713686502@mail.ru';                 // Наш логин
$mail->Password = 'pyeWB6SVmc7UZfHTAsVS';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('0713686502@mail.ru', 'Casino');   // От кого письмо 
$mail->addAddress('1991.samurai@mail.ru');     // Куда отправлять
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новый эмейл';
$mail->Body    = $email;
$mail->AltBody = 'что-то пошло не так';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>