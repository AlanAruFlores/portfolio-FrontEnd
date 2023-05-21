import { Component, OnInit } from '@angular/core';
//@ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.banner-title')
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: '#EDEDED',
      cursorColor: '#EDEDED'

    })
    writer
      .strings(
        400,
        "BIENVENIDO A MI PORTFOLIO",
      )
      .start()
  }

}
