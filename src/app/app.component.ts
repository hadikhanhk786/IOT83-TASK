import { Component,HostListener } from '@angular/core';
import Swal from 'sweetalert2';
import { DataService } from './srvice/data.service';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService) {

  }
  async ngOnInit() {
    await this.getAlldata(6)
  }
  title = 'IOT-83';
  arr: any = []

  p = 1;
  Obj = {}
  term: any;
  async getAlldata(count) {
    
    let resp = await this.dataService.getdata(count)
    
    if (resp['stat'] == 'ok') {
      this.arr = resp['photos']['photo']
      for(let i=0;i<this.arr.length;i++){
        this.arr[i]['image']="https://live.staticflickr.com/"+this.arr[i]['server']+"/"+this.arr[i]['id']+"_"+this.arr[i]['secret']+".jpg"
        this.arr[i]['sno']=i+1
      }
     
      
    } else {
      Swal.fire('Error...', 'Error While Getting Data', 'error')

    }
  }
  count = 1
  @HostListener("window:scroll", [])
  onScroll(): void {
    this.getAlldata(6+this.count)
    this.count = this.count+0.5
    
  }
}
