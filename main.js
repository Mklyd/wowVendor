//rating

const ratings = {
    saints_row : 0,
    paladins : 4,
    far_cry_6 : 4,
    call_of_duty_warzone : 3,
    world_of_warcraft_shadowlands : 3.5,
    fortnite: 4.5,
    horizon_forbidden_west: 4.5,
    need_for_speed_heat: 4.5,
    spider_man_miles_morales: 3,
    witcher_3_wild_hunt: 5,
    guardians_of_the_galaxy: 3,
    crash_team_racing: 4.5,
    spider_man: 4.5,
    dragon_age_5: 4,
  };
  
  // total number of stars
  const starTotal = 5;
  
  for(const rating in ratings) {
        const starPercentage = (ratings[rating] / starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;   
  }

//filters

/* const filter = {
      shooter,
      multiplayer_RPG,
      actio,
      card_game,
      strategy,
      action_RPG,
}
 */


//pages

const pages = document.getElementById('pages')


for( let i = 1; i < 100; i++) {
      if(i <= 5) {
            pages.innerHTML = pages.innerHTML + "<a>" + i + "</a>"

      }
      else if(i > 5 ) {
            pages.innerHTML = pages.innerHTML + "<a>" + "..." + "</a>" + "<a>"+ "99" + "</a>"
            break
      }
}
/* const page = pages.firstElementChild
page.style.backgroundColor = '#7F56D9'
page.style.color = '#fff' */

//product-card clear 

function showHide(element_id) {
      let hide = document.getElementById("hide")
      let show = document.getElementById("show")
      //Если элемент с id-шником element_id существует
      if (document.getElementById(element_id)) { 
          //Записываем ссылку на элемент в переменную obj
          var obj = document.getElementById(element_id); 
          //Если css-свойство display не block, то: 
          if (obj.style.display != "block") { 
              obj.style.display = "block"; //Показываем элемент
              hide.style.display = "block"
              show.style.display = "none"
              
          }
          else {
            obj.style.display = "none"; //Скрываем элемент
            hide.style.display = "none"
            show.style.display = "block"
          }
      }
      //Если элемент с id-шником element_id не найден, то выводим сообщение
      else alert("Элемент с id: " + element_id + " не найден!"); 
  }   
