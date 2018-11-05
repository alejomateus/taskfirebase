import { Component, OnInit } from '@angular/core';
import { ConexionService} from './../../services/conexion.service'

@Component({
	selector: 'formadd',
	templateUrl: './formadd.component.html',
	styleUrls: ['./formadd.component.scss']
})
export class FormaddComponent implements OnInit {
	item:any={
		name:""
	}
	constructor(private service: ConexionService) { }

	ngOnInit() {
	}
	add(){
		this.service.addItem(this.item);
		this.item.name='';
	}

}
