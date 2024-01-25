import { Component, Input } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Text to QrCode Generator';


  constructor(){

  }
  public qrcode: any 
  @Input() public qrcodetext: string = "42"

    generateQrCode(){
       this.qrcode = this.qrcodetext
    }


}
