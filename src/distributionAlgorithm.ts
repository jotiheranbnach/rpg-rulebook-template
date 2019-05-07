function distributeContent() {
    let pages = document.getElementsByClassName('page')
    var i;
    for (i = 0; i < pages.length; i++) {
        var j;
        let widowElements: any[] = [];
        for (j = 0; j < pages[i].children.length; j++) {
            var pageRect  = pages[i].getBoundingClientRect();
            var childRect = pages[i].children[j].getBoundingClientRect();
            if (pageRect.right < childRect.right) {
                console.log(pages[i].children[j]);
                widowElements.push(pages[i].children[j]);
            }
        }

        for (let widow of widowElements) {
            pages[i].removeChild(widow);
            pages[i + 1].appendChild(widow);
        }
    }
}
