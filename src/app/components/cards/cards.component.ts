import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() dados: any;
  @Output() sendIdBtn: EventEmitter<any> = new EventEmitter();


  ngOnInit(): void {
  }

  sendDelete(id: any) {
    this.sendIdBtn.emit(id);
  }
  constructor(public dialog: MatDialog) {}

  openDialog(dados: any) {
    const dialogRef = this.dialog.open(DetailsComponent, {data: dados});
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
