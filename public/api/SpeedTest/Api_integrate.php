<?php
header("Access-Control-Allow-Origin: *");
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Speedtest API</title>
  <script type="text/javascript" src="speedtest.js"></script>
  <style>
    html{
      width: min-content;
      height: min-content;

    }
    body {
      width: min-content;
      height: min-content;
    }
    .card{
        display: none;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .metric {
      background: rgba(255, 255, 255, 0.05);
      padding: 1rem;
      border-radius: 0.75rem;
    }

    .button-container {
      text-align: center;
    }

    .button {
      padding: 0.75rem 2rem;
      background: linear-gradient(to right, #22d3ee, #22c55e);
      color: white;
      font-weight: bold;
      border-radius: 0.5rem;
      border: none;
      box-shadow: 0 4px 12px rgba(0, 255, 255, 0.2);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .button:hover {
      background: linear-gradient(to right, #06b6d4, #16a34a);
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <div class="card" style="display:hide;">
    <div class="grid">
      <div class="metric">
        <h4>Ping</h4>
        <p id="ping"></p>
      </div>
      <div class="metric">
        <h4>Descarga</h4>
        <p id="download"></p>
      </div>
      <div class="metric">
        <h4>Subida</h4>
        <p id="upload"></p>
      </div>
      <div class="metric">
        <h4>IP</h4>
        <p id="ip"></p>
      </div>
    </div>
</div>
<div class="button-container">
  <button class="button" id="btnStart" onclick="startTest()">Iniciar Test</button>
</div>

  <script>
    var s = new Speedtest();

    function startTest() {
     s.onupdate = function (data) {
  document.getElementById('download').textContent = data.dlStatus + ' Mbps';
  document.getElementById('upload').textContent = data.ulStatus + ' Mbps';
  document.getElementById('ping').textContent = data.pingStatus + ' ms, ' + data.jitterStatus + ' ms jitter';
  document.getElementById('ip').textContent = data.clientIp;
  document.getElementById('btnStart').disabled = true;
  document.getElementById('btnStart').textContent = 'Probando...';


  // 🚀 Enviar datos al padre
  window.parent.postMessage({
    type: 'speedtest-results',
    download: data.dlStatus,
    upload: data.ulStatus,
    ping: data.pingStatus,
    jitter: data.jitterStatus,
    ip: data.clientIp
  }, '*'); // puedes poner la URL segura del origen si lo prefieres
};
      s.start();
      s.onend = function () {
        document.getElementById('btnStart').disabled = false;
        document.getElementById('btnStart').textContent = 'Iniciar Test';
      };
    }
  </script>
</body>
</html>