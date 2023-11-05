<?php

$headers = 'Content-type: text/plain; charset="utf-8"';

$username = $_POST['username'];
$usermail = $_POST['usermail'];
$userphone = $_POST['userphone'];
$usertelegram = $_POST['usertelegram'];

$headers = 'MiME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset="utf-8"';

$to = 'kolomichenkoekaterina@gmail.com';
$subject = 'Заявка с сайта';
$message = "
<html>
 <table>
     <tr>
         <td>Имя</td>
         <td>$username</td>
     </tr>
     <tr>
         <td>Емайл</td>
         <td>$usermail</td>
     </tr>
     <tr>
         <td>Телефон</td>
         <td>$userphone</td>
     </tr>
     <tr>
         <td>Телеграмм</td>
         <td>$usertelegram</td>
     </tr>
 </table>
</html>
";

mail($to, $subject, $message, $headers);

echo 'отправка формы';

header("location: http://kateriqr.beget.tech/dev/form/pages/success.html")
?>