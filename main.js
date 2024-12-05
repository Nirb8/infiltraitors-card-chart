// var lastClicked;
// var grid = clickableGrid(6,16,function(el,row,col,i){
// /*     console.log("You clicked on element:",el);
//     console.log("You clicked on row:",row);
//     console.log("You clicked on col:",col);
//     console.log("You clicked on item #:",i); */
//     console.log(el.classList);
//     console.log(Array.from(el.classList.values()));
// 		if (el.classList.contains('clicked')) {
//     	el.classList.remove('clicked');
//     }
//     else
//     {
//     	 el.classList.add('clicked');
//     }
    
//     if (row == 0 && col != 0){
//       console.log("number disable click");
//       var className = '.td-num-' + col;
//       /* console.log(className) */;
//       document.querySelectorAll(className).forEach(function(el) {
//             if (el.classList.contains('clicked')) {
//               el.classList.remove('clicked');
//             }
//         else
//         {
//           el.classList.add('clicked');
//         }
//       });
      
//     }
    
//     if (row != 0 && col == 0){
    
//       var className = '';
//       switch(row) {
//           case 1:
//               className = '.red';
//               break;
//           case 2:
//               className = '.yellow';
//               break;
//           case 3:
//               className = '.green';
//               break;
//           case 4:
//               className = '.blue';
//               break;
//           case 5:
//               className = '.black';
//               break;
//       }
//       document.querySelectorAll(className).forEach(function(el) {
//             if (el.classList.contains('clicked')) {
//               el.classList.remove('clicked');
//             }
//         else
//         {
//           el.classList.add('clicked');
//         }
//       });
      
//     }
// });

// document.body.appendChild(grid);
     
// function clickableGrid( rows, cols, callback ){
//     var i=0;
//     var grid = document.createElement('table');
//     grid.className = 'grid';
//     for (var r=0;r<rows;++r){
//         var tr = grid.appendChild(document.createElement('tr'));
//         for (var c=0;c<cols;++c){
//             var cell = tr.appendChild(document.createElement('td'));
//             cell.innerHTML = (++i - 1) % 16;
//             if(cell.innerHTML == 0){
//             	cell.innerHTML = '';
//             } else {
//             	cell.classList.add('td-num-' + cell.innerHTML);
//             }
//             switch(r) {
//                 case 1:
//                     cell.classList.add('red');
//                     break;
//                 case 2:
//                     cell.classList.add('yellow');
//                     break;
//                 case 3:
//                     cell.classList.add('green');
//                     break;
//                 case 4:
//                     cell.classList.add('blue');
//                     break;
//                 case 5:
//                     cell.classList.add('black');
//                     break;
//             }

              
            
//             cell.addEventListener('click',(function(el,r,c,i){
//                 return function(){
//                     callback(el,r,c,i);
//                 }
//             })(cell,r,c,i),false);
//         }
//     }
//     return grid;
// }