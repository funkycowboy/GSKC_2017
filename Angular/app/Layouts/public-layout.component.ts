import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-public-layout',
    templateUrl: 'public-layout.component.html',
    styleUrls: ['public-layout.component.css']
})
export class PublicLayoutComponent implements OnInit {

    ngOnInit(): void {
        $('#ProductSearchButton').click(function () {
                var $this = $(".sidenav");
                if ($this.hasClass("on")) {
                    $this.removeClass("on").addClass("off");
                } else {
                    $this.removeClass("off").addClass("on");
                }
        });

        $('#SlideIndicatorButton').click(function () {
            var $this = $(".sidenav");
            if ($this.hasClass("on")) {
                $this.removeClass("on").addClass("off");
                $this.removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-left");

            } else {
                $this.removeClass("off").addClass("on");
                $this.removeClass("glyphicon-triangle-left").addClass("glyphicon-triangle-right");
            }

        });

        function lockScroll() {
                $(document).bind("touchstart", function (event: Event) {
                    event.preventDefault();
                });
                $(document).bind("touchmove", function (event: Event) {
                    event.preventDefault();
                });
            }

            function unLockScroll() {
                $(document).unbind("touchstart");
                $(document).unbind("touchmove");

            }

            function changeOrientation(event: Event) {
                $("#landscape").show();
                $("#rotateplease").show();
            
                if ($(window).width() > $(window).height()) {                
                    lockScroll();
                }
                else {
                    unLockScroll();
                }
            }

            $(window).on("orientationchange", function () {
                changeOrientation(event);
            });
    }

}
