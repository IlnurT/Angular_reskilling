import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/models/item-model';
import { ItemService } from '../../services/item.service'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items$!: Observable<ItemModel[]>;

  constructor( private itemService: ItemService) {}

  ngOnInit(): void {
    this.items$ = this.itemService.getItems();
  }


}
