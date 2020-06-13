import {Injectable} from '@angular/core';
import {Toast, ToasterService} from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toasterService: ToasterService) {

  }


  public success(bodyText: string) {
    const toast: Toast = {
      type: 'success',
      body: bodyText,
      showCloseButton: false,
      closeHtml: '<i class="fa fa-close"></i>'
    };

    this.toasterService.pop(toast);
  }

  public error(bodyText: string) {
    const toast: Toast = {
      type: 'error',
      body: bodyText,
      showCloseButton: false,
      closeHtml: '<i class="fa fa-close"></i>'
    };

    this.toasterService.pop(toast);
  }

  public info(bodyText: string) {
    const toast: Toast = {
      type: 'info',
      body: bodyText,
      showCloseButton: true,
      closeHtml: '<i class="fa fa-close"></i>'
    };

    this.toasterService.pop(toast);
  }

  alert(message) {
    alert(message);
  }

  confirm(message) {
    return confirm(message);
  }
}
