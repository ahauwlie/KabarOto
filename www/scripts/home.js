const request = new XMLHttpRequest();

request.open('GET', 'https://adm982.kabaroto.com/api/post/?page=1&rpp=20');
request.send(); 

request.onload = () => {
if (request.status === 200) {
console.log("Success");

//deklarasi data
var _this = this;
this.test = [];
var grid = [];
var data = [];
var res = JSON.parse(request.response);

for(var i=0;i<res.data.length;i++){

	var my = res.data[i].cover, replacement = '_160x160.';
	var str = my.replace(/.([^.]*)$/,replacement+'$1');
	res.data[i].coverlite =  str;
	var my1 = res.data[i].cover, replacement = '_318x150.';
	var str1 = my1.replace(/.([^.]*)$/,replacement+'$1');
	res.data[i].coverlite1 =  str1;
	var my2 = res.data[i].cover, replacement = '_360x685.';
	var str2 = my2.replace(/.([^.]*)$/,replacement+'$1');
	res.data[i].coverlite2 =  str2;

	var category =res.data[i].category[0].name;
	var cover = res.data[i].coverlite;
	var covercard = res.data[i].coverlite1;
	var coverc = res.data[i].coverlite2;
	var date = res.data[i].published;
	var id = res.data[i].id;
	var title = res.data[i].title;
	var user = res.data[i].user.fullname;
	var minides = res.data[i].seo_description;

// buat UI yang di tampilin ke html
var table="<div class='news-list-item no-border bottom-0'>";
	table+="<a href='#'>"; 
		table+="<img src='"+cover+"'>";
		table+="<strong>"+title+"</strong>";
	table+="</a>";
	table+="<span><i class='fas fa-clock'></i>" + date + "<a href='#' class='color-highlight'>"+category+"</a></span>";
table+="</div>";

//panggil ke <div id="mydiv">
	$("#mydiv").append(table); 

// // ui column kiri
// if(i%2==0 || i==0){
// 	// buat UI yang di tampilin ke html
// 	var table="<div class='news-col-item'>";
// 		table+="<a href='#'>"; 
// 		table+="<img src='"+cover+"' class='responsive-image'>";
// 		table+="<em class='bg-highlight'>"+id+"</em>";
// 		table+="<strong>"+title+"</strong>";
// 		table+="</a>";
// 		table+="<span><i class='fas fa-clock'></i>" + date + "</span>";
// 		table+="</div>";

// 	//panggil ke <div id="mydiv">
// 		$("#mydivcolL").append(table); 
// }else{
// 	// buat UI yang di tampilin ke html
// 	var table="<div class='news-col-item'>";
// 		table+="<a href='#'>"; 
// 		table+="<img src='"+cover+"' class='responsive-image'>";
// 		table+="<em class='bg-highlight'>"+id+"</em>";
// 		table+="<strong>"+title+"</strong>";
// 		table+="</a>";
// 		table+="<span><i class='fas fa-clock'></i>" + date + "</span>";
// 		table+="</div>";

// 	//panggil ke <div id="mydiv">
// 		$("#mydivcolR").append(table);
// }



var table="<div class='article-card  box-shadow bg-white bottom-30'>"
	table+="<a href='#' class='article-header'>";
	table+="<span class='article-overlay'></span>"; 
	table+="<img class='article-image preload-image' src='"+covercard+"'>";
	table+="<span class='article-category bg-highlight color-white uppercase'>"+category+"</span>";
	table+="<span class='article-author color-gray-light'><i class='fa fa-user opacity-50'></i>"+id+"</span>";
	table+="<span class='article-time color-gray-light'>"+date+"<i class='fas fa-clock opacity-50'></i></span>";
	table+="</a>";
	table+="<div class='article-content'>";
	table+="<h1 class='article-title top-15 bottom-15'>"+title+".</h1>";
	table+="<p class='bottom-15'>"+minides+"</p>";
	table+="</div>";
	table+="</div>";

//panggil ke <div id="mydiv">
	$("#mydivcard").append(table); 



// buat UI yang di tampilin ke html
var table="<div class='cover-slider owl-carousel owl-no-dots'>";
table+="<div class='cover-item' style='background-image:url("+coverc+");'>";
table+="<div class='cover-content cover-content-bottom'>";
table+="<span class='cover-tag bg-highlight'>"+category+"</span>";
table+="<span class='cover-small-text opacity-40'>"+category+"</span>";
table+="<h1 class='color-white left-text uppercase bold top-30 bottom-0'>"+title+"</h1>";
table+="<p class='color-white font-11 bottom-30'><a class='color-highlight'>"+id+"</a></p>";
table+="<p class='color-white left-text opacity-40 bottom-0'>"+minides+"</p>";
table+="<a href='#' class='top-15 bottom-15 font-12 color-gray-light float-left opacity-30'>by "+user+"</a>";
table+="<a href='#' class='top-15 bottom-15 font-12 color-highlight float-right'>Read More<i class='fa fa-angle-right icon-clear-left'></i></a>";
table+="</div>";
table+="<div class='cover-overlay overlay overlay-gradient'></div>";
table+="</div>";
table+="</div>";

//panggil ke <div id="mydiv">
$("#mydivcover").append(table); 
}


}
};

request.onerror = () => {
console.log("error")
};