import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[GeneralService]
})
export class AccountComponent {
  @Input() accountsArray: {name: string, status: string}[];
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private generalService: GeneralService) {
  
  }


  onSetTo(status: string, id: number | string) {
    this.generalService.onChangeStatusRequest(this.statusChanged, {id: id, newStatus: status})
  }

  onDelete(event, i){
    let acountFiltered =  this.accountsArray.filter((state, index) => i !== index);
    this.accountsArray = acountFiltered
    
  }
}
