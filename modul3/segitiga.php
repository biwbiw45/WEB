<?php

// Fungsi untuk membuat segitiga sama sisi
function buatSegitiga($tinggi) {
  for ($i = 0; $i < $tinggi; $i++) {
    for ($j = 0; $j < $tinggi - $i - 1; $j++) {
      echo "&nbsp;"; // Spasi untuk membentuk segitiga
    }
    for ($k = 0; $k < 2 * $i + 1; $k++) {
      echo "*";
    }
    echo "<br>";
  }
}

// Segitiga 1 - normal
echo "1. SEGITIGA SAMA SISI<br>";
buatSegitiga(5); // Tinggi segitiga

echo "<br><br>";

// Segitiga 2 - terbalik
echo "2. SEGITIGA SAMA SISI TERBALIK<br>";
for ($i = 4; $i >= 0; $i--) { // Perulangan terbalik
  for ($j = 0; $j < $i; $j++) {
    echo "&nbsp;"; // Spasi
  }
  for ($k = 0; $k < 2 * (4 - $i) + 1; $k++) {
    echo "*";
  }
  echo "<br>";
}

?>