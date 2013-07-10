// This is the gist of a console that uses a panel
// Copyright (c)  2013
// Fabian "fabiantheblind" Morón Zirfas
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to  permit persons to
// whom the Software is furnished to do so, subject to
// the following conditions:
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTIO
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// see also http://www.opensource.org/licenses/mit-license.php



var console = new Console();
// sometimes you have to add an delay(seconds) to see whats going on
  console.log("main function start" );
  main(true);
console.close();// and we are done
function main (argument) {
  alert(argument);
}


/**
 * A console class
 */
    function Console(){
      this.console = new Window("palette"); // for logging some data to the screen
      this.console.prompt = this.console.add("statictext",[0,0,500,20]);
      this.console.show();
      this.log = function(incoming){
        try{
          this.console.prompt.text = incoming+"";
        }
        catch(err){
          alert("Console is not initalized\n"+err);
        }
      };
      this.close = function  () {
        this.console.close();
      };
    }