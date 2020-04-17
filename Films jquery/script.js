$(function(){

    let $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 4,
        
    init = function(){
        bindEvents();
        if(validIndex(openedIndex))/*si index valide avec opened index=4 albajess*/ 
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
    },
    
    bindEvents = function(){
     
        $mainMenuItems.children(".images").click(function(){
            let newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });
        
        $(".button").hover(
        function(){
            $(this).addClass("hovered");/*rentrer sur le bouton, ajoute la classe hovered*/
        },
        function(){
            $(this).removeClass("hovered");/*sort du bouton, ajoute aussi la class hovered*/ 
        }
        );
        
        $(".button").click(function(){/*quand on clique dessus on a besoin de lancer l'element l'index de monbouton de mon image*/
           let newIndex = $(this).index();
            checkAndAnimateItem(newIndex);    
        });
        
        
    },
        
    validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },
        
    animateItem = function($item, toOpen, speed){
       let $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width: "420px"}:{width: "140px"} ,                         
        colorImageParam = toOpen ? {left: "0px"}:{left: "140px"};     
        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,speed);    
    },
    
    checkAndAnimateItem = function(indexToCheckAndAnimate){/*decmlaration de la fonction*/
        if(openedIndex === indexToCheckAndAnimate)
        {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
            openedIndex = -1;
        }
        else
        {
            if(validIndex(indexToCheckAndAnimate))
            {
                animateItem($mainMenuItems.eq(openedIndex), false, 250);                         
                openedIndex = indexToCheckAndAnimate;
                animateItem($mainMenuItems.eq(openedIndex), true, 250);
            }
        }
    };
    
    init();
    
        
        
        
   
    
        

});