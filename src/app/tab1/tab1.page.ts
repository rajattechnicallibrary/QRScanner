import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

declare let window: any;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  encodedData = '';
  QRSCANNED_DATA: string;
  isOn = false;
  scannedData: {};
  constructor(
    private barcodeScanner: BarcodeScanner,
    public toastController: ToastController,

  ) {
  }
  toggle() {

    let options = {
      prompt: "Developed By Rajat Gupta (Technical Library)",
      showFlipCameraButton:true,
      showTorchButton:true,
      disableSuccessBeep:false,
      torchOn:false,
    }

    this.barcodeScanner.scan(options).then(barcodeData => {
      this.scannedData = barcodeData.text
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });

  }



}
