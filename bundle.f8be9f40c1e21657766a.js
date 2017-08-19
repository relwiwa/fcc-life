webpackJsonp([1],{49:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(6),i=n.n(l),s=n(82),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){this.props.onNextBoard&&this.startGenerationInterval()}},{key:"componentWillUnmount",value:function(){this.props.onNextBoard&&this.stopGenerationInterval()}},{key:"stopGenerationInterval",value:function(){clearTimeout(this.generationInterval)}},{key:"startGenerationInterval",value:function(){this.generationInterval=setInterval(this.getNextGeneration.bind(this),300)}},{key:"getNextGeneration",value:function(){for(var e=this.props,t=e.board,n=e.onNextBoard,a=t[0].length,r=t.length,o=t,l=new Array,i=0,s=0;s<r;s++){l[s]=new Array;for(var u=0===s?r-1:s-1,c=s===r-1?0:s+1,d=0;d<a;d++){var p=0===d?a-1:d-1,m=d===a-1?0:d+1,f=o[u][p]+o[u][d]+o[u][m]+o[s][p]+o[s][d]+o[s][m]+o[c][p]+o[c][d]+o[c][m];l[s][d]=3===f?1:4===f?o[s][d]:0,i+=l[s][d]}}n(l,i)}},{key:"renderRow",value:function(e,t){var n=this.props,a=n.clusterSize,r=n.onToggleLifeCell;return i.a.createElement(s.a,{id:"row-"+t,key:"row-"+t,row:t,clusterSize:a,rowData:e,onToggleLifeCell:r?r:null})}},{key:"render",value:function(){var e=this,t=this.props.board;return i.a.createElement("div",{className:"life-board"},t.map(function(t,n){return e.renderRow(t,n)}))}}]),t}(l.Component);t.a=c},79:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(6),i=n.n(l),s=n(87),u=n(85),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={instructionsDisplayed:!1},n}return o(t,e),c(t,[{key:"handleToggleInstructionsDisplay",value:function(){this.setState({instructionsDisplayed:!this.state.instructionsDisplayed})}},{key:"render",value:function(){var e=this,t=this.state.instructionsDisplayed;return i.a.createElement("div",{className:"life-game grid-container grid-container-padded"},i.a.createElement("h1",{className:"text-center"},"Life ",i.a.createElement("small",{className:"fa fa-question-circle-o",onClick:function(){return e.handleToggleInstructionsDisplay()}})),this.state.instructionsDisplayed&&i.a.createElement(u.a,{onToggleInstructionsDisplay:function(){return e.handleToggleInstructionsDisplay()}}),i.a.createElement(s.a,{instructionsDisplayed:t,onToggleInstructionsDisplay:function(){return e.handleToggleInstructionsDisplay()}}))}}]),t}(l.Component);t.a=d},80:function(e,t){},81:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(91),l=(n.n(o),function(e){var t=e.cellId,n=e.onToggleLifeCell,a=e.status,o=function(){null!==n&&n(t)};return r.a.createElement("div",{className:"life-cell cell auto"},r.a.createElement("div",{className:1===a?"populated":"not-populated",onClick:function(){return o()}}))});t.a=l},82:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(81),l=function(e){var t=e.clusterSize,n=e.rowData,a=e.onToggleLifeCell,l=e.row,i=function(e){for(var i=[],s=e;s<e+t;s++)i.push(r.a.createElement(o.a,{key:l+"-"+s,cellId:l+"-"+s,status:n[s],onToggleLifeCell:a}));return i};return r.a.createElement("div",{className:"life-row grid-x"},function(){for(var e=n.length/t,a=[],o=0;o<e;o++){var s=o*t;a.push(r.a.createElement("div",{key:"row-"+l+"-col-"+o,className:"cell auto"},r.a.createElement("div",{className:"grid-x"},i(s))))}return a}())};t.a=l},83:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(49),l=function(e){var t=e.instruction;return r.a.createElement("div",{className:"cell medium-6 large-3"},r.a.createElement("div",{className:"grid-x grid-padding-y align-center"},r.a.createElement("div",{className:"align-self-center cell small-4 medium-5 medium-offset-0 large-5"},t.oscillator?function(){var n=(e.board,e.onNextBoard);return r.a.createElement(o.a,{board:e.board,onNextBoard:n,clusterSize:t.clusterSize})}():function(){return r.a.createElement(o.a,{board:t.board,clusterSize:t.clusterSize})}()),r.a.createElement("div",{className:"cell text-center"},r.a.createElement("h5",null,t.headline),r.a.createElement("p",null,t.explanation))))};t.a=l},84:function(e,t,n){"use strict";var a=[{title:"About"},{title:"Rules",boardSpecs:{continuation:{headline:"Continuation",board:[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0],[0,0,0,0,0]],clusterSize:5,explanation:"Middle cells with two or three alive cells surrounding it, live on to the next generation"},recreation:{headline:"Recreation",board:[[0,0,0,0,0],[0,0,1,1,0],[0,0,0,0,0],[0,1,0,1,0],[0,0,0,0,0]],clusterSize:5,explanation:"Middle cell is dead, and has exactly four alive cells surrounding it, so it will be born again due to recreation"},overpopulation:{headline:"Overpopulation",board:[[0,0,0,0,0],[0,1,1,0,0],[0,1,1,1,0],[0,1,1,1,0],[0,0,0,0,0]],clusterSize:5,explanation:"Middle cell has more than four alive cells surrounding it, so it will die due to overpopulation"},underpopulation:{headline:"Underpopulation",board:[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,1,0,0,0],[0,0,0,0,0]],clusterSize:5,explanation:"Middle cell has less than two alive cells surrounding it, so it will die due to underpopulation"}}},{title:"Patterns",boardSpecs:{block:{headline:"Block Still Life",board:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],clusterSize:4},tub:{headline:"Tub Still Life",board:[[0,0,0,0,0],[0,0,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]],clusterSize:5},blinker:{headline:"Blinker Oscillator",board:[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],clusterSize:5,oscillator:"blinker"},toad:{headline:"Toad Oscillator",board:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,1,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],clusterSize:6,oscillator:"toad"}}}];t.a=a},85:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(6),i=n.n(l),s=n(83),u=n(89),c=n(84),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activeInstruction:0,blinkerBoard:null,toadBoard:null},n.handleChangeActiveInstruction=n.handleChangeActiveInstruction.bind(n),n}return o(t,e),d(t,[{key:"componentWillMount",value:function(){this.setState({toadBoard:c.a[2].boardSpecs.toad.board,blinkerBoard:c.a[2].boardSpecs.blinker.board})}},{key:"handleChangeActiveInstruction",value:function(e){this.setState({activeInstruction:e})}},{key:"handleNextBoard",value:function(e,t){var n={};n[t+"Board"]=e,this.setState(n)}},{key:"render",value:function(){var e=this,t=this.props.onToggleInstructionsDisplay,n=this.state,a=n.activeInstruction;n.blinkerBoard,n.toadBoard;return i.a.createElement("div",{className:"life-instructions"},i.a.createElement(u.a,{tabs:c.a.map(function(e){return e.title}),activeTab:a,onChangeActiveTab:this.handleChangeActiveInstruction,onToggleTabsContainer:t},i.a.createElement("div",null,i.a.createElement("h3",{className:"text-center"},"Conway's Game of Life"),i.a.createElement("div",{className:"grid-x grid-padding-x"},i.a.createElement("div",{className:"cell medium-6"},i.a.createElement("p",null,"Conways's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970"),i.a.createElement("p",null,"The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game."),i.a.createElement("p",null,"It follows ",i.a.createElement("a",{onClick:function(){return e.handleChangeActiveInstruction(1)}},"a set of rules")," defining how cells live on, die and get reborn from generation to generation"),i.a.createElement("p",null,"During its evolution, certain ",i.a.createElement("a",{onClick:function(){return e.handleChangeActiveInstruction(2)}},"patterns emerge"),". These include still lives, oscillators and others")),i.a.createElement("div",{className:"cell medium-6"},i.a.createElement("p",null,"In this implementation you can:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Watch how random boards evolve"),i.a.createElement("li",null,"Create your own configuration and see how it evolves"),i.a.createElement("li",null,"You can pause, ","reset and continue the game at any time"))))),i.a.createElement("div",null,i.a.createElement("h3",{className:"text-center"},"Conway's Game of Life: Rules"),i.a.createElement("div",{className:"grid-x grid-padding-x"},Object.keys(c.a[1].boardSpecs).map(function(t){return i.a.createElement(s.a,{key:t,board:e.props[t+"Board"],onNextBoard:function(n){return e.handleNextBoard(n,t)},instruction:c.a[1].boardSpecs[t]})}))),i.a.createElement("div",null,i.a.createElement("h3",{className:"text-center"},"Conway's Game of Life: Patterns"),i.a.createElement("div",{className:"grid-x grid-padding-x"},Object.keys(c.a[2].boardSpecs).map(function(t){return void 0===c.a[2].boardSpecs[t].oscillator?i.a.createElement(s.a,{key:t,instruction:c.a[2].boardSpecs[t]}):i.a.createElement(s.a,{key:t,board:e.state[t+"Board"],onNextBoard:function(n){return e.handleNextBoard(n,t)},instruction:c.a[2].boardSpecs[t]})})))))}}]),t}(l.Component);t.a=p},86:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=function(e){var t=e.gameStatus,n=e.generation,a=e.instructionsDisplayed,o=e.onContinueGame,l=e.onPauseGame,i=e.onResetGame,s=e.onSetupRandomGame,u=e.onStartGame,c=e.onToggleInstructionsDisplay,d=e.population;return r.a.createElement("div",{className:"life-controls grid-x grid-padding-x align-middle"},r.a.createElement("h4",{className:"cell large-3 text-center large-text-left"},null!==n&&r.a.createElement("span",null,"Generation ",n)),function(){return r.a.createElement("div",{className:"cell small-10 large-6 small-offset-1 large-offset-0 text-center"},"started"===t&&r.a.createElement("p",null,"Watch the population evolve from generation to generation or ",r.a.createElement("a",{onClick:i},"setup your own population"),a===!1&&r.a.createElement("span",null,". There are also ",r.a.createElement("a",{onClick:c},"instructions")," to learn what's happening")),"paused"===t&&r.a.createElement("p",null,r.a.createElement("a",{href:"#",onClick:o},"Continue simulation")," or ",r.a.createElement("a",{onClick:i},"setup a new population")),("stopped"===t||"random-setup"===t)&&r.a.createElement("p",null,"Click the fields to setup a population or create a ",r.a.createElement("a",{onClick:s},"randomly generated population")," that you can manipulate",a===!1&&r.a.createElement("span",null,". Plus, there are ",r.a.createElement("a",{onClick:c},"instructions")," to learn what's going on")),"all-dead"===t&&r.a.createElement("p",null,r.a.createElement("strong",null,"After ",n," generation",n>1&&r.a.createElement("span",null,"s"),", the whole population died."),r.a.createElement("br",null),"Click the fields to setup a new population or create a ",r.a.createElement("a",{onClick:s},"randomly generated population")))}(),function(){return r.a.createElement("div",{className:"cell large-3 align-center button-group small"},"started"===t&&r.a.createElement("button",{className:"button",onClick:l},"Pause"),"paused"===t&&r.a.createElement("button",{className:"button",onClick:o},"Continue"),("stopped"===t||"random-setup"===t||"all-dead"===t)&&r.a.createElement("button",{className:"button"+(0===d?" disabled":""),onClick:0===d?null:u},"Start"),("stopped"===t||"random-setup"===t||"all-dead"===t)&&r.a.createElement("button",{className:"button",onClick:s},"Random"),r.a.createElement("button",{className:"button"+(0===d?" disabled":""),onClick:0===d?null:i},"Reset"))}())};t.a=o},87:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(6),i=n.n(l),s=n(49),u=n(86),c=n(92),d=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),p={large:{clusterSize:5,cols:35,rows:25},small:{clusterSize:5,cols:25,rows:15}},m=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={board:null,boardStatus:null,clusterSize:null,generation:null,population:null},n.handleResize=n.handleResize.bind(n),n}return o(t,e),d(t,[{key:"componentWillMount",value:function(){this.setupBoard()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){this.boardRef.stopGenerationInterval(),window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){this.getCurrentDimensions().cols!==this.state.board[0].length&&("started"===this.state.gameStatus?this.setupBoard():this.handleSetupRandomGame())}},{key:"generateEmptyBoard",value:function(e,t){for(var n=new Array,a=0;a<t;a++){for(var r=new Array,o=0;o<e;o++)r[o]=0;n.push(r)}return n}},{key:"generateRandomBoard",value:function(e,t){for(var n=new Array,a=0,r=0;r<t;r++){for(var o=new Array,l=0;l<e;l++){var i=Math.random()>.65?1:0;o[l]=i,a+=i}n.push(o)}return{board:n,population:a}}},{key:"getCurrentDimensions",value:function(){var e={},t=void 0;return window.innerHeight<window.innerWidth?(t=window.innerWidth<600?"small":"large",e.cols=p[t].cols,e.rows=p[t].rows):(t=window.innerWidth<500?"small":"large",e.cols=p[t].rows,e.rows=p[t].cols),e.clusterSize=p[t].clusterSize,e}},{key:"setupBoard",value:function(){var e=this.getCurrentDimensions(),t=this.generateRandomBoard(e.cols,e.rows);this.setState({board:t.board,population:t.population,clusterSize:e.clusterSize,generation:1,gameStatus:"started"})}},{key:"handleContinueGame",value:function(){this.setState({gameStatus:"started"}),this.boardRef.startGenerationInterval()}},{key:"handleNextBoard",value:function(e,t){0===t?(this.boardRef.stopGenerationInterval(),this.setState({board:e,population:t,gameStatus:"all-dead"})):this.setState({board:e,generation:this.state.generation+1,population:t})}},{key:"handlePauseGame",value:function(){this.boardRef.stopGenerationInterval(),this.setState({gameStatus:"paused"})}},{key:"handleResetGame",value:function(){var e=this.getCurrentDimensions(),t=this.generateEmptyBoard(e.cols,e.rows);this.boardRef.stopGenerationInterval(),this.setState({board:t,clusterSize:e.clusterSize,gameStatus:"stopped",generation:null,population:0})}},{key:"handleSetupRandomGame",value:function(){var e=this.getCurrentDimensions(),t=this.generateRandomBoard(e.cols,e.rows);this.setState({board:t.board,population:t.population,clusterSize:e.clusterSize,generation:1,gameStatus:"random-setup"})}},{key:"handleStartGame",value:function(){this.state.population>0&&(this.setState({gameStatus:"started",generation:1}),this.boardRef.startGenerationInterval())}},{key:"handleToggleLifeCell",value:function(e){var t=this.state,n=t.board,a=t.gameStatus,r=t.population;if("stopped"===a||"random-setup"===a||"all-dead"===a){var o=e.split("-"),l=n,i=1===n[o[0]][o[1]]?0:1;l[o[0]][o[1]]=i;var s=r;0===i?s--:s++;var u={};u.board=l,u.population=s,this.setState({board:l,population:s})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.board,a=t.clusterSize,r=t.gameStatus,o=t.generation,l=t.population,c=this.props,d=c.instructionsDisplayed,p=c.onToggleInstructionsDisplay;return i.a.createElement("div",{className:"life-simulation"},i.a.createElement(u.a,{gameStatus:r,generation:o,instructionsDisplayed:d,population:l,onContinueGame:function(){return e.handleContinueGame()},onPauseGame:function(){return e.handlePauseGame()},onResetGame:function(){return e.handleResetGame()},onStartGame:function(){return e.handleStartGame()},onSetupRandomGame:function(){return e.handleSetupRandomGame()},onToggleInstructionsDisplay:p}),i.a.createElement(s.a,{board:n,onNextBoard:function(t,n){return e.handleNextBoard(t,n)},onToggleLifeCell:function(t){return e.handleToggleLifeCell(t)},clusterSize:a,ref:function(t){e.boardRef=t}}))}}]),t}(l.Component);t.a=m},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n.n(a),o=n(29),l=(n.n(o),n(79)),i=n(80);n.n(i);n.i(o.render)(r.a.createElement(l.a,null),document.getElementById("root"))},89:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(90),l=(n.n(o),function(e){var t=e.activeTab,n=e.onChangeActiveTab,a=e.onToggleTabsContainer,o=e.tabs;return r.a.createElement("div",{className:"tabs-container grid-x"},r.a.createElement("div",{className:"cell"},r.a.createElement("ul",{className:"menu horizontal"},o.map(function(e,a){return r.a.createElement("li",{className:t===a?"active":null,key:e},r.a.createElement("a",{onClick:function(){return n(a)}},e))})),r.a.createElement("div",{className:"cell callout"},e.children.map(function(e,n){return n===t?e:null}))),r.a.createElement("div",{className:"close-instructions cell"},r.a.createElement("ul",{className:"menu horizontal align-right"},r.a.createElement("li",null,r.a.createElement("a",{onClick:a},"Close Instructions")))))});t.a=l},90:function(e,t){},91:function(e,t){},92:function(e,t){}},[88]);