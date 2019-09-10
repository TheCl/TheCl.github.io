<?php
$to = "mirigr96@bk.ru"; // емайл получателя данных из формы 
$tema = "Заявка"; // тема полученного емайла 
$message = "Имя: ".$_POST['Name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "Номер телефона: ".$_POST['Telephone']."<br>"; //полученное из формы name=phone
$message .= "Текст заявки: ".$_POST['Text']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;
?>