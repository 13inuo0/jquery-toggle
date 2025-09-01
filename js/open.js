$(function () {
  // console.log("확인")
  // $("#openBtn").click(function () {
  //   $("#popup").show();
  // });
  // $("#closeBtn").click(function () {
  //   $("#popup").hide();
  // });
  // 페이트인아웃 애니메이션
  // $("#openBtn").click(function () {
  //   $("#popup").fadeIn(1000);
  // });
  // $("#closeBtn").click(function () {
  //   $("#popup").fadeOut(1000);
  // });
  // 열려있으면 닫고 닫혀있으면 열기
  $("#openBtn").click(function () {
    $("#popup").toggle(1000);
  });
});
