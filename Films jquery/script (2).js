$(function(){
// 3vars
    let $mainMenuItems = $("#main-menu ul").children("li"),
    /*main-menu, avec dedans les liste +description , eleemnets du menu:items*/
   /* je veux capturer les li avec la fonction children*/
   /*declarer +sierus var , var x,e,d ;separées par des virgules*/
    
// autrevariable */

 totalMainMenuItems = $mainMenuItems.length,/*nbre d'elements dans main menu*/

openedIndex = -1,/*index fermés -1*/

init=function()
{
    $bindEvents=function(){
 /*fonctin pour les images sur le click*/
$mainMenuItems.children(".images").click()(function()/* function qui se lance sur le clique ,enf directs et on prend ceux qui o,nt la classe images*/
   
{
    let newIndex=$(this).parent().index();/*c'est comme document , l'element sur lequel je suis sur lequel je clique*/
     $item= $mainMenuItems.eq()(newIndex);
       
     if(openedIndex===newIndex){/*newindex= sur index sur lequel je viens de cliquer est egal à celui oiuvert alors je dois fermer avec false*/
            animateItem($item,false,250);
            openedIndex=-1;/*on ferme l'index , aucun ouvert*/

        }
    else{
        if(validindex(newIndex))
        {/* je teste sur l'index que je viens de cliquer si  mon index est valid j'utilise animateitem*/
            
            animateItem($mainMenuItems.eq(openedIndex),true,250);/*si valide */
            openedIndex=newIndex;/*on met à jour l'index*/
            animateItem($item,true,250);/*on anime l'index*/
    
    }/*ouverture et fermerure des indexs, on reorganise le code en creeant une function bindevents*/
    
    
    
    
    animateItem($item,true,250);/*on se sert de la funtction*/
    // $colorImage= $item.find(".color");
    // $colorImage.animate({left:"0px"},250);
    // $item.animate({width:"420px"},250);/*description*/
    openedIndex=newIndex;/*on met à jour l'index*/

    }
});



},
    
validindex=function(indexTockeck){
    return(indexTockeck>=0)&& (indexTockeck<totalMainMenuItems);
},
    animateItem=function($item,toOpen,speed){/*fermeture des items, 3 arguments l'item que je veux animer
    false fermer et true ouvert*/
   let $colorImage= $item.find(".color"),
   itemParam =toOpen?({width:"420px"},250):({width:"140px"},250); /*parametre de item est ce que expression =function
   ?valeur1:sinon valeur2 */
   $colorImageParam=toOpen?({left:"0px"}):({width:"140px"});/*on vient de definir nos vaeiables*/
   $colorImage.animate( $colorImageParam,speed);
    $item.animate( itemParam,speed);/*description*/
    // openedIndex=newIndex;/*on met à jour l'index*/
    

}

);
init();

});
