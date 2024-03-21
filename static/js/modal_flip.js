$(document).ready(function() {
    $("#flipbook_modal").flipBook({
        pages:[
            {src:"/static/images/artimages/image (1).jpg", thumb:"/static/images/artimages/image (1).jpg", title:"Cover"},
            {src:"/static/images/artimages/image (2).jpg", thumb:"/static/images/artimages/image (2).jpg", title:"1"},
            {src:"/static/images/note.jpg", thumb:"/static/images/artimages/image (3).jpg", title:"2"},
            {src:"/static/images/artimages/image (4).jpg", thumb:"/static/images/artimages/image (4).jpg", title:"3"},
            {src:"/static/images/note.jpg", thumb:"/static/images/artimages/image (5).jpg", title:"4",
                htmlContent:""
            },
            {src:"/static/images/artimages/image (6).jpg", thumb:"/static/images/artimages/image (6).jpg", title:"5",
                htmlContent:""
            }
        ],
        viewMode: 'webgl',
        shadows:true,
        shadowOpacity:0.2,
        pageHardness:1.2,
        coverHardness:1.2,
        pageRoughness:1,
        pageMetalness:0,
        pageSegmentsW:6,
        thumbnailsOnStart:false,
        sideNavigationButtons:true,
        responsiveView:true,
    //	pageMiddleShadowSize:20000,
    //	pageMiddleShadowColor:"#999999",
    //	pageMiddleShadowColorR:"#777777",
        antialias:false,
        pan:0,
        tilt:-0,
        panMax:20,
        panMin:-20,
        tiltMax:0,
        tiltMin:-60,
        rotateCameraOnMouseDrag:true,
        aspectRatio:2,
        autoplayOnStart:false,
        autoplayInterval:2000,
        currentPage:{"enabled":true,"title":"Current page","vAlign":"top","hAlign":"left","order":""},
        btnFirst:{"enabled":false,"title":"First Page","vAlign":"","hAlign":"","order":"","icon":"fa-angle-double-left","icon2":"first_page"},
        btnPrev:{"enabled":false,"title":"Previous Page","vAlign":"","hAlign":"","order":"","icon":"fa-chevron-left","icon2":"chevron_left"},
        btnNext:{"enabled":false,"title":"Next Page","vAlign":"","hAlign":"","order":"","icon":"fa-chevron-right","icon2":"chevron_right"},
        btnLast:{"enabled":false,"title":"Last Page","vAlign":"","hAlign":"","order":"","icon":"fa-angle-double-right","icon2":"last_page"},
        btnAutoplay:{"enabled":false,"title":"Autoplay","vAlign":"","hAlign":"","order":"","icon":"fa-play","iconAlt":"fa-pause","icon2":"play_arrow","iconAlt2":"pause"},
        btnZoomIn:{"enabled":false,"title":"Zoom in","vAlign":"","hAlign":"","order":"","icon":"fa-plus","icon2":"zoom_in"},
        btnZoomOut:{"enabled":false,"title":"Zoom out","vAlign":"","hAlign":"","order":"","icon":"fa-minus","icon2":"zoom_out"},
        btnToc:{"enabled":false,"title":"Table of Contents","vAlign":"","hAlign":"","order":"","icon":"fa-list-ol","icon2":"toc"},
        btnThumbs:{"enabled":false,"title":"Pages","vAlign":"","hAlign":"","order":"","icon":"fa-th-large","icon2":"view_module"},
        btnShare:{"enabled":false,"title":"Share","vAlign":"","hAlign":"","order":"","icon":"fa-share-alt","icon2":"share"},
        btnPrint:{"enabled":false,"title":"Print","vAlign":"","hAlign":"","order":"","icon":"fa-print","icon2":"print"},
        btnDownloadPages:{"enabled":false,"title":"Download pages","vAlign":"","hAlign":"","order":"","icon":"fa-download","icon2":"file_download"},
        btnDownloadPdf:{"enabled":false, "url":"https:\/\/www.gallery360.co.kr\/test\/deploy\/download1.pdf"},
        btnSound:{"enabled":false,"title":"Sound","vAlign":"","hAlign":"","order":"","icon":"fa-volume-up","iconAlt":"fa-volume-off","icon2":"volume_up","iconAlt2":"volume_mute"},
        btnExpand:{"enabled":false,"title":"Toggle fullscreen","vAlign":"","hAlign":"","order":"","icon":"fa-expand","iconAlt":"fa-compress","icon2":"fullscreen","iconAlt2":"fullscreen_exit"},
        btnSelect:{"enabled":false,"title":"Select tool","vAlign":"","hAlign":"","order":"","icon":"fas fa-i-cursor","icon2":"text_format"},
        btnSearch:{"enabled":false},
        btnBookmark:{"enabled":false,"title":"Bookmark","vAlign":"","hAlign":"","order":"","icon":"fas fa-bookmark","icon2":"bookmark"},
        google_plus:{"enabled":false,"url":""},
        twitter:{"enabled":false,"url":"","description":""},
        facebook:{"enabled":false,"url":"","description":"","title":"","image":"","caption":""},
        pinterest:{"enabled":false,"url":"","image":"","description":""},
        email:{"enabled":false,"url":"","description":""},
        layout:1,
        skin:"dark",
        icons:"font awesome",
        useFontAwesome5:true,
        skinColor:"",
        skinBackground:"",
        backgroundColor: 'rgb(026, 026, 026)',
    //	backgroundColor: 'rgb(81, 85, 88)',
    //	backgroundPattern:"http:\/\/creativeinteractivemedia.com\/real3d\/wp-content\/uploads\/2016\/03\/low_contrast_linen.jpg",
        backgroundTransparent:false,
        onbookcreated:function(){
            $(".flipbook-currentPageHolder").css("display","none");
            $(".flipbook-currentPageNumber").css("display","none");
            $("#kkk").on("click", function(){
                //alert("1111");
            });

        },
    });
});