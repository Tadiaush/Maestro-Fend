import { Injectable } from '@angular/core';
import {LOANS} from "./mock-data";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Loan} from "./loan";


@Injectable()
export class LoanService {

    constructor(private http: Http) { }

    getLoans(): Promise<Loan[]> {
        return this.http.get("http://localhost:8181/loans")
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
