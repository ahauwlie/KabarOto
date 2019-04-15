var page = 1;
console.log(page);
const request = new XMLHttpRequest();

request.open('GET', 'https://adm982.kabaroto.com/api/post/?rpp=20&page=' + page);
request.send();

request.onload = () => {
	if (request.status === 200) {
		console.log("Success");

		//deklarasi data
		var data = [];
		var res = JSON.parse(request.response);

		for (var i = 0; i < res.data.length; i++) {

			var my = res.data[i].cover,
			replacement = '_160x160.';
			var str = my.replace(/.([^.]*)$/, replacement + '$1');
			res.data[i].coverlite = str;
			var my1 = res.data[i].cover,
			replacement = '_318x150.';
			var str1 = my1.replace(/.([^.]*)$/, replacement + '$1');
			res.data[i].coverlite1 = str1;

			var category = res.data[i].id;
			var cover = res.data[i].coverlite;
			var covercard = res.data[i].coverlite1;
			var date = res.data[i].published;
			var title = res.data[i].title;
			var user = res.data[i].user.name;
			var minides = res.data[i].seo_description;

			// buat UI yang di tampilin ke html
			var table1 = `
				<div class="news-list-item no-border bottom-0">
					<a href="#">
						<img src="` + cover + `">
						<strong>` + title + `</strong>
					</a>
					<span><i class="fas fa-clock"></i>` + date + `<a href="#" class="color-highlight">` + user + `</a></span>
				</div>
			`;

			//panggil ke <div id="mydiv">
			$("#mydiv").append(table1);

			var table2 = `
				<div class="article-card  box-shadow bg-white bottom-30">
					<a href="#" class="article-header">
						<span class="article-overlay"></span>
						<img class="article-image preload-image" src="` + covercard + `">
						<span class="article-category bg-highlight color-white uppercase">` + category + `</span>
						<span class="article-author color-gray-light"><i class="fa fa-user opacity-50"></i>`+user+`</span>
						<span class="article-time color-gray-light">` + date + `<i class="fas fa-clock opacity-50"></i></span>
					</a>
					<div class="article-content">
						<h1 class="article-title top-15 bottom-15">` + title + `</h1>
						<p class="bottom-15">` + minides + `</p>
					</div>
				</div>
			`;

			//panggil ke <div id="mydiv">
			$("#mydivcard").append(table2);
		}


		$(window).scroll(function () {
		    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
		        appendData();
		    }
		});
		function appendData() {
            page++;
            console.log(page);
            $.getJSON('https://adm982.kabaroto.com/api/post/?rpp=20&page=' + page, function(data) {
	            for(var i=0;i<data.data.length;i++){
	            	var my = data.data[i].cover,
					replacement = '_160x160.';
					var str = my.replace(/.([^.]*)$/, replacement + '$1');
					data.data[i].coverlite = str;
					var my1 = data.data[i].cover,
					replacement = '_318x150.';
					var str1 = my1.replace(/.([^.]*)$/, replacement + '$1');
					data.data[i].coverlite1 = str1;

					var category = data.data[i].id;
					var cover = data.data[i].coverlite;
					var covercard = data.data[i].coverlite1;
					var date = data.data[i].published;
					var title = data.data[i].title;
					var user = data.data[i].user.name;
					var minides = data.data[i].seo_description;

					// buat UI yang di tampilin ke html
					var table1 = `
						<div class="news-list-item no-border bottom-0">
							<a href="#">
								<img src="` + cover + `">
								<strong>` + title + `</strong>
							</a>
							<span><i class="fas fa-clock"></i>` + date + `<a href="#" class="color-highlight">` + user + `</a></span>
						</div>
					`;

					//panggil ke <div id="mydiv">
					$("#mydiv").append(table1);

					var table2 = `
						<div class="article-card  box-shadow bg-white bottom-30">
							<a href="#" class="article-header">
								<span class="article-overlay"></span>
								<img class="article-image preload-image" src="` + covercard + `">
								<span class="article-category bg-highlight color-white uppercase">` + category + `</span>
								<span class="article-author color-gray-light"><i class="fa fa-user opacity-50"></i>`+user+`</span>
								<span class="article-time color-gray-light">` + date + `<i class="fas fa-clock opacity-50"></i></span>
							</a>
							<div class="article-content">
								<h1 class="article-title top-15 bottom-15">` + title + `</h1>
								<p class="bottom-15">` + minides + `</p>
							</div>
						</div>
					`;

					//panggil ke <div id="mydiv">
					$("#mydivcard").append(table2);
	            };
		    });
        }
	}
};

request.onerror = () => {
	console.log("error")
};

