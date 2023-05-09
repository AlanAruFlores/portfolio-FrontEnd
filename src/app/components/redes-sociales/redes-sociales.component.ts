import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public irLogin(){
    this.router.navigate(["/login"]);
  }
}
