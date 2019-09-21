import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-ng-for-example',
    templateUrl: './ng-for-example.component.html'
})
export class NgForExampleComponent implements OnInit {
    cities: Array<string>;
    people: Object[];
    peopleByCity: Object;

    ngOnInit() {
        this.cities = ['Miami', 'Sau Paulo', 'New York'];
        this.people = [
            { name: 'Anderson', age: 35, city: 'Sau Paulo' },
            { name: 'John', age: 12, city: 'Miami' },
            { name: 'Peter', age: 22, city: 'New York' },
        ];
        this.peopleByCity = [
            {
                city: 'Miami',
                people: [
                    { name: 'John', age: 12 },
                    { name: 'Angel', age: 22 },
                ]
            },
            {
                city: 'Sau Paulo',
                people: [
                    { name: 'Anderson', age: 35 },
                    { name: 'Felipe', age: 36 },
                ]
            }
        ];
    }
}