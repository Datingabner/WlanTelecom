// Tipos para la configuración del servidor (opcional)
export interface LibreSpeedServerConfig {
  serverName: string;
  ping?: number;
  downloadSpeed?: number;
  uploadSpeed?: number;
}

// Resultados de la prueba de velocidad
export interface SpeedTestResults {
  ping: number;
  jitter: number;
  download: number;
  upload: number;
  ip?: string;
}