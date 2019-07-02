import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceItem, InvoiceItemFactory } from '../model/item';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-invoice-positions',
  templateUrl: './invoice-positions.component.html',
  styleUrls: ['./invoice-positions.component.scss']
})
export class InvoicePositionsComponent implements OnInit {

  @Input()
  public positions: InvoiceItem[];

  @Output()
  itemsChanged: EventEmitter<InvoiceItem[]> = new EventEmitter();

  private invoiceItemFactory: InvoiceItemFactory;

  constructor() {
    this.invoiceItemFactory = new InvoiceItemFactory();
  }

  ngOnInit() {
  }

  addPosition(): void {
    this.positions.push(this.invoiceItemFactory.newInvoiceItem());
    this.itemsChanged.next(this.positions);
  }

  removePosition(position: InvoiceItem): void {
    this.positions = this.positions.filter(p => p.id !== position.id);
    this.itemsChanged.emit(this.positions);
  }

  handlePositionChanged(positon: InvoiceItem): void {
    this.itemsChanged.emit(this.positions);
  }
}
