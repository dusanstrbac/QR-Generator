import QRCode from 'qrcode';
import './style.css';

// Singleton pattern za kontrolu downloada
class QRDownloader {
  private static instance: QRDownloader;
  private downloadInProgress = false;
  private currentUrl: string | null = null;
  
  private constructor() {}
  
  public static getInstance(): QRDownloader {
    if (!QRDownloader.instance) {
      QRDownloader.instance = new QRDownloader();
    }
    return QRDownloader.instance;
  }
  
  public async generateQR(text: string, container: HTMLElement): Promise<void> {
    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    await QRCode.toCanvas(canvas, text, {
      errorCorrectionLevel: 'H',
      width: 256,
      margin: 2,
    });
    
    this.currentUrl = await QRCode.toDataURL(text, { width: 256 });
  }
  
  public download(): void {
    if (this.downloadInProgress || !this.currentUrl) return;
    
    this.downloadInProgress = true;
    const link = document.createElement('a');
    link.href = this.currentUrl;
    link.download = `qr-code-${Date.now()}.png`;
    
    link.onclick = () => {
      setTimeout(() => {
        document.body.removeChild(link);
        this.downloadInProgress = false;
      }, 100);
    };
    
    document.body.appendChild(link);
    link.click();
  }
}

// Inicijalizacija
const qrDownloader = QRDownloader.getInstance();
const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
const inputText = document.getElementById('inputText') as HTMLInputElement;
const qrcodeDiv = document.getElementById('qrcode') as HTMLDivElement;
const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;

// Event listeneri sa debounce-om
generateBtn.addEventListener('click', async () => {
  const text = inputText.value.trim();
  if (!text) {
    alert('Unesite tekst za QR kod!');
    return;
  }
  
  try {
    await qrDownloader.generateQR(text, qrcodeDiv);
    downloadBtn.style.display = 'inline-block';
  } catch (error) {
    console.error('Greška:', error);
    alert('Došlo je do greške pri generisanju QR koda');
  }
});

// Jedinstveni event listener
if (!downloadBtn.dataset.listenerAttached) {
  downloadBtn.addEventListener('click', () => {
    qrDownloader.download();
  });
  downloadBtn.dataset.listenerAttached = 'true';
}