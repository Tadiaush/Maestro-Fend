import {Component, Input} from '@angular/core';
import {Loan} from './loan';

@Component({
    selector: 'my-loan-details',
     templateUrl: './loan-details.component.html',
     styleUrls: ['./loan.component.css']

})
export class LoanDetailsComponent{
    @Input()
    loan: Loan;

    //metodai mano
}