import { Component, OnInit } from '@angular/core';
import { HerosHttpService } from 'src/app/services/heros-http.service';

@Component({
  selector   : 'app-heroslist',
  templateUrl: './heroslist.component.html',
  styleUrls  : ['./heroslist.component.scss']
})
export class HeroslistComponent implements OnInit {



    constructor(/*private gameService:GameService, private heroHttpService:HerosHttpService,private router:Router*/) { }

    ngOnInit() {

     /* ngOnInit() {
        this.heroHttpService.getHeros().suscribe(
          (data:Heros[])=> {this.data = data;},
          err => {console.warn(err);}

      
    }
*/
}
}

