<?php
session_start();

$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $username = trim($_POST["username"] ?? "");
  $password = $_POST["password"] ?? "";

  // TEMP (for learning). We'll connect DB later.
  if ($username === "admin" && $password === "1234") {
    session_regenerate_id(true);
    $_SESSION["admin_logged"] = true;
    $_SESSION["admin_username"] = $username;

    header("Location: dashboard.php");
    exit;
  } else {
    $error = "Invalid username or password.";
  }
}
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Admin Login</title>
</head>
<body>
  <h2>Admin Login</h2>

  <?php if ($error): ?>
    <p style="color:red;"><?php echo htmlspecialchars($error); ?></p>
  <?php endif; ?>

  <form method="post">
    <label>Username</label><br>
    <input name="username" required><br><br>

    <label>Password</label><br>
    <input type="password" name="password" required><br><br>

    <button type="submit">Login</button>
  </form>
</body>
</html>
