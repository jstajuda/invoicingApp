import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceSummary } from '../model/item';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  invoiceSummary: InvoiceSummary;

  constructor() { }

  ngOnInit() {
    this.invoice = {
      saleDate: new Date(),
      items: []
    }

    this.invoiceSummary = this.recalculateSummary(this.invoice);
  }

  recalculateSummary(invoice: Invoice): InvoiceSummary {
    const brutto = invoice.items.map(i => i.brutto).reduce((sum, i) => sum + i, 0);
    const netto = invoice.items.map(i => i.netto).reduce((sum, i) => sum + i, 0);

    return {
      brutto: brutto,
      netto: netto,
      tax: this.round(brutto - netto, 2)
    }
  }

  private round(price: number, digits: number): number {
    const rounded = Number((Math.round(price * 100) / 100).toFixed(digits));
    return rounded;
}

  updateItems(items) {
    this.invoice.items = items;
    this.invoiceSummary = this.recalculateSummary(this.invoice);
  }
}
