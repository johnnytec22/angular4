import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    var owl = $("#gallery-showcase");
    owl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
        nav: false,
        items: 1,
        navText: [
            "<i class='fa fa-angle-left fa-fw' style='color: #2C61EA; font-size: 20px'></i>",
            "<i class='fa fa-angle-right fa-fw' style='color: #2C61EA; font-size: 20px'></i>"
        ],
        center: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    $('.thumbnail p a').on('click', function() {
      var img = $(this).parent().prev('img').attr('src');
      var ocassion = $(this).siblings('span').text();

      $('#image-modal .modal-content .modal-body img').attr('src', img);
      $('#image-modal .modal-content .modal-footer span p').text(ocassion);

    })

    
    $(window).resize(function() {
      if($(window).width() < 600) {
        $('#image-modal .modal-content .modal-footer button').addClass('btn-xs')
      }else{
        $('#image-modal .modal-content .modal-footer button').removeClass('btn-xs')
      }
    })
    

  }

}
