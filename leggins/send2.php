<?php
$data2 = json_decode($_POST['data']);
$data =$_POST['data'];
$LSdata=$_POST['LCdata'];
$productname=$_POST['productname'];
$price=$_POST['price'];
$size=$_POST['size'];
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$email=$_POST['youremail'];
$phone=$_POST['yourphone'];
$sity=$_POST['sity'];
$message=$_POST['yourmessage'];
$price=htmlspecialchars($price);
$size=htmlspecialchars($size);
$firstname = htmlspecialchars($firstname);
$lastname = htmlspecialchars($lastname);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$sity = htmlspecialchars($sity);
$message = htmlspecialchars($message);
$productname=trim($productname);
$price=trim($price);
$size=trim($size);
$firstname = trim($firstname);
$lastname =  trim($lastname);
$email = trim($email);
$phone =  trim($phone);
$sity = trim($sity);
$message = trim($message);
if (mail("leggins93@ukr.net", "Заказ с сайта",". заказ: .$data.\n".. инфо: .$LSdata." ,"From: admin@zzshop.zzz.com.ua \r\n"))
  {
mail($email, "Заказ принят", "$firstname,благодарим за покупку $productname.\n". "В ближайшее время наш менеджер свяжется с вами для уточнения деталей" ,"From: admin@zzshop.zzz.com.ua \r\n");
 require('index.html');  
} else { 
     echo "при отправке сообщения возникли ошибки";
}
?>