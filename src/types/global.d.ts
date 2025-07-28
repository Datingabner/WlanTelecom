declare interface Window {
    Speedtest: {
      new (): SpeedtestInstance;
    };
  }
  
  interface SpeedtestInstance {
    onupdate: (data: SpeedtestData) => void;
    onend: () => void;
    start: () => void;
  }
  
  interface SpeedtestData {
    dlStatus?: number;
    ulStatus?: number;
    pingStatus?: number;
    jitterStatus?: number;
  }