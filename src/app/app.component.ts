import { Component } from '@angular/core';
import { GeneralService, AccountModel } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeneralService]
})
export class AppComponent {
  constructor(private generalService: GeneralService){}
  accounts: AccountModel[]= [];

  ngOnInit(){
    this.accounts = this.generalService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
