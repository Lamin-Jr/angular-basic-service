import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { GeneralService } from "../general.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [GeneralService],
})
export class NewAccountComponent {
  constructor(private generalService: GeneralService) {}
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  @ViewChild("accountName") accountName: ElementRef;
  @ViewChild("status") status: ElementRef;

  onCreateAccount() {
    this.generalService.onCreateAccount(this.accountAdded, {
      accountName: this.accountName.nativeElement.value,
      accountStatus: this.status.nativeElement.value,
    });
  }
}
