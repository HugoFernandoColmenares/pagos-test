import { Component } from '@angular/core';
import { PaymentListComponent } from '../payment-list/payment-list.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'pages-main',
  imports: [HeaderComponent, FooterComponent, PaymentListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  protected isShowingForm: boolean = false;
}
