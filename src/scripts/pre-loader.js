/*if (process.env.NODE_ENV === 'development') {
    require('../../app/index.html')
}

var jQuery = require("bundle!jquery");
require('../styles/preloader.scss');
console.log(jQuery);
jQuery("#progress").txt("Hello World!");*/

/*
var queue        = new preloadjs.LoadQueue(),
    $state       = $('#state'),
    $progress    = $('#progress'),
    $progressbar = $('#progressbar .bar');


queue.on('complete',     onComplete);
queue.on('error',        onError);
queue.on('fileload',     onFileLoad);
queue.on('fileprogress', onFileProgress);
queue.on('progress',     onProgress);


queue.loadManifest([
    {
        id:   '1',
        src:  'http://upload.wikimedia.org/wikipedia/commons/a/a2/Polycyclic_Aromatic_Hydrocarbons_In_Space.jpg'
    },
    {
        id: '2',
        src: 'http://static3.businessinsider.com/image/522746c56bb3f72e2a316155/photo-airbus-proves-its-huge-new-warplane-doesnt-need-a-paved-runway.jpg'
    },
    {
        id:   '3',
        src:  'http://www.chem.gla.ac.uk/staff/wynne/i/2005/TRVS/TRVS-group-photo-huge.jpg'
    },
    {
        id:   '4',
        src:  'http://upload.wikimedia.org/wikipedia/commons/c/cb/WA_-_Dry_Falls_-_Huge_Channel_v1.png'
    }
]);



function onComplete(event) {
    console.log('Complete', event);
    $state.text( $state.text() + '[All loaded]' );
    $progressbar.addClass('complete');
}

function onError(event) {
    console.log('Error', event);
    $state.text( $state.text() + '[' + event.item.id + ' errored] ');
}

function onFileLoad(event) {
    console.log('File loaded', event);
    $state.text( $state.text() + '[' + event.item.id + ' loaded] ');
}

function onFileProgress(event) {
    console.log('File progress', event);
}

function onProgress(event) {
    var progress = Math.round(event.loaded * 100);

    console.log('General progress', Math.round(event.loaded) * 100, event);
    $progress.text(progress + '%');
    $progressbar.css({
        'width': progress + '%'
    });
}*/
