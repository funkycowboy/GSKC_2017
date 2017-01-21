import { Component } from '@angular/core';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'public-header',
    templateUrl: 'public-header.component.html',
    styleUrls: ['public-header.component.css']
})
export class PublicHeaderComponent{

    showHideSearch():void {
        // $("#SearchPanel").hide();
        //$("#ProductSearchButton").trigger("click");

        var $this = $(".sidenav");
        if ($this.hasClass("on")) {
            $this.removeClass("on").addClass("off");       
        }
    }
    
}
