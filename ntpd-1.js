var page = $("#workarea");
console.log(page);
var fsize = 1;


//designing font radio
for (i = 1; i <= 100; i++) {
    if (i == 12) {
        document.getElementById('fontradio').innerHTML += `<input type="radio"checked name="radiobaba" value=${i} >${i}&nbsp `;
    } else {
        document.getElementById('fontradio').innerHTML += `<input type="radio" name="radiobaba" value=${i}>${i}&nbsp `;
        if (i % 5 == 0) {
            document.getElementById('fontradio').innerHTML += "<br>"
        }
    }
}

//textincresae
$('#textinc').click(function() {
    if (fsize == 8) {
        fsize = 7;
    }
    document.execCommand('fontSize', false, `${fsize}`);
    fsize = fsize + 1;
});

//textdecrease
$('#textdec').click(function() {
    if (fsize == 0) {
        fsize = 1;
    }
    document.execCommand('fontSize', false, `${fsize}`);
    fsize = fsize - 1;
});


//rdbtn
$('input[name="radiobaba"]').change(function() {
    var a = $('input[name="radiobaba"]:checked').val();
    //document.execCommand("fontSize",false,a);
    var highlight = document.getSelection();
    var span = `<span style="font-size:${a};">` + highlight + '</span>';
    var text = page.html();
    page.html(text.replace(highlight, span));


});


// BOLD ITALIC UNDERLINE
//bold
$('#bold').click(function() {
    document.execCommand('bold');
});

//ITALIC
$('#italic').click(function() {
    document.execCommand("italic");
});

//underline
$('#underline').click(function() {
    document.execCommand('underline');
});

//undo
$('#undo').click(function() {
    document.execCommand('undo');
});

//redo
$('#redo').click(function() {
    document.execCommand('redo');
});

//delete
$('#remove').click(function() {
    document.execCommand('delete');
});

//subscript
$('#sub').click(function() {
    document.execCommand('subscript');
});


//superscript
$('#sup').click(function() {
    document.execCommand('superscript');
});


//Link
$('#link').click(function() {
    var highlight = window.getSelection();
    var link_page = prompt("Enter URL Or Path");
    var span = `<span><a href='${link_page}' contentEditable='false'>` + highlight + '</a></span>';
    var text = page.html();
    if (link_page == 1000 * "") {
        alert("Please give valid Url");
    } else { page.html(text.replace(highlight, span)); }
});

//flag
$('#flag').click(function() {
    page.append("🇮🇳");
});

//font-size
$('#textsize').change(function() {
    /*var highlight = window.getSelection();
    var a=highlight;
    var span = `<span <del>`+ highlight + '</del></span>';
    var text = page.html();
    page.html(text.replace(highlight, span));*/
    document.execCommand("bold");
});

//font-color
$('#textColor').change(function() {
    var a = $("#textColor").val();
    document.getElementById("colorTextdisp").value = a;
    document.execCommand("foreColor", false, a);
    /*var highlight = window.getSelection();
    var span = `<span><u>`+ highlight + '</u></span>';
    var text = page.html();
    page.html(text.replace(highlight, span));*/
});

//text-bg-color
$('#bgcolorOfText').change(function() {
    var a = document.getElementById("bgcolorOfText").value;
    document.getElementById("bgcolorOfTextDisp").value = a;
    document.execCommand("backColor", false, a);
    /*var highlight = window.getSelection();
    var span = `<span><u>`+ highlight + '</u></span>';
    var text = page.html();
    page.html(text.replace(highlight, span));*/
});


//del
$('#del').click(function() {
    /*var highlight = window.getSelection();  
    var span = '<span style="text-decoration: line-through"><u>'+highlight+'</u></span>';
    var text = page.html();
    page.html(text.replace(highlight, span));*/
    document.execCommand("strikeThrough");

});

// this is funcion of page background
// PAGE BACkGROUND SETUP

//SOLID COLOR FUNCTION
$("#page_bg_color").on("change", function(event) {
    var um = this.value;
    var b = document.getElementById("page_bg_color_value");
    b.value = um;
    page.css({ "background-image": "none", "background-color": `${um}` });

});



//URL FUNCTION
$("#urlClass").on("change", function(event) {
    var um = this.value;
    alert("If your link is not found web page background remains white".toUpperCase());
    page.css({ "background-image": `url(${um})`, "background-size": "100% 100%" });
});

//IMAGES CLICK FUNCTION
$("#img1").on("click", function(event) {
    page.css({ "background-image": "url('Image/35.jpeg')", "background-size": "100% 100%" });
});

$("#img2").on("click", function(event) {
    page.css({ "background-image": "url('Image/36.jpg')", "background-size": "100% 100%" });
});

$("#img3").on("click", function(event) {
    page.css({ "background-image": "url('Image/37.jpg')", "background-size": "100% 100%", });

});

$("#img4").on("click", function(event) {
    page.css("background-image", "url('Image/38.jpg')");

});

$("#img5").on("click", function(event) {
    page.css("background-image", "url('Image/39.jpg')");

});

$("#img6").on("click", function(event) {
    page.css("background-image", "url('Image/40.jpg')");
});

$("#img7").on("click", function(event) {
    page.css("background-image", "url('Image/41.jpg')");
});

$("#img8").on("click", function(event) {
    page.css("background-image", "url('Image/42.jpg')");
});

$("#img9").on("click", function(event) {
    page.css("background-image", "url('Image/43.jpg')");
});

$("#img10").on("click", function(event) {
    page.css("background-image", "url('Image/44.jpg')");
});

$("#img11").on("click", function(event) {
    page.css("background-image", "url('Image/45.jpg')");
});

$("#img12").on("click", function(event) {
    page.css("background-image", "url('Image/46.jpg')");
});

$("#img13").on("click", function(event) {
    page.css("background-image", "url('Image/47.jpg')");
});

$("#img14").on("click", function(event) {
    page.css("background-image", "url('Image/48.jpg')");
});

$("#img15").on("click", function(event) {
    page.css("background-image", "url('Image/49.jpg')");

});

$("#img16").on("click", function(event) {
    page.css("background-image", "url('Image/50.jpg')");
});

$("#img17").on("click", function(event) {
    page.css("background-image", "url('Image/51.jpg')");
});

$("#img18").on("click", function(event) {
    page.css("background-image", "url('Image/52.png')");
});

$("#img19").on("click", function(event) {
    page.css("background-image", "url('Image/53.jpg')");
});

$("#img20").on("click", function(event) {
    page.css("background-image", "url('Image/54.jpg')");
});

$("#img21").on("click", function(event) {
    page.css("background-image", "url('Image/55.jpg')");
});

$("#img22").on("click", function(event) {
    page.css("background-image", "url('Image/56.jpg')");
});

$("#img23").on("click", function(event) {
    page.css("background-image", "url('Image/57.jpg')");
});

$("#img24").on("click", function(event) {
    page.css("background-image", "url('Image/58.jpg')");
});

$("#img25").on("click", function(event) {
    page.css("background-image", "url('Image/59.jpg')");
});

$("#img26").on("click", function(event) {
    page.css({ "background-image": "url('Image/60.jpg')", "background-size": "100% 100%" });
});

$("#img27").on("click", function(event) {
    page.css({ "background-image": "url('Image/61.jpg')", "background-size": "100% 100%", });

});

$("#img28").on("click", function(event) {
    page.css("background-image", "url('Image/62.jpg')");

});

$("#img29").on("click", function(event) {
    page.css("background-image", "url('Image/63.jpg')");

});

$("#img30").on("click", function(event) {
    page.css("background-image", "url('Image/64.jpg')");
});

$("#img31").on("click", function(event) {
    page.css("background-image", "url('Image/65.jpg')");
});

$("#img32").on("click", function(event) {
    page.css("background-image", "url('Image/66.jpg')");
});

$("#img33").on("click", function(event) {
    page.css("background-image", "url('Image/67.jpg')");
});

$("#img34").on("click", function(event) {
    page.css("background-image", "url('Image/68.jpg')");
});

$("#img35").on("click", function(event) {
    page.css("background-image", "url('Image/69.jpg')");
});

$("#img36").on("click", function(event) {
    page.css("background-image", "url('Image/70.jpg')");
});

$("#img37").on("click", function(event) {
    page.css("background-image", "url('Image/71.jpg')");
});

$("#img38").on("click", function(event) {
    page.css("background-image", "url('Image/72.jpg')");
});

$("#img39").on("click", function(event) {
    page.css("background-image", "url('Image/73.jpg')");

});

$("#img40").on("click", function(event) {
    page.css("background-image", "url('Image/74.jpg')");
});

$("#img41").on("click", function(event) {
    page.css("background-image", "url('Image/75.jpg')");
});

$("#img42").on("click", function(event) {
    page.css("background-image", "url('Image/76.jpg')");
});

$("#img43").on("click", function(event) {
    page.css("background-image", "url('Image/77.jpg')");
});

$("#img44").on("click", function(event) {
    page.css("background-image", "url('Image/78.jpg')");
});

$("#img45").on("click", function(event) {
    page.css("background-image", "url('Image/79.jpg')");
});

$("#img46").on("click", function(event) {
    page.css("background-image", "url('Image/80.jpg')");
});

$("#img47").on("click", function(event) {
    page.css("background-image", "url('Image/81.jpg')");
});

$("#img48").on("click", function(event) {
    page.css("background-image", "url('Image/82.jpg')");
});


//paragraphs
$('#upcase').click(function() {
    var highlight = window.getSelection();
    var a = highlight.toString().toLowerCase();
    var span = '<span>' + a.toUpperCase(); + '</span>';
    var text = page.html();
    page.html(text.replace(highlight, span));
});

$('#lower').click(function() {
    var highlight = window.getSelection()
    var a = highlight.toString().toLowerCase();
    var span = '<span>' + a + '</span>';
    var text = page.html();
    page.html(text.replace(highlight, span));
});

$('#centera').click(function() {
    document.execCommand('justifyCenter');

});
$('#lefta').click(function() {
    document.execCommand('justifyLeft');

});
$('#righta').click(function() {
    document.execCommand('justifyRight');

});
$('#para').click(function() {
    document.execCommand('justifyFull');

});

$('#rmvfrmt').click(function() {
    document.execCommand('removeFormat');

});

$('#SelectedAll').click(function() {
    document.execCommand('selectAll');

});

$('#Cut').click(function() {
    document.execCommand('cut');

});
$('#Copy').click(function() {
    document.execCommand('copy');

});
$('#Paste').click(function() {
    document.execCommand('paste');

});
