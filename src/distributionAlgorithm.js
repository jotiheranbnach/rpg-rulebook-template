function distributeContent() {
    var pages = document.getElementsByClassName('page');
    var i;
    for (i = 0; i < pages.length; i++) {
        var j;
        var widowElements = [];
        for (j = 0; j < pages[i].children.length; j++) {
            var pageRect = pages[i].getBoundingClientRect();
            var childRect = pages[i].children[j].getBoundingClientRect();
            if (pageRect.right < childRect.right) {
                console.log(pages[i].children[j]);
                widowElements.push(pages[i].children[j]);
            }
        }
        for (var _i = 0, widowElements_1 = widowElements; _i < widowElements_1.length; _i++) {
            var widow = widowElements_1[_i];
            pages[i].removeChild(widow);
            pages[i + 1].appendChild(widow);
        }
    }
}
