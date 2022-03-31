import { Component, OnInit } from '@angular/core';
import { AirplaneService } from '../airplane.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private airplaneService: AirplaneService) { }
  data: any;
  zoom = 7;
  markers: any[] = [];
  option = {
    icon: ''
  }
  iconClicked = {
    url: 'https://cdn-icons-png.flaticon.com/512/446/446075.png',
          scaledSize: {
            width: 100,
            height: 100,
          },
  }
  ngOnInit(): void {
    //this.getData();
    this.AddMarker1();
    this.AddMarker2();
  }

  AddMarker1() {
    this.markers.push({
      position: {
        lat: 31.332,
        lng: 130.84,
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { 
        animation: google.maps.Animation.BOUNCE,
        icon: {
          url: 'https://cdn-icons.flaticon.com/png/512/2776/premium/2776067.png?token=exp=1648175699~hmac=19c862eb81749eea6b8bb586c4fff8e1',
          scaledSize: {
            width: 100,
            height: 100,
          },
        },
       },
      clicked: false,
    })
  }

  AddMarker2() {
    this.markers.push({
      position: {
        lat: 31.569,
        lng: 131.298,
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { 
        animation: google.maps.Animation.BOUNCE,
        icon: {
          url: 'https://cdn-icons.flaticon.com/png/512/2776/premium/2776067.png?token=exp=1648175699~hmac=19c862eb81749eea6b8bb586c4fff8e1',
          scaledSize: {
            width: 100,
            height: 100
          },
        }
      },
      clicked: false,
    })
  }

  clickMarker(index: number) {
    console.log('clicked on marker');
    this.markers.forEach((v,i) =>{
      console.log(v.options.icon);
      
      if(index === i){
        v.clicked = true;
      }
      else{
        v.clicked = false;
      }
    })
  }

  getData(): void{
    setInterval(() => this.airplaneService.getData().subscribe(flightData => {
      console.log(flightData);
      this.data = flightData;
    }),2000);
  }

  check(): void {
    console.log('clicked on marker');
  }

  
}
