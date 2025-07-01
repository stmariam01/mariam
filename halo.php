<?php
if (isset($_GET['nama'])) {
    $nama = htmlspecialchars($_GET['nama']); // Menghindari XSS
    echo "Halo, $nama!";
} else {
    echo "Halo, Siti Mariam?";
}
?>
