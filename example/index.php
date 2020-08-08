<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<form method="post" action="">
<input type="text" name="to" placeholder="введите email">
<br><br>
<input type="text" name="subject" placeholder="введите заголовок письма">
<br><br>
<textarea type="text" name="message" placeholder="введите текст письма" rows="5"></textarea>
<br><br>
<input type="submit" value="Enter!"><br><br>
</form>
<br><br>
 
<?php
$headers =	'From: scream931@mail.ru' . "\r\n" .
			'Reply-To: scream931@mail.ru' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
if (isset($_POST['to']) && isset($_POST['subject']) && isset($_POST['message']))
	if (mail($_POST['to'], $_POST['subject'], $_POST['message'], $headers)) {
		echo '<font color=green><b>письмо было принято для передачи</b></font>';
	} else {
		echo '<font color=red><b>что-то пошло не так...</b></font>';
	}
?>
</body>
</html>
