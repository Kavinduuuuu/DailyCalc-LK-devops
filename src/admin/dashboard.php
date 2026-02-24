<?php
require_once "auth.php";
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Admin Dashboard</title>
</head>
<body>
  <h2>Dashboard</h2>
  <p>Welcome, <?php echo htmlspecialchars($_SESSION["admin_username"] ?? "Admin"); ?> ✅</p>

  <a href="logout.php">Logout</a>
</body>
</html>
