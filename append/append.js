// target = 'div'
//
// <div id="target">
//   <div>
//     <p>
//       <nav>
//         done
//       </nav>
//     </p>
//   </div>
// </div>

const exampleArr = ['div', 'p', 'nav'];

const targett = document.getElementById('target');


const append = (arr, target) => {
  const current = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const newElement = document.createElement(arr[i]);
    current.appendChild(newElement);
    current = newElement;
  }
  current.innerHTML = 'done';
};
