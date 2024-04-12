import { Component } from '@angular/core';
import { resorts } from 'src/assets/resorts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  index = 1;
  data: any = [];

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      console.log(resorts[i])
      this.data.push(resorts[i]);
    }
    console.log(this.data)
  }

  // response = {
  //   data: [
  //     {
  //       "id": 1,
  //       "name": "Parnassos Ski Resort",
  //       "location": "Mount Parnassos",
  //       "elevation": {
  //         "base": 1600,
  //         "peak": 2250
  //       },
  //       "trails": 23,
  //       "lifts": 13,
  //       "snowDepth": "35-40cm",
  //       "lastSnowfall": "2024-03-05",
  //       "status": "Open",
  //       "features": [
  //         "Ski School",
  //         "Equipment Rental",
  //         "Cafes"
  //       ]
  //     },
  //     {
  //       "id": 2,
  //       "name": "Seli Ski Center",
  //       "location": "Vermio",
  //       "elevation": {
  //         "base": 1530,
  //         "peak": 1900
  //       },
  //       "trails": 19,
  //       "lifts": 8,
  //       "snowDepth": "20-50cm",
  //       "lastSnowfall": "2024-02-25",
  //       "status": "Closed",
  //       "features": [
  //         "Night Skiing",
  //         "Ski School",
  //         "Chalet"
  //       ]
  //     },
  //     {
  //       "id": 3,
  //       "name": "Vasilitsa Ski Resort",
  //       "location": "Pindos",
  //       "elevation": {
  //         "base": 1650,
  //         "peak": 2115
  //       },
  //       "trails": 16,
  //       "lifts": 5,
  //       "snowDepth": "50-60cm",
  //       "lastSnowfall": "2024-03-01",
  //       "status": "Open",
  //       "features": [
  //         "Off-Piste Areas",
  //         "Snowboard Park",
  //         "Mountain Refuge"
  //       ]
  //     },
  //     {
  //       "id": 4,
  //       "name": "Kaimaktsalan Ski Center",
  //       "location": "Mount Voras",
  //       "elevation": {
  //         "base": 2050,
  //         "peak": 2480
  //       },
  //       "trails": 14,
  //       "lifts": 6,
  //       "snowDepth": "45-60cm",
  //       "lastSnowfall": "2024-03-05",
  //       "status": "Closed",
  //       "features": [
  //         "Ski School",
  //         "Hot Springs Nearby",
  //         "View to Thermaikos Gulf"
  //       ]
  //     },
  //     {
  //       "id": 5,
  //       "name": "Falakro Ski Resort",
  //       "location": "Drama",
  //       "elevation": {
  //         "base": 1610,
  //         "peak": 2232
  //       },
  //       "trails": 20,
  //       "lifts": 5,
  //       "snowDepth": "30-45cm",
  //       "lastSnowfall": "2024-03-02",
  //       "status": "Open",
  //       "features": [
  //         "Ski School",
  //         "Equipment Rental",
  //         "Restaurant"
  //       ]
  //     },
  //     {
  //       "id": 6,
  //       "name": "Pilio Ski Resort",
  //       "location": "Mount Pelion",
  //       "elevation": {
  //         "base": 1471,
  //         "peak": 1900
  //       },
  //       "trails": 7,
  //       "lifts": 4,
  //       "snowDepth": "20-45cm",
  //       "lastSnowfall": "2024-02-26",
  //       "status": "Closed",
  //       "features": [
  //         "Restaurant",
  //         "Ski Rental",
  //         "Ski School"
  //       ]
  //     },
  //     {
  //       "id": 7,
  //       "name": "Karpenisi Ski Center",
  //       "location": "Mount Velouxi",
  //       "elevation": {
  //         "base": 1840,
  //         "peak": 2150
  //       },
  //       "trails": 13,
  //       "lifts": 6,
  //       "snowDepth": "50-70cm",
  //       "lastSnowfall": "2024-03-04",
  //       "status": "Open",
  //       "features": [
  //         "Chalet",
  //         "Ski & Snowboard School",
  //         "Equipment Rental"
  //       ]
  //     },
  //     {
  //       "id": 8,
  //       "name": "Lailias Ski Center",
  //       "location": "Serres",
  //       "elevation": {
  //         "base": 1600,
  //         "peak": 1850
  //       },
  //       "trails": 6,
  //       "lifts": 3,
  //       "snowDepth": "35-60cm",
  //       "lastSnowfall": "2024-03-03",
  //       "status": "Closed",
  //       "features": [
  //         "Cafeteria",
  //         "Ski School",
  //         "Snow Tubing"
  //       ]
  //     },
  //     {
  //       "id": 9,
  //       "name": "Pisoderi Ski Resort",
  //       "location": "Florina",
  //       "elevation": {
  //         "base": 1600,
  //         "peak": 1930
  //       },
  //       "trails": 12,
  //       "lifts": 5,
  //       "snowDepth": "40-65cm",
  //       "lastSnowfall": "2024-02-24",
  //       "status": "Closed",
  //       "features": [
  //         "Night Skiing",
  //         "Snow Park",
  //         "Mountain Refuge"
  //       ]
  //     },
  //     {
  //       "id": 10,
  //       "name": "Mainalo Ski Center",
  //       "location": "Arcadia",
  //       "elevation": {
  //         "base": 1350,
  //         "peak": 1850
  //       },
  //       "trails": 8,
  //       "lifts": 4,
  //       "snowDepth": "25-50cm",
  //       "lastSnowfall": "2024-03-01",
  //       "status": "Open",
  //       "features": [
  //         "Ski School",
  //         "Equipment Rental",
  //         "Cafeteria"
  //       ]
  //     },
  //     {
  //       "id": 11,
  //       "name": "Metsovo Ski Resorts",
  //       "location": "Metsovo",
  //       "elevation": {
  //         "base": 1360,
  //         "peak": 1620
  //       },
  //       "trails": 5,
  //       "lifts": 3,
  //       "snowDepth": "20-40cm",
  //       "lastSnowfall": "2024-02-22",
  //       "status": "Open",
  //       "features": [
  //         "Cafe-Bar",
  //         "Ski School",
  //         "Children's Lift"
  //       ]
  //     },
  //     {
  //       "id": 12,
  //       "name": "Elatohori Ski Center",
  //       "location": "Pieria",
  //       "elevation": {
  //         "base": 1450,
  //         "peak": 1920
  //       },
  //       "trails": 8,
  //       "lifts": 5,
  //       "snowDepth": "25-50cm",
  //       "lastSnowfall": "2024-02-27",
  //       "status": "Open",
  //       "features": [
  //         "Cafe-Bar",
  //         "Ski School",
  //         "Snowboard Area"
  //       ]
  //     },
  //     {
  //       "id": 13,
  //       "name": "Pertouli Ski Center",
  //       "location": "Trikala",
  //       "elevation": {
  //         "base": 1170,
  //         "peak": 1370
  //       },
  //       "trails": 3,
  //       "lifts": 2,
  //       "snowDepth": "15-30cm",
  //       "lastSnowfall": "2024-02-20",
  //       "status": "Closed",
  //       "features": [
  //         "Family-friendly",
  //         "Ski School",
  //         "Scenic Trails"
  //       ]
  //     },
  //     {
  //       "id": 14,
  //       "name": "Vitsi Ski Center",
  //       "location": "Kastoria",
  //       "elevation": {
  //         "base": 1880,
  //         "peak": 2110
  //       },
  //       "trails": 5,
  //       "lifts": 2,
  //       "snowDepth": "20-35cm",
  //       "lastSnowfall": "2024-03-06",
  //       "status": "Open",
  //       "features": [
  //         "Cafeteria",
  //         "Snowboard Area",
  //         "Equipment Rental"
  //       ]
  //     },
  //     {
  //       "id": 15,
  //       "name": "Ziria Ski Center",
  //       "location": "Corinthia",
  //       "elevation": {
  //         "base": 1500,
  //         "peak": 1750
  //       },
  //       "trails": 4,
  //       "lifts": 2,
  //       "snowDepth": "10-25cm",
  //       "lastSnowfall": "2024-02-18",
  //       "status": "Open",
  //       "features": [
  //         "Beginner Friendly",
  //         "Ski School",
  //         "Snowshoeing Trails"
  //       ]
  //     },
  //     {
  //       "id": 16,
  //       "name": "Anilio Ski Resort",
  //       "location": "Ioannina",
  //       "elevation": {
  //         "base": 1450,
  //         "peak": 1850
  //       },
  //       "trails": 6,
  //       "lifts": 4,
  //       "snowDepth": "25-40cm",
  //       "lastSnowfall": "2024-03-07",
  //       "status": "Closed",
  //       "features": [
  //         "Mountain Cafe",
  //         "Ski & Snowboard Lessons",
  //         "Equipment Rental"
  //       ]
  //     },
  //     {
  //       "id": 17,
  //       "name": "Olympus Ski Resort",
  //       "location": "Mount Olympus",
  //       "elevation": {
  //         "base": 1600,
  //         "peak": 2100
  //       },
  //       "trails": 8,
  //       "lifts": 3,
  //       "snowDepth": "30-50cm",
  //       "lastSnowfall": "2024-02-23",
  //       "status": "Open",
  //       "features": [
  //         "Historical Landmarks",
  //         "Ski School",
  //         "Beautiful Scenery"
  //       ]
  //     }
  //   ]
  // }
}
