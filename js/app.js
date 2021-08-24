const bars_icon=$('.fa-bars');
const side_bar=$('.side-bar');
const nav_bar=$('.navbar');
const navbar_icons=$('.dropdown>i');
const navbar_dropdown_menu=$('.dropdown .mydropdown-menu');
const dropdown_btn_data_table=$('.table td>button');
const content=$('.content');

// sidebar dropdown
const side_bar_dropdown=$('.navigation-content');
const toggle_drop=$('.drop');


// toggle side bar
let active;
if(window.innerWidth>991.98){
    active=true;
}else{
    active=false;

}

$(bars_icon).click(function(e){
    e.stopPropagation();
    toggle_side_bar();
});
const toggle_side_bar=function(){
    if(active){
        $(side_bar).css('right','-300px');
        $(nav_bar).addClass('active');
        $(content).addClass('active');
        
        active=false;
    }else{
        $(side_bar).css('right','0');
        $(nav_bar).removeClass('active');
        $(content).removeClass('active');
        active=true;
        
    }
}
$(window).resize(function(){
    if(window.innerWidth>991.98){
        active=false;
        toggle_side_bar();
    }else{
        active=true
        toggle_side_bar();
    }
})


// navbar dropdown

$(navbar_icons).each(function(){
    $(this).click(function(e){
        $(this).parent().siblings().children('.mydropdown-menu').slideUp(100);
        $(this).siblings().slideToggle(100);
        
        e.stopPropagation();
            
        
    });
});
$(dropdown_btn_data_table).each(function(){
    $(this).click(function(e){
        $(this).siblings().children().slideToggle(100);
        
        e.stopPropagation();
            
        
    });
});
// hide dropdown when click outside
$(document).click(function(){
    $(navbar_dropdown_menu).slideUp(100);
    if(window.innerWidth<991.98){

        $(side_bar).css('right','-300px');
        active=false;
    }
});


// sidebar dropdown 
$(toggle_drop).click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(side_bar_dropdown).slideToggle(100);
    
})