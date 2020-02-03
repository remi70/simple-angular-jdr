import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroslist',
  templateUrl: './heroslist.component.html',
  styleUrls: ['./heroslist.component.scss']
})
export class HeroslistComponent implements OnInit {

  cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            {field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

}
