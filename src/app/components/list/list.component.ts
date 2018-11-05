import { Component, OnInit } from '@angular/core';
import { ConexionService} from './../../services/conexion.service'

@Component({
	selector: 'list-task',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	items:any;
	editItem:any={
		name:''
	};
	constructor(private conexion: ConexionService) { 
		this.conexion.listItem().subscribe(item=>{
			this.items = item;
			console.log(this.items);
		});
	}

	ngOnInit() {
	}
	delete(item){
		this.conexion.deleteItem(item);
	}
	edit(item){
		this.editItem=item;
		// this.conexion.deleteItem(item);
	}
	editItemService(){
		this.conexion.editItem(this.editItem);
	}

}
