import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailsModalComponent} from "./details-modal/details-modal.component";
import {ConfirmationModalComponent} from "./confirmation-modal/confirmation-modal.component";
import {errorToast} from "../../toast";

export abstract class ExpandableAndRemovable {

  constructor(private modalService: NgbModal) {
  }

  abstract getKeys();

  abstract getValues();

  abstract getName();

  abstract onRemove();

  openDetailsModal() {
    const modalRef = this.modalService.open(DetailsModalComponent);
    modalRef.componentInstance.keys = this.getKeys();
    modalRef.componentInstance.values = this.getValues();
    modalRef.componentInstance.title = this.getName();
  }

  openRemoveModal() {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.content = `Are you sure that you want to remove this ${this.getName().toLowerCase()}?`;
    modalRef.result
      .then((result) => {if(result) this.onRemove()})
      .catch(error => errorToast('Could not remove reservation'))
  }
}
