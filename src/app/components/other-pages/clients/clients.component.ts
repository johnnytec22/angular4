import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var owl = $(".client-carousel");
    owl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive: {
            0 : {
                items: 1
            },
            700: {
                items: 2
            },
            900: {
                items: 3
            },
            1280: {
                items: 3
            }
        },
        navText: [
            "<i class='fa fa-angle-left fa-fw' style='color: #2C61EA; font-size: 20px'></i>",
            "<i class='fa fa-angle-right fa-fw' style='color: #2C61EA; font-size: 20px'></i>"
        ],
        center: true,
        animateOut: 'bounceOut',
        animateIn: 'bounceIn'
    });

    $(".owl-carousel .item").on('mouseenter', function() {
        owl.trigger('stop.owl.autoplay')
    });
    $(".owl-carousel .item").on('mouseleave', function() {
        owl.trigger('play.owl.autoplay')
    }); 

  }

}
