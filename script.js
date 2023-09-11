document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementsByClassName("search-bar-container")[0]
    .addEventListener("click", function () {
      document.getElementById("search-input").focus();
    });
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const icons = {
    world:
      '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="#000000"></path> </g> </svg>',
    remote: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" #000000"="" stroke-width="0.048" viewBox="4.27 9 15.45 12"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M12.0002 19C11.4479 19 11.0002 19.4477 11.0002 20C11.0002 20.5523 11.4479 21 12.0002 21V19ZM12.0102 21C12.5625 21 13.0102 20.5523 13.0102 20C13.0102 19.4477 12.5625 19 12.0102 19V21ZM14.6907 17.04C15.0993 17.4116 15.7317 17.3817 16.1033 16.9732C16.475 16.5646 16.445 15.9322 16.0365 15.5605L14.6907 17.04ZM18.0541 13.3403C18.4626 13.7119 19.0951 13.682 19.4667 13.2734C19.8384 12.8649 19.8084 12.2324 19.3999 11.8608L18.0541 13.3403ZM7.96394 15.5605C7.55539 15.9322 7.52546 16.5646 7.89708 16.9732C8.26871 17.3817 8.90117 17.4116 9.30971 17.04L7.96394 15.5605ZM4.60055 11.8608C4.192 12.2324 4.16207 12.8649 4.53369 13.2734C4.90532 13.682 5.53778 13.7119 5.94633 13.3403L4.60055 11.8608ZM12.0002 21H12.0102V19H12.0002V21ZM12.0002 16C13.0369 16 13.9795 16.3931 14.6907 17.04L16.0365 15.5605C14.9715 14.5918 13.5538 14 12.0002 14V16ZM12.0002 11C14.3321 11 16.4548 11.8855 18.0541 13.3403L19.3999 11.8608C17.4468 10.0842 14.8489 9 12.0002 9V11ZM9.30971 17.04C10.0209 16.3931 10.9635 16 12.0002 16V14C10.4466 14 9.02893 14.5918 7.96394 15.5605L9.30971 17.04ZM5.94633 13.3403C7.54565 11.8855 9.66836 11 12.0002 11V9C9.15148 9 6.55365 10.0842 4.60055 11.8608L5.94633 13.3403Z" fill="#000000"></path></g> </svg>`,
    location: `<svg style="fill: none" xmlns="http://www.w3.org/2000/svg" svgrepo_bgcarrier"="" stroke-width="0" viewBox="4 2 16 20">     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>     <g id="SVGRepo_iconCarrier">         <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>         <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>     </g> </svg>`,
    company: `<svg style="fill: none" xmlns="http://www.w3.org/2000/svg" svgrepo_bgcarrier"="" stroke-width="0" viewBox="2 3 20 18">     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>     <g id="SVGRepo_iconCarrier">         <path d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>     </g> </svg>`,
    visaCheck: `<svg xmlns="http://www.w3.org/2000/svg" id="master-artboard" version="1.1" x="0px" y="0px" style="enable-background:new 0 0 1400 980;" viewBox="39.82 12.96 1259.52 942.13">     <g transform="matrix(1.8244638442993162, 0, 0, 1.8244638442993162, -80.72742166151784, 16.961577618989395)">         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>         <g id="SVGRepo_iconCarrier">             <g>                 <g>                     <g>                         <path d="M213.333,119.467h85.333c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-85.333 c-4.71,0-8.533,3.823-8.533,8.533S208.623,119.467,213.333,119.467z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M179.2,153.6h153.6c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H179.2 c-4.71,0-8.533,3.823-8.533,8.533C170.667,149.777,174.49,153.6,179.2,153.6z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M256,204.8c-65.877,0-119.467,53.589-119.467,119.467S190.123,443.733,256,443.733s119.467-53.589,119.467-119.467 S321.877,204.8,256,204.8z M286.669,288.486c-9.02,1.007-19.115,1.647-30.669,1.647c-11.563,0-21.658-0.64-30.669-1.647 c6.921-34.116,22.434-54.494,30.669-63.309C264.243,234.01,279.748,254.379,286.669,288.486z M289.109,305.408 c0.606,5.982,1.024,12.194,1.024,18.859c0,6.665-0.418,12.868-1.016,18.842c-9.771-1.084-20.617-1.775-32.981-1.775 c-12.467,0-23.415,0.7-33.246,1.8c-0.606-5.982-1.024-12.194-1.024-18.867c0-6.664,0.418-12.877,1.024-18.859 c9.796,1.092,20.693,1.792,33.109,1.792S279.305,306.5,289.109,305.408z M234.889,224.077 c-9.481,12.919-20.702,33.289-26.377,61.858c-21.973-4.343-34.142-11.017-39.765-14.993 C183.236,247.33,206.933,229.965,234.889,224.077z M153.6,324.267c0-13.38,2.654-26.138,7.347-37.862 c8.141,5.385,22.272,12.203,45.056,16.538c-0.708,6.767-1.203,13.79-1.203,21.325c0,7.543,0.495,14.575,1.212,21.342 c-22.784,4.344-36.915,11.17-45.065,16.546C156.262,350.421,153.6,337.655,153.6,324.267z M168.764,377.617 c5.683-4.019,17.886-10.658,39.748-14.993c5.683,28.553,16.905,48.913,26.377,61.833 C206.942,418.569,183.253,401.22,168.764,377.617z M225.34,360.064c9.045-1.015,19.183-1.664,30.797-1.664 c11.494,0,21.555,0.64,30.532,1.63c-6.921,34.133-22.434,54.511-30.669,63.326C247.765,414.532,232.252,394.155,225.34,360.064z M277.12,424.457c9.472-12.919,20.693-33.306,26.377-61.884c21.922,4.318,34.125,10.957,39.791,14.95 C328.806,401.178,305.092,418.56,277.12,424.457z M358.4,324.267c0,13.355-2.654,26.086-7.313,37.794 c-8.184-5.385-22.323-12.186-45.09-16.495c0.708-6.758,1.203-13.773,1.203-21.299c0-7.535-0.503-14.558-1.212-21.316 c22.75-4.318,36.907-11.119,45.09-16.495C355.746,298.163,358.4,310.903,358.4,324.267z M303.488,285.935 c-5.675-28.561-16.896-48.939-26.368-61.858c27.964,5.888,51.669,23.27,66.167,46.908 C337.545,275.021,325.308,281.626,303.488,285.935z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M401.067,34.133h-8.533V25.6c0-14.114-11.486-25.6-25.6-25.6H93.867c-14.114,0-25.6,11.486-25.6,25.6v477.867 c0,4.71,3.823,8.533,8.533,8.533h324.267c23.927,0,42.667-18.739,42.667-42.667V76.8 C443.733,53.274,424.593,34.133,401.067,34.133z M426.667,469.333c0,14.353-11.238,25.6-25.6,25.6H85.333V25.6 c0-4.702,3.831-8.533,8.533-8.533h273.067c4.71,0,8.533,3.831,8.533,8.533v8.533H110.933c-4.71,0-8.533,3.823-8.533,8.533 c0,4.71,3.823,8.533,8.533,8.533h290.133c13.875,0,25.6,11.725,25.6,25.6V469.333z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                     </g>                 </g>             </g>         </g>     </g>     <g transform="matrix(31.67756272054428, -1.1693161043081597, 1.1693161043081597, 31.67756272054428, 632.6542378292106, 361.31701423618586)">         <g id="g-1" stroke-width="0"></g>         <g id="g-2" stroke-linecap="round" stroke-linejoin="round"></g>         <g id="g-3">             <path d="M 9.706999778747559 14.293000221252441 L 19 5 L 20.413999557495117 6.414000034332275 L 9.706999778747559 17.121000289916992 L 4 11.413999557495117 L 5.414000034332275 10 Z" fill-rule="evenodd" style="fill: rgb(47, 227, 11);"></path>         </g>     </g> </svg>`,
    visaEx: `<svg xmlns="http://www.w3.org/2000/svg" id="master-artboard" version="1.1" x="0px" y="0px" style="enable-background:new 0 0 1400 980;" viewBox="39.82 12.96 1147.22 942.13">     <g transform="matrix(1.8244638442993162, 0, 0, 1.8244638442993162, -80.72742166151784, 16.961577618989395)">         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>         <g id="SVGRepo_iconCarrier">             <g>                 <g>                     <g>                         <path d="M213.333,119.467h85.333c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-85.333 c-4.71,0-8.533,3.823-8.533,8.533S208.623,119.467,213.333,119.467z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M179.2,153.6h153.6c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H179.2 c-4.71,0-8.533,3.823-8.533,8.533C170.667,149.777,174.49,153.6,179.2,153.6z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M256,204.8c-65.877,0-119.467,53.589-119.467,119.467S190.123,443.733,256,443.733s119.467-53.589,119.467-119.467 S321.877,204.8,256,204.8z M286.669,288.486c-9.02,1.007-19.115,1.647-30.669,1.647c-11.563,0-21.658-0.64-30.669-1.647 c6.921-34.116,22.434-54.494,30.669-63.309C264.243,234.01,279.748,254.379,286.669,288.486z M289.109,305.408 c0.606,5.982,1.024,12.194,1.024,18.859c0,6.665-0.418,12.868-1.016,18.842c-9.771-1.084-20.617-1.775-32.981-1.775 c-12.467,0-23.415,0.7-33.246,1.8c-0.606-5.982-1.024-12.194-1.024-18.867c0-6.664,0.418-12.877,1.024-18.859 c9.796,1.092,20.693,1.792,33.109,1.792S279.305,306.5,289.109,305.408z M234.889,224.077 c-9.481,12.919-20.702,33.289-26.377,61.858c-21.973-4.343-34.142-11.017-39.765-14.993 C183.236,247.33,206.933,229.965,234.889,224.077z M153.6,324.267c0-13.38,2.654-26.138,7.347-37.862 c8.141,5.385,22.272,12.203,45.056,16.538c-0.708,6.767-1.203,13.79-1.203,21.325c0,7.543,0.495,14.575,1.212,21.342 c-22.784,4.344-36.915,11.17-45.065,16.546C156.262,350.421,153.6,337.655,153.6,324.267z M168.764,377.617 c5.683-4.019,17.886-10.658,39.748-14.993c5.683,28.553,16.905,48.913,26.377,61.833 C206.942,418.569,183.253,401.22,168.764,377.617z M225.34,360.064c9.045-1.015,19.183-1.664,30.797-1.664 c11.494,0,21.555,0.64,30.532,1.63c-6.921,34.133-22.434,54.511-30.669,63.326C247.765,414.532,232.252,394.155,225.34,360.064z M277.12,424.457c9.472-12.919,20.693-33.306,26.377-61.884c21.922,4.318,34.125,10.957,39.791,14.95 C328.806,401.178,305.092,418.56,277.12,424.457z M358.4,324.267c0,13.355-2.654,26.086-7.313,37.794 c-8.184-5.385-22.323-12.186-45.09-16.495c0.708-6.758,1.203-13.773,1.203-21.299c0-7.535-0.503-14.558-1.212-21.316 c22.75-4.318,36.907-11.119,45.09-16.495C355.746,298.163,358.4,310.903,358.4,324.267z M303.488,285.935 c-5.675-28.561-16.896-48.939-26.368-61.858c27.964,5.888,51.669,23.27,66.167,46.908 C337.545,275.021,325.308,281.626,303.488,285.935z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M401.067,34.133h-8.533V25.6c0-14.114-11.486-25.6-25.6-25.6H93.867c-14.114,0-25.6,11.486-25.6,25.6v477.867 c0,4.71,3.823,8.533,8.533,8.533h324.267c23.927,0,42.667-18.739,42.667-42.667V76.8 C443.733,53.274,424.593,34.133,401.067,34.133z M426.667,469.333c0,14.353-11.238,25.6-25.6,25.6H85.333V25.6 c0-4.702,3.831-8.533,8.533-8.533h273.067c4.71,0,8.533,3.831,8.533,8.533v8.533H110.933c-4.71,0-8.533,3.823-8.533,8.533 c0,4.71,3.823,8.533,8.533,8.533h290.133c13.875,0,25.6,11.725,25.6,25.6V469.333z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                     </g>                 </g>             </g>         </g>     </g>     <g transform="matrix(21.641778945922848, 0, 0, 21.641778945922848, 648.1609515267041, 348.86397161447894)">         <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" style="fill: rgb(232, 21, 24);"></path>     </g> </svg>`,
    visaQuestion: `<svg xmlns="http://www.w3.org/2000/svg" id="master-artboard" version="1.1" x="0px" y="0px" style="enable-background:new 0 0 1400 980;" viewBox="39.82 12.96 1047.99 942.13">     <g transform="matrix(1.8244638442993162, 0, 0, 1.8244638442993162, -80.72742166151784, 16.961577618989395)">         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>         <g id="SVGRepo_iconCarrier">             <g>                 <g>                     <g>                         <path d="M213.333,119.467h85.333c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-85.333 c-4.71,0-8.533,3.823-8.533,8.533S208.623,119.467,213.333,119.467z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M179.2,153.6h153.6c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H179.2 c-4.71,0-8.533,3.823-8.533,8.533C170.667,149.777,174.49,153.6,179.2,153.6z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M256,204.8c-65.877,0-119.467,53.589-119.467,119.467S190.123,443.733,256,443.733s119.467-53.589,119.467-119.467 S321.877,204.8,256,204.8z M286.669,288.486c-9.02,1.007-19.115,1.647-30.669,1.647c-11.563,0-21.658-0.64-30.669-1.647 c6.921-34.116,22.434-54.494,30.669-63.309C264.243,234.01,279.748,254.379,286.669,288.486z M289.109,305.408 c0.606,5.982,1.024,12.194,1.024,18.859c0,6.665-0.418,12.868-1.016,18.842c-9.771-1.084-20.617-1.775-32.981-1.775 c-12.467,0-23.415,0.7-33.246,1.8c-0.606-5.982-1.024-12.194-1.024-18.867c0-6.664,0.418-12.877,1.024-18.859 c9.796,1.092,20.693,1.792,33.109,1.792S279.305,306.5,289.109,305.408z M234.889,224.077 c-9.481,12.919-20.702,33.289-26.377,61.858c-21.973-4.343-34.142-11.017-39.765-14.993 C183.236,247.33,206.933,229.965,234.889,224.077z M153.6,324.267c0-13.38,2.654-26.138,7.347-37.862 c8.141,5.385,22.272,12.203,45.056,16.538c-0.708,6.767-1.203,13.79-1.203,21.325c0,7.543,0.495,14.575,1.212,21.342 c-22.784,4.344-36.915,11.17-45.065,16.546C156.262,350.421,153.6,337.655,153.6,324.267z M168.764,377.617 c5.683-4.019,17.886-10.658,39.748-14.993c5.683,28.553,16.905,48.913,26.377,61.833 C206.942,418.569,183.253,401.22,168.764,377.617z M225.34,360.064c9.045-1.015,19.183-1.664,30.797-1.664 c11.494,0,21.555,0.64,30.532,1.63c-6.921,34.133-22.434,54.511-30.669,63.326C247.765,414.532,232.252,394.155,225.34,360.064z M277.12,424.457c9.472-12.919,20.693-33.306,26.377-61.884c21.922,4.318,34.125,10.957,39.791,14.95 C328.806,401.178,305.092,418.56,277.12,424.457z M358.4,324.267c0,13.355-2.654,26.086-7.313,37.794 c-8.184-5.385-22.323-12.186-45.09-16.495c0.708-6.758,1.203-13.773,1.203-21.299c0-7.535-0.503-14.558-1.212-21.316 c22.75-4.318,36.907-11.119,45.09-16.495C355.746,298.163,358.4,310.903,358.4,324.267z M303.488,285.935 c-5.675-28.561-16.896-48.939-26.368-61.858c27.964,5.888,51.669,23.27,66.167,46.908 C337.545,275.021,325.308,281.626,303.488,285.935z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                         <path d="M401.067,34.133h-8.533V25.6c0-14.114-11.486-25.6-25.6-25.6H93.867c-14.114,0-25.6,11.486-25.6,25.6v477.867 c0,4.71,3.823,8.533,8.533,8.533h324.267c23.927,0,42.667-18.739,42.667-42.667V76.8 C443.733,53.274,424.593,34.133,401.067,34.133z M426.667,469.333c0,14.353-11.238,25.6-25.6,25.6H85.333V25.6 c0-4.702,3.831-8.533,8.533-8.533h273.067c4.71,0,8.533,3.831,8.533,8.533v8.533H110.933c-4.71,0-8.533,3.823-8.533,8.533 c0,4.71,3.823,8.533,8.533,8.533h290.133c13.875,0,25.6,11.725,25.6,25.6V469.333z" style="stroke: rgb(0, 0, 0); stroke-width: 8;"></path>                     </g>                 </g>             </g>         </g>     </g>     <g transform="matrix(40.39238357530362, 0.11802844136564884, -0.11802844136564884, 40.39238357530362, 640.0603640990453, 348.7308956483945)">         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07505 4.10001C5.07505 2.91103 6.25727 1.92502 7.50005 1.92502C8.74283 1.92502 9.92505 2.91103 9.92505 4.10001C9.92505 5.19861 9.36782 5.71436 8.61854 6.37884L8.58757 6.4063C7.84481 7.06467 6.92505 7.87995 6.92505 9.5C6.92505 9.81757 7.18248 10.075 7.50005 10.075C7.81761 10.075 8.07505 9.81757 8.07505 9.5C8.07505 8.41517 8.62945 7.90623 9.38156 7.23925L9.40238 7.22079C10.1496 6.55829 11.075 5.73775 11.075 4.10001C11.075 2.12757 9.21869 0.775024 7.50005 0.775024C5.7814 0.775024 3.92505 2.12757 3.92505 4.10001C3.92505 4.41758 4.18249 4.67501 4.50005 4.67501C4.81761 4.67501 5.07505 4.41758 5.07505 4.10001ZM7.50005 13.3575C7.9833 13.3575 8.37505 12.9657 8.37505 12.4825C8.37505 11.9992 7.9833 11.6075 7.50005 11.6075C7.0168 11.6075 6.62505 11.9992 6.62505 12.4825C6.62505 12.9657 7.0168 13.3575 7.50005 13.3575Z" fill="#000000" style="fill: rgb(255, 165, 0); stroke: rgb(255, 165, 0);"></path>     </g> </svg>`,
    contract: `<svg xmlns="http://www.w3.org/2000/svg" id="master-artboard" version="1.1" x="0px" y="0px" style="enable-background:new 0 0 1400 980;" viewBox="198.64 0 1302.21 980">     <defs>         <linearGradient id="gradient-0" gradientUnits="objectBoundingBox" x1="0.5" y1="0" x2="0.5" y2="1">             <stop offset="0" style="stop-color: #ffffff"></stop>             <stop offset="1" style="stop-color: #cccccc"></stop>         </linearGradient>         <linearGradient id="gradient-1" gradientUnits="objectBoundingBox" x1="0.5" y1="0" x2="0.5" y2="1">             <stop offset="0" style="stop-color: #ffffff"></stop>             <stop offset="1" style="stop-color: #cccccc"></stop>         </linearGradient>         <linearGradient id="gradient-2" gradientUnits="objectBoundingBox" x1="0.5" y1="0" x2="0.5" y2="1">             <stop offset="0" style="stop-color: #ffffff"></stop>             <stop offset="1" style="stop-color: #cccccc"></stop>         </linearGradient>     </defs>     <g transform="matrix(1.9140625000000002, 0, 0, 1.9140625000000002, 66.3598249019717, 0.00005345788667909801)">         <g>             <g>                 <g>                     <path d="M437.403,129.686c-1.546-1.546-86.03-86.02-124.209-124.197C309.766,2.058,304.96,0,299.943,0h-212.1 C77.498,0,69.111,8.387,69.111,18.732v474.537c0,10.345,8.387,18.732,18.732,18.732h336.314c10.345,0,18.732-8.387,18.732-18.732 V142.932C442.889,138.069,440.834,133.115,437.403,129.686z M318.681,63.956c3.186,3.184,53.915,53.915,60.249,60.247h-60.249 V63.956z M405.427,474.537H106.575V37.463h174.643v105.472c0,10.345,8.387,18.732,18.732,18.732h105.477V474.537z"></path>                     <path d="M268.37,208.002c0-3.646-4.948-7.032-9.897-7.032c-5.729,0-9.897,3.385-9.897,7.032v7.292 c-27.604,3.906-52.084,19.792-52.084,52.866c0,33.334,28.125,44.533,52.084,53.646v42.189 c-19.271-3.385-28.125-18.75-39.063-18.75c-9.895,0-17.709,13.021-17.709,21.876c0,16.667,25.523,32.813,56.772,33.854v6.51 c0,3.646,4.167,7.032,9.897,7.032c4.949,0,9.897-3.385,9.897-7.032v-7.551c30.469-4.948,51.304-24.48,51.304-56.772 c0-35.157-27.604-47.397-51.304-56.251v-38.022c16.927,1.302,21.876,9.636,30.469,9.636c11.459,0,16.147-14.324,16.147-21.355 c0-17.969-30.469-22.136-46.616-22.657V208.002z M251.183,280.66c-9.897-4.167-16.667-8.855-16.667-16.406 c0-6.25,4.948-12.241,16.667-14.583V280.66z M281.652,347.328c0,9.375-7.032,14.322-15.887,16.406v-34.897 C275.141,333.266,281.652,338.734,281.652,347.328z"></path>                     <path d="M251.8,142.935c0-10.345-8.387-18.732-18.732-18.732h-78.345c-10.345,0-18.732,8.387-18.732,18.732 s8.387,18.732,18.732,18.732h78.345C243.414,161.667,251.8,153.282,251.8,142.935z"></path>                 </g>             </g>         </g>     </g>     <g transform="matrix(22.948306677595358, -22.708105450843874, 22.708105450843874, 22.948306677595358, 541.0703124543304, 516.9519740118867)">         <path opacity="0.1" d="M18.556 8.90942L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L15.0647 5.35974C15.0742 5.4062 15.0969 5.45049 15.1329 5.48653L18.5506 8.90426C18.5524 8.90601 18.5542 8.90773 18.556 8.90942Z" fill="#323232" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0); fill-opacity: 0;"></path>         <path d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0); fill-opacity: 0;"></path>         <path d="M15.3096 5.30981L18.7273 8.72755" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0); fill-opacity: 0;"></path>     </g> </svg>`,
    fullTime: `<svg xmlns="http://www.w3.org/2000/svg" id="master-artboard" version="1.1" x="0px" y="0px" style="enable-background:new 0 0 1400 980;" viewBox="290.67 80.67 818.67 818.67">     <g transform="matrix(40.833335876464844, 0, 0, 40.833335876464844, 209.99990844726562, -0.00005262045669951476)">         <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill-opacity: 0;"></path>         <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill-opacity: 0;"></path>         <path d="M22 12L12.3922 13.9216C12.1333 13.9733 11.8667 13.9733 11.6078 13.9216L2 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill-opacity: 0;"></path>     </g> </svg>`,
    partTime: `<svg xmlns="http://www.w3.org/2000/svg" id="master-artboard" version="1.1" x="0px" y="0px" style="enable-background:new 0 0 1400 980;" viewBox="142.38 55.29 1045.73 850.94">     <g transform="matrix(41.192642211914055, 0, 0, 41.192642211914055, 60.99431313717582, -1.00776209050764)">         <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill-opacity: 0;"></path>         <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill-opacity: 0;"></path>         <path d="M22 12L12.3922 13.9216C12.1333 13.9733 11.8667 13.9733 11.6078 13.9216L2 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill-opacity: 0;"></path>     </g>     <g transform="matrix(26.024921417236325, 0, 0, 26.024921417236325, 679.6267708703297, -21.786719457451227)">         <path d="M12 14V11M12 6C7.85786 6 4.5 9.35786 4.5 13.5C4.5 17.6421 7.85786 21 12 21C16.1421 21 19.5 17.6421 19.5 13.5C19.5 11.5561 18.7605 9.78494 17.5474 8.4525M12 6C14.1982 6 16.1756 6.94572 17.5474 8.4525M12 6V3M19.5 6.5L17.5474 8.4525M12 3H9M12 3H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill-opacity: 1; fill: rgb(255, 255, 255);"></path>     </g> </svg>`,
    experience: `<svg xmlns="http://www.w3.org/2000/svg" id="master-artboard" version="1.1" x="0px" y="0px" style="enable-background:new 0 0 1400 980;" viewBox="337.1 71.46 721.87 857.31">     <g transform="matrix(11.224331855773924, 0, 0, 11.224331855773924, 337.5957123912501, 209.9147728197479)">         <path fill="#231F20" d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M49.972,31 c-0.138-5.582-1.414-10.878-3.613-15.667c2.652-1.022,5.169-2.317,7.515-3.854c4.824,5.14,7.854,11.976,8.102,19.521H49.972z M33.333,61.966c-0.11,0.005-0.222,0.005-0.333,0.009V50.035c3.324,0.087,6.547,0.581,9.605,1.47 C40.184,55.541,37.029,59.084,33.333,61.966z M44.549,52.141c2.283,0.801,4.462,1.817,6.523,3.018 c-3.991,3.29-8.849,5.563-14.178,6.438C39.902,58.861,42.484,55.672,44.549,52.141z M21.394,51.505 c3.059-0.89,6.282-1.383,9.606-1.47v11.939c-0.111-0.004-0.223-0.004-0.333-0.009C26.97,59.084,23.816,55.541,21.394,51.505z M27.105,61.596c-5.329-0.874-10.187-3.147-14.178-6.438c2.062-1.2,4.24-2.217,6.523-3.017 C21.515,55.672,24.098,58.861,27.105,61.596z M2.025,31c0.248-7.545,3.277-14.381,8.102-19.521c2.346,1.536,4.862,2.831,7.515,3.854 C15.442,20.122,14.166,25.418,14.028,31H2.025z M43.57,14.196c-3.345,1.069-6.894,1.67-10.57,1.766V2.025 c0.111,0.004,0.223,0.004,0.333,0.009C37.541,5.314,41.047,9.453,43.57,14.196z M36.895,2.404 c5.944,0.976,11.298,3.696,15.521,7.622c-2.176,1.391-4.496,2.57-6.944,3.499C43.278,9.326,40.369,5.562,36.895,2.404z M31,2.025 v13.937c-3.677-0.096-7.226-0.696-10.57-1.766c2.523-4.743,6.029-8.882,10.237-12.162C30.777,2.029,30.889,2.029,31,2.025z M18.529,13.525c-2.448-0.929-4.769-2.108-6.944-3.499c4.223-3.926,9.576-6.646,15.521-7.622 C23.631,5.562,20.722,9.326,18.529,13.525z M19.532,16.009c3.622,1.189,7.472,1.873,11.468,1.972V31H16.031 C16.17,25.654,17.403,20.584,19.532,16.009z M31,33v15.036c-3.684,0.092-7.245,0.665-10.615,1.689 C17.732,44.712,16.188,39.029,16.031,33H31z M33,48.036V33h14.969c-0.156,6.029-1.701,11.712-4.354,16.726 C40.245,48.701,36.684,48.128,33,48.036z M33,31V17.98c3.996-0.099,7.846-0.782,11.468-1.972c2.129,4.575,3.362,9.646,3.501,14.991 H33z M2.025,33h12.003c0.154,6.253,1.74,12.146,4.447,17.369c-2.496,0.899-4.871,2.044-7.109,3.396 C5.827,48.513,2.294,41.172,2.025,33z M52.634,53.766c-2.238-1.353-4.613-2.497-7.109-3.396c2.707-5.224,4.293-11.116,4.447-17.369 h12.003C61.706,41.172,58.173,48.513,52.634,53.766z" style="stroke: rgb(0, 0, 0); stroke-width: 1;"></path>     </g>     <g transform="matrix(3.606806516647339, 0, 0, 3.606806516647339, -3456.764761241562, -2924.2148353345488)">         <g>             <path d="M1151.998,921.75c-4.129,0-8.17-0.771-12.01-2.292l-50.167-19.888c0,11.08,0,27.65,0,32.066 c0,15.562,27.836,28.174,62.178,28.174s62.181-12.612,62.181-28.174v-32.067l-50.172,19.889 C1160.168,920.979,1156.127,921.75,1151.998,921.75z"></path>             <path d="M1248.592,867.082l-87.989-34.878c-5.526-2.19-11.681-2.19-17.208,0l-87.988,34.878c-2.057,0.815-3.407,2.804-3.407,5.016 c0,2.213,1.351,4.201,3.407,5.017l12.317,4.882v34.925c-2.736,1.865-4.533,5.007-4.533,8.568c0,3.262,1.508,6.171,3.863,8.071 l-3.751,18.007c-0.503,2.416,0.108,4.931,1.666,6.845c1.557,1.915,3.894,3.026,6.361,3.026h4.449c2.468,0,4.804-1.111,6.361-3.026 c1.557-1.914,2.168-4.429,1.666-6.845l-3.752-18.007c2.356-1.9,3.864-4.81,3.864-8.071c0-3.562-1.797-6.703-4.533-8.568v-30.303 l63.729,25.264c5.708,2.263,12.063,2.263,17.771,0l87.709-34.768c2.057-0.815,3.407-2.804,3.407-5.017 C1252,869.886,1250.649,867.897,1248.592,867.082z"></path>         </g>     </g> </svg>`,
    created: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" id="date-alt-add" data-name="Flat Line" class="icon flat-line" viewBox="2 2 20 20">  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>  <g id="SVGRepo_iconCarrier">      <circle id="secondary" cx="12" cy="15" r="6" style="fill: #ffffff; stroke-width: 2;"></circle>      <path id="primary" d="M7.54,19H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H20a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H16.46" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>      <path id="primary-2" data-name="primary" d="M12,9a6,6,0,1,0,6,6A6,6,0,0,0,12,9ZM3,9H21M16,3V6M8,3V6m4,11V13m-2,2h4" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>  </g>  </svg>`,
  };

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 1500 ||
      document.documentElement.scrollTop > 1500
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const searchInputs = document.getElementById("search-input");
  const clearIcon = document.querySelector(".clear-icon");

  function formatSalary(salary) {
    if (typeof salary !== "number") {
      return "No Salary Listed";
    }
    const salaryString = salary.toString();
    const [integerPart, decimalPart] = salaryString.split(".");
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
    let formattedSalary = "$" + formattedIntegerPart;
    if (decimalPart) {
      formattedSalary += "." + decimalPart;
    }
    return formattedSalary;
  }

  searchInputs.addEventListener("keyup", function () {
    const inputValue = this.value.trim();
    if (inputValue.length > 0) {
      clearIcon.style.display = "block";
    } else {
      clearIcon.style.display = "none";
    }
  });

  clearIcon.addEventListener("click", function () {
    searchInputs.value = "";
    clearIcon.style.display = "none";
    fetchAllData();
  });

  const dropdownData = {
    dropdown1: [],
    dropdown2: [
      "Remote",
      "United States",
      "Europe",
      "United Kingdom",
      "Africa",
      "Asia",
      "Canada",
      "South America",
      "Central America",
      "Middle East",
      "Australia/New Zealand",
    ],
    dropdown3: ["Yes", "No", "In some cases"],
    dropdown4: [],
    dropdown5: [],
    dropdown6: ["Part-Time", "Full-Time", "Contract/Term"],
    dropdown7: [
      "Less than $30,000",
      "$30,000 - $50,000",
      "$50,000 - $75,000",
      "$75,000 - $100,000",
      "$100,000 - $150,000",
      "$150,000 - $200,000",
      "$200,000 - $300,000",
      "$300,000 - $500,000",
      "Over $500,000",
    ],
    dropdown8: [
      "24 Hours Ago",
      "3 Days Ago",
      "7 Days Ago",
      "14 Days Ago",
      "30 Days Ago",
    ],
  };

  const apiKey =
    "patNamJqXdDlueUxM.6e6e7f9efc1e8ab27056891e8f3c51c97bf2f994036cc554fb9618143bc58c31";

  let timeoutId;
  const dotSpinner = document.querySelector(".newtons-cradle");

  async function fetchAPI(url) {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  async function fetchTableRecords(tableName, offset = null) {
    const baseId = "apprdsx9uO4l5FieL";
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}?view=MAIN+-+Grid+view${offset ? `&offset=${offset}` : ""}`;
    return fetchAPI(url);
  }

  async function fetchTableRecordsWithOffset(tableName) {
    let allRecords = [];
    let offset = null;
    do {
      const { records, offset: newOffset } = await fetchTableRecords(
        tableName,
        offset
      );
      allRecords = allRecords.concat(records);
      offset = newOffset;
    } while (offset);
    return allRecords;
  }

  async function fetchFilterOptions() {
    const companyUniqueValues = new Set();
    const fetchedCompanies = await fetchTableRecordsWithOffset("Table 1");
    fetchedCompanies.forEach((record) => {
      const value = record.fields["Company/Org"];
      if (value !== undefined) {
        companyUniqueValues.add(value.trimStart());
      }
    });
    const companyUniqueArray = Array.from(companyUniqueValues).sort((a, b) =>
      a.localeCompare(b)
    );
    dropdownData["dropdown1"] = companyUniqueArray;

    const uniqueExperiences = [];
    const fetchedExperiences = await fetchTableRecordsWithOffset("Experience");
    fetchedExperiences.forEach((record) => {
      const value = record.fields["Experiences"];
      if (value !== undefined) {
        uniqueExperiences.push(value.trimStart());
      }
    });
    dropdownData["dropdown4"] = uniqueExperiences;

    const uniqueFields = [];
    const fetchedFields = await fetchTableRecordsWithOffset("Field");
    fetchedFields.forEach((record) => {
      const value = record.fields["Fields"];
      if (value !== undefined) {
        uniqueFields.push(value.trimStart());
      }
    });
    dropdownData["dropdown5"] = uniqueFields;

    renderDropdowns();
  }

  fetchFilterOptions();

  function renderDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const dropdownButton = dropdown.querySelector(".dropdown-button");
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");
      const dropdownId = dropdown.id;
      const searchOption = document.createElement("div");
      searchOption.innerHTML = `
      <input type="text" class="dropdown-search" placeholder="Search...">
        `;
      dropdownMenu.appendChild(searchOption);
      dropdownData[dropdownId].forEach((optionText) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("dropdown-option");
        optionElement.classList.add("checkbox-rect2");
        optionElement.innerHTML = `
          <input type="checkbox" class="dropdown-option-checkbox" id="checkbox-rect2" name="check">
          <span>${optionText}</span>
        `;
        dropdownMenu.appendChild(optionElement);
        const checkbox = optionElement.querySelector(
          ".dropdown-option-checkbox"
        );
        checkbox.addEventListener("click", function (event) {
          event.stopPropagation();
          updateButtonState();
        });
        optionElement.addEventListener("click", function (event) {
          checkbox.checked = !checkbox.checked;
          optionElement.classList.toggle("selected");
          updateButtonState();
          event.preventDefault();
          const selectedOptions = document.querySelectorAll(
            ".dropdown-option.selected"
          );
          if (selectedOptions.length === 0) {
            document.querySelector(".remove-filter").classList.remove("hidden");
            document.querySelector(".remove-filter").classList.add("hidden");
          } else {
            document.querySelector(".remove-filter").classList.remove("hidden");
          }
          decreaseBtn.classList.remove("show");
          decreaseBtn2.classList.remove("show");
          increaseBtn.classList.remove("show");
          increaseBtn2.classList.remove("show");
          const deleteMe = document.getElementById("toDelete");
          if (deleteMe) deleteMe.remove();
          clearTimeout(timeoutId);
          dotSpinner.classList.remove("hidden");
          timeoutId = setTimeout(() => {
            fetchAllData();
            dotSpinner.classList.add("hidden");
          }, 1000);
        });
      });
      dropdownButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("active");
      });
      const dropdownButtons = document.querySelectorAll(".dropdown-button");

      dropdownButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const dropdownMenus = document.querySelectorAll(".dropdown-menu");
          const clickedMenu = button.nextElementSibling;
          dropdownMenus.forEach((menu) => {
            if (menu !== clickedMenu) {
              menu.classList.remove("active");
            }
          });
          clickedMenu.classList.toggle("active");
        });
      });

      document.addEventListener("click", function (event) {
        const dropdownMenus = document.querySelectorAll(".dropdown-menu");
        const dropdownButtons = document.querySelectorAll(".dropdown-button");
        let isInsideDropdown = false;
        dropdownMenus.forEach((dropdownMenu) => {
          if (dropdownMenu.contains(event.target)) {
            isInsideDropdown = true;
          }
        });
        dropdownButtons.forEach((dropdownButton) => {
          if (dropdownButton.contains(event.target)) {
            isInsideDropdown = true;
          }
        });
        if (!isInsideDropdown) {
          dropdownMenus.forEach((dropdownMenu) => {
            dropdownMenu.classList.remove("active");
          });
        }
      });

      const dropSearch = document.querySelector(
        `#${dropdownId} .dropdown-search`
      );
      const dropSearchOptions = document.querySelectorAll(
        `#${dropdownId} .dropdown-option`
      );
      dropSearch.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        dropSearchOptions.forEach(function (option) {
          const optionText = option
            .querySelector("span")
            .textContent.toLowerCase();
          if (optionText.includes(searchTerm)) {
            option.style.display = "block";
          } else {
            option.style.display = "none";
          }
        });
      });

      updateButtonState();
    });
  }

  function updateButtonState() {
    const selectedOptions = document.querySelectorAll(
      ".dropdown-option.selected"
    );
    selectedOptions.forEach((option) => {
      option.querySelector(".dropdown-option-checkbox").checked = true;
    });

    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    dropdownButtons.forEach((button) => {
      const dropdownMenu = button.nextElementSibling;
      button.classList.toggle(
        "selected",
        dropdownMenu.querySelector(".dropdown-option.selected")
      );
    });
    document.addEventListener("click", function (event) {
      const dropdownMenus = document.querySelectorAll(".dropdown-menu");
      const dropdownButtons = document.querySelectorAll(".dropdown-button");
      const dropDownSearch = document.querySelectorAll(".dropdown-search");
      const dropdownOptions = document.querySelectorAll(".dropdown-option");
      let isInsideDropdown = false;
      dropdownMenus.forEach((dropdownMenu) => {
        if (dropdownMenu.contains(event.target)) {
          isInsideDropdown = true;
        }
      });
      dropdownButtons.forEach((dropdownButton) => {
        if (dropdownButton.contains(event.target)) {
          isInsideDropdown = true;
        }
      });
      if (!isInsideDropdown) {
        dropdownMenus.forEach((dropdownMenu) => {
          dropdownMenu.classList.remove("active");
        });
        dropDownSearch.forEach((input) => {
          input.value = "";
        });
        dropdownOptions.forEach((option) => {
          option.style.display = "block";
        });
      }
    });
  }

  function buttons(input) {
    if (!input) return "";
    const regex = /\bhttps?:\/\/\S+/gi;
    const matches = [];
    let match;
    while ((match = regex.exec(input)) !== null) {
      matches.push(match[0]);
    }
    let b = "";
    if (matches.length === 1) {
      return `<a href="${matches[0]}" target="_blank" style='text-decoration: none;'><div class='apply-btn'><p>Apply<p></div></a>`;
    }
    for (let i = 0; i < matches.length; i++) {
      b += `<a href="${
        matches[i]
      }" target="_blank" style='text-decoration: none;'><div class='apply-btn'>Apply (${
        i + 1
      })</div></a>`;
    }
    return b;
  }

  function fields(input) {
    if (!input) return "";
    let b = "";
    for (l of input) {
      b += `<div class="field-div" > <p>${l}</p></div>`;
    }
    return b;
  }

  const removeFilterButton = document.querySelector(".remove-filter");
  removeFilterButton.addEventListener("click", function () {
    const selectedOptions = document.querySelectorAll(
      ".dropdown-option.selected"
    );
    selectedOptions.forEach((option) => {
      option.classList.remove("selected");
    });
    const selectedButtons = document.querySelectorAll(
      ".dropdown-button.selected"
    );
    const selectedChecks = document.querySelectorAll(
      ".dropdown-option-checkbox"
    );
    selectedButtons.forEach((option) => {
      option.classList.remove("selected");
    });
    selectedChecks.forEach((option) => {
      option.checked = false;
    });
    decreaseBtn.classList.remove("show");
    decreaseBtn2.classList.remove("show");
    increaseBtn.classList.remove("show");
    increaseBtn2.classList.remove("show");
    document.getElementById("toDelete").remove();
    clearTimeout(timeoutId);
    dotSpinner.classList.remove("hidden");
    timeoutId = setTimeout(() => {
      fetchAllData();
      dotSpinner.classList.add("hidden");
    }, 1000);
    document.querySelector(".remove-filter").classList.add("hidden");
  });

  const dropdownDiv = document.querySelector(".dropdown-div");
  const paginElement = document.querySelector(".pagin");
  const originalHeight = dropdownDiv.clientHeight;

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const newHeight = Math.round(entry.contentRect.height);
      if (newHeight + 20 !== originalHeight) {
        paginElement.style.marginTop = `-${newHeight + 20 - originalHeight}px`;
      } else {
        paginElement.style.marginTop = `0px`;
      }
    }
  });

  resizeObserver.observe(dropdownDiv);

  let offset = 0;
  let offsetArray = [""];
  let globalUrl = "";
  let offsetKey = "&offset=";

  const increaseBtn = document.querySelector(".increase");
  const increaseBtn2 = document.querySelector(".increase2");
  const decreaseBtn = document.querySelector(".decrease");
  const decreaseBtn2 = document.querySelector(".decrease2");

  clearTimeout(timeoutId);
  dotSpinner.classList.remove("hidden");
  timeoutId = setTimeout(() => {
    fetchAllData();
    dotSpinner.classList.add("hidden");
  }, 1000);

  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function (event) {
    event.preventDefault();
    const deleteMe = document.getElementById("toDelete");
    if (deleteMe) deleteMe.remove();
    clearTimeout(timeoutId);
    decreaseBtn.classList.remove("show");
    decreaseBtn2.classList.remove("show");
    increaseBtn.classList.remove("show");
    increaseBtn2.classList.remove("show");
    dotSpinner.classList.remove("hidden");
    timeoutId = setTimeout(() => {
      fetchAllData();
      dotSpinner.classList.add("hidden");
    }, 1000);
  });

  function getFilterFormula(options) {
    const daysAgoMapping = {
      "24 Hours Ago": 1,
      "3 Days Ago": 3,
      "7 Days Ago": 7,
      "14 Days Ago": 14,
      "30 Days Ago": 30,
    };

    let max = -Infinity;

    options.forEach((e) => {
      if (daysAgoMapping[e] > max) {
        max = daysAgoMapping[e];
      }
    });

    return `DATETIME_DIFF(TODAY(), {Created}, 'days') <= ${max}`;
  }

  function generateSalaryFilterFormula(options) {
    const formulaParts = [];

    options.forEach((option) => {
      let lowerBound = 0;
      let upperBound = 0;

      if (option === "Less than $30,000") {
        formulaParts.push(`AND({Max Salary (USD)} <= 30000)`);
      } else if (option === "Over $500,000") {
        formulaParts.push(`AND({Max Salary (USD)} > 500000)`);
      } else {
        const rangeMatch = option.match(/\$([\d,]+) - \$([\d,]+)/);
        if (rangeMatch) {
          lowerBound = parseInt(rangeMatch[1].replace(/,/g, ""), 10);
          upperBound = parseInt(rangeMatch[2].replace(/,/g, ""), 10);
        }
        formulaParts.push(
          `AND({Max Salary (USD)} >= ${lowerBound}, {Max Salary (USD)} <= ${upperBound})`
        );
      }
    });

    return `OR(${formulaParts.join(", ")})`;
  }
  function urlCreator(s) {
    const baseUrl = "https://api.airtable.com/v0/apprdsx9uO4l5FieL/Table%201?";
    const pageSize = "pageSize=99";
    const sort = `sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=desc`;
    let filterFunction = "filterByFormula=";
    const filters = [];
    const dropdownName = {
      dropdown1: "Company/Org",
      dropdown2: "Region",
      dropdown3: "Visa sponsorship",
      dropdown4: "Experience Level",
      dropdown5: "Field",
      dropdown6: "Type",
      dropdown7: "Max Salary (USD)",
      dropdown8: "Created",
    };

    for (const f in s) {
      if (f === "searchInput") {
        const searchTerms = s[f].toLowerCase().split(" ");
        const searchConditions = searchTerms.map(
          (term) => `SEARCH("${term}", {Concat})`
        );
        filters.push(`AND(${searchConditions.join(",")})`);
      } else if (f === "dropdown7" && s[f].length) {
        filters.push(generateSalaryFilterFormula(s[f]));
      } else if (f === "dropdown8" && s[f].length) {
        filters.push(getFilterFormula(s[f]));
      } else if (s[f].length) {
        filters.push(
          `OR(${s[f]
            .map((e) => `SEARCH('${e}', {${dropdownName[f]}})`)
            .join(",")})`
        );
      }
    }

    filterFunction += `${encodeURIComponent("AND(" + filters.join(",") + ")")}`;
    return baseUrl + [pageSize, sort, filterFunction].join("&");
  }

  function fetchAllData() {
    const selectedOptions = {
      dropdown1: [],
      dropdown2: [],
      dropdown3: [],
      dropdown4: [],
      dropdown5: [],
      dropdown6: [],
      dropdown7: [],
      dropdown8: [],
      searchInput: "",
    };

    selectedOptions.searchInput = document.getElementById("search-input").value;

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const dropdownId = dropdown.id;
      const selectedOptionElements = dropdown.querySelectorAll(
        ".dropdown-option.selected"
      );

      selectedOptionElements.forEach((optionElement) => {
        const optionText = optionElement.querySelector("span").textContent;
        selectedOptions[dropdownId].push(optionText);
      });
    });
    let url = urlCreator(selectedOptions);
    let newOffset = "&offset=" + offsetArray[offset];
    if (document.getElementById("toDelete"))
      document.getElementById("toDelete").remove();

    if (url !== globalUrl || (url === globalUrl && offsetKey === newOffset)) {
      offset = 0;
      offsetArray = [""];
      setCards(url);
      offsetKey = "&offset=";
      globalUrl = url;
    } else if (url === globalUrl && offsetKey !== newOffset) {
      setCards(url + newOffset);
      offsetKey = newOffset;
    }

    async function setCards(newUrl) {
      fetch(newUrl, {
        headers: {
          Authorization: `Bearer patNamJqXdDlueUxM.6e6e7f9efc1e8ab27056891e8f3c51c97bf2f994036cc554fb9618143bc58c31`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data.records.forEach((record) => {
            const createdDate = new Date(record.fields.Created);
            const options = { year: "numeric", month: "long", day: "numeric" };
            const formattedDate = createdDate.toLocaleDateString(
              undefined,
              options
            );
            record.fields.Created = formattedDate;
          });
          if (data.offset && !offsetArray[offset + 1]) {
            offsetArray.push(data.offset);
          }
          if (data.offset && !offsetArray[offset + 1]) {
            offsetArray.push(data.offset);
          }

          if (offset === 0 && offsetArray.length > 1) {
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.add("show");
            increaseBtn2.classList.add("show");
          } else if (
            offsetArray[offset + 1] !== undefined &&
            offsetArray[offset - 1] !== undefined
          ) {
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            decreaseBtn.classList.add("show");
            decreaseBtn2.classList.add("show");
            increaseBtn.classList.add("show");
            increaseBtn2.classList.add("show");
          } else if (
            offsetArray[offset - 1] !== undefined &&
            offsetArray[offset + 1] === undefined
          ) {
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            decreaseBtn.classList.add("show");
            decreaseBtn2.classList.add("show");
          } else {
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
          }
          let htmlString = "";
          if (data.records.length > 0) {
            data.records.forEach((e) => {
              function formatNumberToK(number) {
                if (typeof number !== "number") {
                  return "Invalid input";
                }
                if (number >= 1000) {
                  const numInK = (number / 1000).toFixed(0);
                  return `$${numInK}k`;
                }
                return `$${number}`;
              }
              htmlString += `<div class='job-card loading-effect'>
              <div>
                <p class='job-title'>${e.fields["Job Title"]}</p>
                <hr/>
              
              </div>
              <div class='info-div'>
                  <div>
                      ${icons["company"]}
                      <div class="field-div" > <p>${
                        e.fields["Company/Org"]
                      }</p></div>
                  </div>
                  ${
                    e.fields["Location"]
                      ? `<div>
                      ${icons["location"]}
                      <div class="field-div" > <p>${e.fields["Location"]}</p></div>
                  </div>`
                      : ""
                  }
                  ${
                    e.fields["Experience Level"]
                      ? `<div>
                      ${icons["experience"]}
                            ${fields(e.fields["Experience Level"]) || ""}
                      </div>`
                      : ""
                  }
                  ${e.fields["Region"]? `<div>
                  ${
                    e.fields["Region"][0] !== "Remote" ||
                    e.fields["Region"].length > 1
                      ? icons["world"]
                      : icons["remote"]
                  }
                      ${fields(e.fields["Region"]) || ""}
                  </div>`: ''}
                  ${e.fields["Type"]? `<div>
                      ${
                        e.fields["Type"] === "Full-Time"
                          ? icons["fullTime"]
                          : e.fields["Type"] === "Part-Time"
                          ? icons["partTime"]
                          : icons["contract"]
                      }
                      ${fields(e.fields["Type"]) || ""}
                  </div>`: ''}
                  ${
                    e.fields["VISA sponsorship"]
                      ? `<div>
                      ${
                        e.fields["VISA sponsorship"][0] === "Yes"
                          ? icons["visaCheck"]
                          : e.fields["VISA sponsorship"][0] === "No"
                          ? icons["visaEx"]
                          : icons["visaQuestion"]
                      }
                      ${fields(e.fields["VISA sponsorship"]) || ""}
                  </div>`
                      : ``
                  }
              </div>
              <div>
                  ${
                    e.fields["Max Salary (USD)"] && e.fields["Min Salary (USD)"]
                      ? `<div class='salary-text'>
                      <div>
                        <p>${formatNumberToK(
                          e.fields["Min Salary (USD)"]
                        )} <span>Min</span></p>
                      </div>
                        <div>
                      <p>${formatNumberToK(
                        e.fields["Max Salary (USD)"]
                      )} <span>Max</span></p>
                      </div>
                  </div>`
                      : e.fields["Max Salary (USD)"]
                      ? `<div><h2 style="text-align: center; margin: 0 0 5px 0; color: rgb(101, 101, 101);">${formatNumberToK(
                          e.fields["Max Salary (USD)"]
                        )} <span>Max</span></h2></div>`
                      : e.fields["Min Salary (USD)"]
                      ? `<div><h2 style="text-align: center; margin: 0 0 5px 0; color: rgb(101, 101, 101);">${formatNumberToK(
                          e.fields["Min Salary (USD)"]
                        )} <span>Min</span></h2></div>`
                      : `<div><h2 style="text-align: center; margin: 0 0 5px 0; color: rgb(101, 101, 101);">No Salary Listed</h2></div>`
                  }
                  <div class='${
                    e.fields["Min Salary (USD)"] && e.fields["Max Salary (USD)"]
                      ? `salary-2-bar`
                      : e.fields["Max Salary (USD)"]
                      ? `salary-max-bar`
                      : e.fields["Min Salary (USD)"]
                      ? `salary-min-bar`
                      : "salary-0-bar"
                  }'></div>
              </div>
          </div>`;
            });
          } else {
            htmlString += `<h1 class="title">No Results Found</h1>`;
          }
          htmlString =
            '<div id="toDelete" class="card-holder">' + htmlString + "</div>";
          const parser = new DOMParser();
          const parsedHtml = parser.parseFromString(htmlString, "text/html");
          const parsedElement = parsedHtml.querySelector("div");
          const targetElement = document.getElementById("targetElement");
          targetElement.appendChild(parsedElement);
          const readMoreButtons = document.querySelectorAll(".job-card");
          readMoreButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
              openModal(data.records[index].fields);
              document.getElementById("targetElement").style.position = "fixed";
              console.log(data.records[index]);
            });
          });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }

  function openModal(e) {
    const modal = document.getElementById("myModal");
    document.body.classList.add("modal-open");
    const modalHeader = modal.querySelector(".modal-header");
    const modalFooter = modal.querySelector(".modal-footer");
    const modalContent = modal.querySelector(".modal-content");
    modalHeader.innerHTML = `<span style='font-size: 50px; margin: 0 0 0 auto;' class="close">&times;</span>
    <div class='card-header'>
        <p style="font-family: 'Caprasimo', cursive; font-size:35px;">${e["Job Title"]}</p>
        <p style="font-size: 20px;">Date Posted: ${e["Created"]}</p>
    </div>`;
    modalContent.innerHTML = "";
    modalContent.innerHTML = `
    <div class="job-field-div" style="padding-bottom: 10px;">
        <div class="tag-field">
            ${fields(e["Field"]) || ""}
        </div>
    </div>
      <div class="job-spec-div">
          <div class="job-spec">
              <p class="job-spec-title">Company/Org:</p>
              <p class='job-type'>${e["Company/Org"]}</p>
          </div>
          <div class='vertical-hr'></div>
          <div class="job-spec">
              <p class="job-spec-title">Location:</p>
              <p class='job-type'>${e["Location"]}</p>
          </div>
          <div class='vertical-hr'></div>
          <div class="job-spec">
              <p class="job-spec-title">Type:</p>
              <p class='job-type'>${
                e["Type"] ? e["Type"].join(", ") : "N/A"
              }</p>
          </div>
      </div>
      <div class="job-desc-div" style="width: 100%">
          <div class="job-req-holder" style="padding-bottom: 10px;">
              <div class="exp-sal-div"
                  style="display:flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 5px;">
                  <p style='font-size: 25px; font-weight: bold'>Department/Team:
                      <span style='font-size: 25px; font-weight: normal'>${
                        e["Department/Team"] || "No Team Listed"
                      }</span>
                  </p>
                  <p style='font-size: 25px; font-weight: bold'>Salary: <span style='font-size: 25px; font-weight: normal'>${
                    e["Salary"] || "No Salary Listed"
                  }</span></p>
                        
              </div>
              <div class="min-max-div" style="display: flex; justify-content:space-between; flex-wrap: wrap;">
                  <p style='font-size: 25px; font-weight: bold' class="visa-label">Visa Sponsorship:
                      <span style='font-size: 25px; font-weight: normal'>${
                        e["VISA sponsorship"]
                          ? e["VISA sponsorship"].join(", ")
                          : "N/A"
                      }</span>
                  </p>
                  <p style='font-size: 25px; font-weight: bold' class="min-sal-label">Minimum Salary:
                      <span style='font-size: 25px; font-weight: normal'>
                          ${"ds" || minSalaryFormatted}
                      </span>
                  </p>
              </div>
              <div class="exp-sal-div"
                  style="display:flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 5px;">
                  <p style='font-size: 25px; font-weight: bold'>Experience Level:
                      <span style='font-size: 25px; font-weight: normal'>${
                        e["Experience Level"] && e["Experience Level"].length
                          ? e["Experience Level"].join(", ")
                          : e["Experience Level"]
                          ? e["Experience Level"]
                          : "No Experience Listed"
                      }</span>
                  </p>
                  <p style='font-size: 25px; font-weight: bold' class="max-sal-label">Maximum Salary:
                      <span style='font-size: 25px; font-weight: normal'>
                          ${"ds" || maxSalaryFormatted}
                      </span>
                  </p>
              </div>
              <div class="reg-visa-div" style="display: flex; justify-content:space-between; flex-wrap: wrap;">
                  <p style='font-size: 25px; font-weight: bold' class="region-label">Region:
                      <span style='font-size: 25px; font-weight: normal'>${
                        e["Region"] ? e["Region"].join(", ") : "N/A"
                      }</span>
                  </p>
                  <p style='font-size: 25px; font-weight: bold'>Closing Date: <span
                          style='font-size: 25px; font-weight: normal'>${
                            e["Closing Date"]
                          }</span></p>
              </div>
          </div>
      </div>`;
    modalFooter.innerHTML = `
      <div class='apply-div'>
          ${buttons(e["Link to Apply"]) || ""}
      </div>`;
    modal.style.display = "flex";
    document.querySelectorAll(".pagin").style.display = "none";
  }
  const modalView = document.querySelector(".modal-div");

  document.addEventListener("click", function (event) {
    if (
      (!modalView.contains(event.target) &&
        event.target.classList.contains("modal")) ||
      event.target.classList.contains("close")
    ) {
      document.getElementById("myModal").style.display = "none";
      document.getElementById("targetElement").style.position = "";
      document.body.classList.remove("modal-open");
    }
  });

  function increase() {
    offset++;
    document.getElementById("toDelete").remove();
    decreaseBtn.classList.remove("show");
    decreaseBtn2.classList.remove("show");
    increaseBtn.classList.remove("show");
    increaseBtn2.classList.remove("show");
    clearTimeout(timeoutId);
    dotSpinner.classList.remove("hidden");
    timeoutId = setTimeout(() => {
      fetchAllData();
      dotSpinner.classList.add("hidden");
    }, 1000);
  }

  function decrease() {
    if (offset > 0) offset--;
    document.getElementById("toDelete").remove();
    decreaseBtn.classList.remove("show");
    decreaseBtn2.classList.remove("show");
    increaseBtn.classList.remove("show");
    increaseBtn2.classList.remove("show");
    clearTimeout(timeoutId);
    dotSpinner.classList.remove("hidden");
    timeoutId = setTimeout(() => {
      fetchAllData();
      dotSpinner.classList.add("hidden");
    }, 1000);
  }

  increaseBtn.addEventListener("click", increase);
  increaseBtn2.addEventListener("click", increase);
  decreaseBtn.addEventListener("click", decrease);
  decreaseBtn2.addEventListener("click", decrease);
});
