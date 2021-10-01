import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties :Array<any> = [
    {
      "Id" : 1,
      "Name" : "Birla House",
      "Type": "House",
      "Price" : 12000
    },
    {
      "Id" : 2,
      "Name" : "Ratan House",
      "Type": "House",
      "Price" : 19000
    },
    {
      "Id" : 3,
      "Name" : "Galaxy House",
      "Type": "House",
      "Price" : 22000
    },
    {
      "Id" : 4,
      "Name" : "Herra Enclave",
      "Type": "House",
      "Price" : 62000
    },
    {
      "Id" : 5,
      "Name" : "Armand House",
      "Type": "House",
      "Price" : 340000
    },
    {
      "Id" : 6,
      "Name" : "Kailash House",
      "Type": "House",
      "Price" : 52000
    },
    {
      "Id" : 7,
      "Name" : "Birla Villa",
      "Type": "House",
      "Price" : 52000
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
