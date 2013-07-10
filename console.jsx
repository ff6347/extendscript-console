/**
 *  function template by @author fabiantheblind
 */
(function(thisObj){
// basic panel
  run(thisObj);
/**
 * [run description]
 * @param  {[type]} thisObj [description]
 * @return {[type]}         [description]
 */
  function run(thisObj){


    main();
    
    function main(){
      
      var console = new Console();
      // sometimes you have to add an delay(seconds) to see whats going on
      
      // for(var i = 0; i < 10; i++){

        console.log("main function start" );
        
        delay(3);
      // }
    
      console.close();// and we are done
    }




//    function initConsole(){
//      var console = new Window("palette"); // for logging some data to the screen
//      console.prompt = console.add("statictext",[0,0,500,20]);
//      console.show();
//      return console;
//    }

// delay function found here
// found here http://www.wer-weiss-was.de/theme157/article1143593.html

    function delay(prmSec){
      prmSec *= 1000;
      var eDate = null;
      var eMsec = 0;
      var sDate = new Date();
      var sMsec = sDate.getTime();
      do {
        eDate = new Date();
        eMsec = eDate.getTime();
      }
      while ((eMsec-sMsec)<prmSec);
    }
  }

// close run
})(this);