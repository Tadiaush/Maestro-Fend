import {Component, OnInit} from '@angular/core';
import {Loan} from './loan';
import {LoanService} from "./loan.service";
@Component({
  selector: 'my-loans',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
  providers: [LoanService]
})
export class LoanComponent implements OnInit{
  loans: Loan[];
  selectedLoan: Loan;
  constructor(private loanService : LoanService){}
  error: any;
  getLoans() {
    this.loanService.getLoans()
        .then(loans => {
          this.loans = loans;
          console.log('success');
        }).catch(error => {
      this.error = error;
      console.log(error.toString());
    });
  };
  onSelect(loan: Loan): void {
    this.selectedLoan = loan;
    //gaunu loan
  }
  ngOnInit(): void{
    this.getLoans();
  }
}