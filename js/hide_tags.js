function show_by_tag(tag){
    var tiles = document.getElementsByClassName('is-parent');
    Array.prototype.slice.call(tiles, 0).forEach(function (el) {
        if (el.id == tag || tag == null) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

window.addEventListener("hashchange", function(){
    if (window.location.hash) {
        var tag = window.location.hash.split('#')[1];
        show_by_tag(tag);
    } else {
        show_by_tag(null);
    }
});
