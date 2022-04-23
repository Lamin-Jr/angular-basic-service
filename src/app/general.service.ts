interface NewAccountInterface {
  accountName: string;
  accountStatus: string;
}
interface StatusChangeInterface {
  id: string | number;
  newStatus: string;
}

export interface AccountModel {
  name: string;
  status: string;
}

export class GeneralService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  logStatus(status: string) {
    console.log("A server status changed, new status: " + status);
  }

  onCreateAccount(accountAdded, newAccount: NewAccountInterface) {
    accountAdded.emit({
      name: newAccount.accountName,
      status: newAccount.accountStatus,
    });
    console.log(
      "A server status changed, new status: " + newAccount.accountStatus
    );
  }

  onChangeStatusRequest(statusChanged, statusData: StatusChangeInterface) {
    statusChanged.emit({ id: statusData.id, newStatus: statusData.newStatus });
    console.log("A server status changed, new status: " + statusData.newStatus);
  }
}
