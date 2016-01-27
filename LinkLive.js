// ==UserScript==
// @name        LinkLive
// @namespace   LinkLive
// @description Recommendation
// @author      JING LI
// @license MIT
// @version     4.0
// @include     http://stackoverflow.com/*
// @include     stackoverflow.com/*
// @include     https://stackoverflow.com/*
// @require     https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.js
// @require     https://code.jquery.com/jquery-2.1.4.min.js
// @require     https://code.jquery.com/ui/1.11.4/jquery-ui.min.js
// @resource    jqueryCSS   https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css
// ==/UserScript==

function getAllHrefs()
{
	var hrefs=$('.post-text a[href],.comment-copy  a[href]');
	//var hrefs=$(".question").find(".post-text").find("a").first().attr('href');
	return hrefs;   //https://code.jquery.com/jquery-1.11.3.min.js

}


function DeleteLastSlash(InputString){
  re=/^.*\/$/;
  return InputString.replace(re,InputString.substring(0,InputString.length-1));

}

var AllHrefs=getAllHrefs();
var ToBackEndData = {};

if (AllHrefs.length>0) {
  for (var i = 0;i<AllHrefs.length;i++) {
    ToBackEndData[i]= DeleteLastSlash(AllHrefs[i].href).toLowerCase();    
  };  
};





if (AllHrefs.length>0)
{






function AddUItootip(response)
{
  //console.log("AddUItootip Function");
  //console.log(response); 
  json= JSON.parse(response); //JSON.parse(JSON.parse(response)); //eval("("+response+")"); //JSON.parse(response); JSON.stringify
  //console.log(json);
  NumLink=Object.keys(json.Hyperlink).length
  //console.log(NumLink);
  //console.log(json.Hyperlink["0"]);
  if (NumLink>0) {
    AllStringMap={};
    
    for (var i = 0; i <NumLink; i++) {
      CallDtailURL='http://155.69.149.20:8000/details/'+'?url='+json['Hyperlink'][i.toString()];
      

      CurrTableString='<!DOCTYPE html><html><head>';
      CurrTableString=CurrTableString+'<style type="text/css">\
      .myTable  {border-collapse:collapse;word-wrap: break-word;word-break:break-all;white-space:nowrap;overflow:hidden;text-overflow: ellipsis;table-layout:fixed;border-spacing:0;border-color:#ccc;overflow-y: auto; overflow-x: hidden;}\
      .myTable  td{padding:1px 1px;border-style:solid;border-width:1px;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;white-space:nowrap;overflow:hidden;text-overflow: ellipsis; }\
.myTable  th{font-family:Arial Black,sans-serif;font-size:14px;font-weight:normal;padding:4px 4px;border-style:solid;border-width:1px;word-break:normal;border-color:#ccc;color:#333; }\
.myTable .hs_title{background-color:#A4A4A4;border-color:#A4A4A4;font-weight:bold;text-align:center;}\
.myTable .hs_disse{background-color:#f0f0f0;border-color:#A4A4A4;font-weight:bold;text-align:center;}\
.myTable .hs{background-color:#A4A4A4;border-color:#A4A4A4;font-weight:bold;text-align:left;}\
.myTable .myurl_link{color: #0000A0;text-decoration:underline;}</style></head><body>';      

      CurrTableString=CurrTableString+'<table width="100%" class="myTable">'+
      '<tr><th class="hs" colspan="100" >CITATIONS: '+parseInt(json.C0[i.toString()])+'  '
      +'<canvas id="thisChart'+i.toString()+'"width="120" height="15"></canvas>';

      eval('BarOr'+i.toString()+'='+'json.Bar0[i.toString()].split(",")');
      CurrTableString=CurrTableString+'<script type="text/javascript">\
    var ctx = $("#thisChart'+i.toString()+'").get(0).getContext("2d");\
    var data = {\
    labels: ["", "","","","","", "","","","","", "","","","","", "","","","","", "","","",""],\
    datasets: [\
        {\
            label: "My dataset",\
            fillColor: "rgba(0,0,255,1)",\
            strokeColor: "rgba(0,0,255,1)",\
            highlightFill: "rgba(0,0,255,1)",\
            highlightStroke: "rgba(0,0,255,1)",\
            data: BarOr'+i.toString()+'\
        }\
    ]\
};\
 new Chart(ctx).Bar(data,{showScale : false,barValueSpacing : 1,barStrokeWidth : 0.001});\
    </script>';



      CurrTableString=CurrTableString+'<span style="float:right">' +'<a class="myurl_link" target="_blank" href='+
      CallDtailURL+'>'+ 'Citation Details'+ '</a></span></th></tr>';
      


     //User Recommendation
      CurrTableString=CurrTableString+'<tr><th class="hs_disse" colspan="100" >Frequent Disseminators</th></tr>'+
       '<tr><td colspan="20">' +'<a class="myurl_link" target="_blank" href='+'"http://stackoverflow.com/users/'+json.User1[i.toString()]+'"'+'>'+json.Dis1[i.toString()]+ '</a></td>\
       <td colspan="20">' +'<a class="myurl_link" target="_blank" href='+'"http://stackoverflow.com/users/'+json.User2[i.toString()]+'"'+'>'+json.Dis2[i.toString()]+ '</a></td>\
       <td colspan="20">' +'<a class="myurl_link" target="_blank" href='+'"http://stackoverflow.com/users/'+json.User3[i.toString()]+'"'+'>'+json.Dis3[i.toString()]+ '</a></td>\
       <td colspan="20">' +'<a class="myurl_link" target="_blank" href='+'"http://stackoverflow.com/users/'+json.User4[i.toString()]+'"'+'>'+json.Dis4[i.toString()]+ '</a></td>\
       <td colspan="20">'+'<a class="myurl_link" target="_blank" href='+'"http://stackoverflow.com/users/'+json.User5[i.toString()]+'"'+'>'+json.Dis5[i.toString()]+ '</a></td></tr>';




       //Link Recommendation   
       CurrTableString=CurrTableString+' <tr> <th class="hs_title" colspan="100">Link Recommendation</th></tr>';
       
       //TestData=['1',2,3,4,5,6,7,8,9,'100',11,12,13,14,15,16,17,18,19,'100',21,22,23,24,25];
       var rankNum=0;
      for (var j = 0; j <10; j++) {
        CurURL='URL'+String(j+1);
        CurTitle='T'+String(j+1);
        CurC='C'+String(j+1);
        CurBar='Bar'+String(j+1);
        
        if (json[CurURL][i.toString()]!=null && json[CurURL][i.toString()]!='None'&& json[CurURL][i.toString()]!='http:') {
          rankNum=rankNum+1;

          eval('Bar'+i.toString()+j.toString()+'='+'json[CurBar][i.toString()].split(",")');


          ChartString='<canvas id="myChart'+i.toString()+j.toString()+'" width="120" height="15"></canvas>'+parseInt(json[CurC][i.toString()]);
          ChartString=ChartString+'<script type="text/javascript">\
    var ctx = $("#myChart'+i.toString()+j.toString()+'").get(0).getContext("2d");\
    var data = {\
    labels: ["", "","","","","", "","","","","", "","","","","", "","","","","", "","","",""],\
    datasets: [\
        {\
            label: "My dataset",\
            fillColor: "rgba(0,0,255,1)",\
            strokeColor: "rgba(0,0,255,1)",\
            highlightFill: "rgba(0,0,255,1)",\
            highlightStroke: "rgba(0,0,255,1)",\
            data: Bar'+i.toString()+j.toString()+'\
        }\
    ]\
};\
 new Chart(ctx).Bar(data,{showScale : false,barValueSpacing : 1,barStrokeWidth : 0.001});\
    </script>';    


            CurrTableString=CurrTableString+'<tr><td colspan="5">'+rankNum+'</td><td colspan="70"><h3 style = "margin:0px"><span title="'+json[CurTitle][i.toString()]+'"</span><a class="myurl_link" target="_blank" href='+json[CurURL][i.toString()]+'>'+json[CurTitle][i.toString()]+'</a></h3>'+json[CurURL][i.toString()]+ '</td>'+      
      '<td colspan="25">'+ChartString+'</td>'+
      '</tr>';

        };
        
      };      

      
      CurrTableString=CurrTableString+'</table></body></html>';



      
      AllStringMap[json.Hyperlink[i.toString()]]=CurrTableString;
      //console.log(CurrTableString);
      
    }; //for i
    //console.log(AllStringMap);

    console.log(typeof(json));
    console.log(json);
    console.log(Object.keys(json).length)
    console.log(Object.keys(json.Citation).length)

    var newjqueryCSS = GM_getResourceText("jqueryCSS");
    GM_addStyle(newjqueryCSS); 

 // var newmyCSS = GM_getResourceText("myCSS");
 // GM_addStyle(newmyCSS); 




  }; //if (NumLink>0)  
 
}  //function AddUItootip(response)

var script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js";
script.type  = 'text/javascript'; 
document.getElementsByTagName("head")[0].appendChild(script);



$(document).ready(  function(){ 
urlToPost='http://155.69.149.20:8000/mytest/';//http://155.69.149.20:8000';
$.post(urlToPost,
    ToBackEndData,AddUItootip
   );



 $(".post-text a[href],.comment-copy a[href]").tooltip({
      items: 'a',  
      //content: function(){var titleText=$(this).attr('href'); return "<b>Citations:521</b><br>"+"<b>Recommendation:</b><br>"+DeleteLastSlash(titleText.toLowerCase());},
     

      // content:function(){return AllStringMap[DeleteLastSlash($(this).attr('href').toLowerCase())];},//AllStringMap[DeleteLastSlash($(this).attr('href')).toLowerCase()],   //function(){return TableString;}
       show: null, // show immediately
      content:" ",
      html: true,
      track:true,
      tooltipClass: "custom-tooltip-styling",
      open: function(event, ui)
      {
        ui.tooltip.css("max-width", "650px");
        //ui.tooltip.css("max-height", "50px");
        ui.tooltip.css("font-size", "1em");
        ui.tooltip.css("padding", "0px");
        ui.tooltip.css("background-color", "#f0f0f0");
        // console.log(DeleteLastSlash($(this).attr('href').toLowerCase()));   

      },
      close: function(event, ui)
      {
          ui.tooltip.hover(function()
          {
              $(this).stop(true).fadeTo(400, 1); 
          },
          function()
          {
              $(this).fadeOut('400', function()
              {
                  $(this).remove();
              });
          });
      }

      
  });  //$(".post-text a[href],.comment-copy a[href]").tooltip({

  


  $(".post-text a[href],.comment-copy a[href]").mouseover(function() { 
    // alert('hehe'); 
    //console.log($(this).attr('href'));
     //console.log(AllStringMap[DeleteLastSlash($(this).attr('href').toLowerCase())])

    $(this).tooltip("option", "content", function(){return AllStringMap[DeleteLastSlash($(this).attr('href').toLowerCase())];});

  });

    $(".post-text a[href],.comment-copy a[href]").mouseleave(function() { 
      //console.log("mouseout");      
      
      //$(this).tooltip("option", "content", " ");
     //$(".post-text a[href],.comment-copy a[href]").tooltip("close");
     $(this).tooltip("close");
     $(this).tooltip("option", "content", " ");


  });

});//$(document).ready(  function(){ 


}  //if (AllHrefs.length>0)


