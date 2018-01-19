var myNumber;
			var arr = [];
			var code = $.ajax({
				url: "data/code.txt",
				async: false
			});
			code = code.responseText;
			code=eval(code);
			var awards = 2;
			var run = true;

			function lottery() {
				if(awards <= 0) return;
				var randomIndex = Math.ceil(Math.random() * code.length - 1);
				var randomCode = code[randomIndex];
				$("#show").html('<div>' + randomCode + '</div>');
				if(run) {
					setTimeout(lottery, 1);
				} else {
					code.splice(randomIndex, 1);
					$("#lucknum").append('<div>' + randomCode + '<div>');
					awards--;
				}
			}
			//抽奖按钮
			$(function() {
				$("#start").click(function() {
					if($("#prize_btn").val() == 0) {
						$("#prize_btn").val(1);
						$("#start").text("结束抽奖");
						$("#start").css("background-color", "#e14b48");
						run = true;
						lottery();
					} else if($("#prize_btn").val() == 1) {
						$("#prize_btn").val(0);
						$("#start").text("开始抽奖");
						$("#start").css("background-color", "#8763C6");
						run = false;
						var lucklength = $('#lucknum').children('div').length;
						if(lucklength > 0) {
							$("#prize_btn").val(3);
							$("#start").text("抽奖结束");
							$("#start").css("background-color", "gray");
							finish = true;
						}
					}
				});

				$("#rest").click(function() {
					$("#start").text("开始抽奖");
					$("#start").css("background-color", "#8763C6");
					$("#prize_btn").val(0);
					$("#lucknum").html("");
					$("#show").html('');
					awards = 2;
				})

			});