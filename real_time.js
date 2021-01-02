 let search_word = '';
 let num = 1;
 let keyword = '';


 $(document).ready(function() {
  $(".text_box").keyup(function() {
   search_word = $(this).val();
   while ($(`#object_${num}`).length) {
    keyword = $(`#object_${num} > p`).text();
    if (keyword.indexOf(search_word) == -1) {
     $(`#object_${num}`).addClass("un_shown");
    }
    else {
     $(`#object_${num}`).removeClass("un_shown");
    }
    num += 1;
   }
   num = 1;
  });
 });
 