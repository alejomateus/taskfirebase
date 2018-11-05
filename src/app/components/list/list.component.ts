import { Component, OnInit } from '@angular/core';
import { ConexionService} from './../../services/conexion.service'

@Component({
  selector: 'list-task',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	items:any;
  constructor(private conexion: ConexionService) { 
  	this.conexion.listItem().subscribe(item=>{
  		this.items = item;
  		console.log(this.items);
  	});
  }

  ngOnInit() {
  }

}
