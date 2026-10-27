import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';

window.scanPharmatyBarcode = async function () {
  try {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: 17
    });

    return result?.ScanResult || '';
  } catch (error) {
    console.error('Barcode scan error:', error);
    alert('تعذر مسح الباركود. تأكد من السماح باستخدام الكاميرا.');
    return '';
  }
};
