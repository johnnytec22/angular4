import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        var test = $(".testimony-carousel");
        test.owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsiveClass: true,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left fa-fw' style='color: #2C61EA; font-size: 20px'></i>",
                "<i class='fa fa-angle-right fa-fw' style='color: #2C61EA; font-size: 20px'></i>"
            ],
            center: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });

        $(".testimony-carousel .item").on('mouseenter', function() {
            test.trigger('stop.owl.autoplay')
        });
        $(".testimony-carousel .item").on('mouseleave', function() {
            test.trigger('play.owl.autoplay')
        });

  }

}
