if (process.env.NODE_ENV === 'development') {
    require('../../app/index.html')
}

require('../styles/main.scss');
require('jquery');
require('material-design-lite');

//http://codepen.io/yvesvanbroekhoven/pen/Efkar
document.write('<h1>Hello World</h1>');
