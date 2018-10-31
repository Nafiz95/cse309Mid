$(document).ready(function(){
      var taskName=$("#taskName").val();
      var time=$("#taskTime").val();
      
      $("#add").on('click', function () {
        var cont=$('<div>').attr({id:"plan-container",align:"center"});
        var h4=$('<h4>').text(taskName);
        var h5=$('<h5>').text(time);
        cont.append(h4);
        cont.append(h5);
        
        
        var btn1=$('<button>').addClass("btn btn-primary").attr({type:"button", id:"gotodash1"}).text("COMPLETE");
        cont.append(btn1);
        
        $('#plan-panel').append(cont);
      });
  });
 