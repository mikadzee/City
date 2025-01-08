<template>
  <section class="popular-attractions ubuntu-regular">
    <h2>Популярные достопримечательности</h2>

    <div class="list-attractions">
      <div class="attraction" v-for="attraction in popularAttractions" @mouseenter="attraction.mouseenterr = true"
        @mouseleave="attraction.mouseenterr = false">
        <img :src="attraction.img" alt="">
        <h2>{{ attraction.title }}</h2>
        <p v-if="attraction.mouseenterr">{{ attraction.description }}</p>
      </div>
    </div>

  </section>
  <div class="loading" v-if="visible">
    <img src="@/assets/images/gifs/santa-klaus-i-ded-moroz-animatsionnaya-kartinka-0420.gif" alt="">

  </div>
</template>

<style scoped lang="less">
    .loading {
      height: 130px;
      background: #000;
      position: relative;

      & > img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 250px;
      }
    }
  .popular-attractions {
    margin: 0px 50px;
    
    
    & > h2 {
      margin: 50px 0px 0px 0px;
      font-size: 40px;
    }
    
    & .list-attractions {
      margin: 80px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;
      
      & .attraction {
        background: #fff;
        border-radius: 5px;
        width: 350px;
        height: 400px;
        position: relative;
        
        & > img {
          width: 350px;
          height: 300px;
          border-radius: 5px 5px 0px 0px;
        }
        
        & > h2 {
          margin-top: 10px;
          color: #000;
          font-size: 25px;
          text-align: center;
        }
        
        & > p {
          padding: 10px;
          position: absolute;
          z-index: 100;
          background: #000;
          width: 250px;
          right:  -100px;
          bottom: 10px;
        }
      }
    }
    
    @media (max-width:600px) {
      margin: 0px 20px;
      
      &>h2 {
        font-size: 20px;
      }
      
      & .list-attractions {
        margin: 40px 0px;
        gap: 10px;

        & .attraction {
          background: #fff;
          border-radius: 5px;
          width: 150px;
          height: 190px;
          position: relative;

          & > img {
            width: 150px;
            height: 100px;
            border-radius: 5px 5px 0px 0px;
          }

          & > h2 {
            margin-top: 10px;
            color: #000;
            font-size: 15px;
            text-align: center;
          }

          & > p {
            padding: 10px;
            position: absolute;
            z-index: 100;
            background: #000;
            width: 200px;
            font-size: 13px;
            left:  0%;
            bottom: -100px;
          }
        }
      }
      
    }
  }
</style>

<script setup>
  import img1 from "@/assets/images/attractions/attraction-1.jpg";
  import img2 from "@/assets/images/attractions/attraction-2.jpg";
  import img3 from "@/assets/images/attractions/attraction-10.jpg";
  import img4 from "@/assets/images/attractions/attraction-4.jpg";
  import img5 from "@/assets/images/attractions/attraction-5.jpg";
  import img6 from "@/assets/images/attractions/attraction-6.jpg";
  import img7 from "@/assets/images/attractions/attraction-7.png";
  import img8 from "@/assets/images/attractions/attraction-8.jpg";
  import img9 from "@/assets/images/attractions/attraction-9.jpg";
  import img10 from "@/assets/images/attractions/attraction-3.jpg";
  import img11 from "@/assets/images/attractions/attraction-11.jpg";
  import img12 from "@/assets/images/attractions/attraction-12.jpg";
  import img13 from "@/assets/images/attractions/attraction-13.jpg";
  import img14 from "@/assets/images/attractions/attraction-14.jpg";
  import img15 from "@/assets/images/attractions/attraction-15.jpg";
  import img16 from "@/assets/images/attractions/attraction-16.jpg";

  let popularAttractions = ref([
    { id: 0, img: img1, title: "Озеро Лама", description: "Крупное озеро, часто замерзающее в зимний период. Представляет интерес своими размерами и окружающим ландшафтом.", mouseenterr: false},
    { id: 1, img: img2, title: "Река Норилка", description: "Крупное озеро, часто замерзающее в зимний период. Представляет интерес своими размерами и окружающим ландшафтом.", mouseenterr: false},
    { id: 2, img: img3, title: "Церковь. Радость города Норильска", description: "Православные знают, что чудотворная икона Божией Матери «Всех скорбящих Радость» укрепляет веру людей в Богоматерь как в дивную заступницу, которая спешит всюду, где слышится стон людского страдания."},
    { id: 3, img: img4, title: "Тундра", description: "Окрестности Норильска представляют собой тундровую зону. Прогулки по тундре возможны только в определенные сезоны и с соответствующей подготовкой. Крайне важно соблюдать меры безопасности и не ходить в одиночку.", mouseenterr: false},
    { id: 5, img: img5, title: "Музей истории Норильска", description: "Пожалуй, самое популярное место для ознакомления с историей города, его промышленным развитием и сложной судьбой.", mouseenterr: false},
    { id: 6, img: img6, title: "Норильская мечеть «Нурд–Камал»", description: " Она внесена в Книгу рекордов Гиннесса как самая северная мечеть в мире.", mouseenterr: false},
    ]);

  let arrayAttractions = ref ([

    { id: 7, img: img7, title: "Норильский Заполярный театр драмы имени Вл. Маяковского", description: "Норильский Заполярный театр драмы имени Вл. Маяковского — самый северный театр в мире. Театр основан 6 ноября 1941 года в Норильлаге, труппа состояла в основном из заключённых.", mouseenterr: false},
    {
      id: 8, img: img8, title: "Норильская художественная галерея", description: "Норильская художественная галерея – один из самых северных художественных музеев России, где хранятся произведения лучших художников России, ведущих мастеров изобразительного искусства бывшего СССР.", mouseenterr: false},
    { id: 9, img: img9, title: "Дом-музей «Первый Дом Норильска»", description: "Дом-музей «Первый Дом Норильска»  построен в 1921 году на Нулевом пикете. После геологоразведочной экспедиции 1920 года, подтвердившей возможность промышленной разработки норильских месторождений, принято решение продолжить изыскания в районе. Для выяснения условий разработки месторождений нужно было провести в Норильске зимовку и первую проходку горных выработок, а также метеонаблюдения.", mouseenterr: false},
    { id: 10, img: img10, title: "Горы", description: "В окрестностях Норильска расположены горы. Походы в горы требуют специальной подготовки, снаряжения и опыта.", mouseenterr: false},
    { id: 11, img: img11, title: "Солнечные часы в Комсомольском парке", description: "Декоративное сооружение. Возможность 66 суток наблюдать Солнце по циферблату все 24 часа.", mouseenterr: false},
    { id: 12, img: img12, title: "Скульптура «Олень»", description: "Говорят, что еще несколько лет назад в Норильск из тундры в голодные зимы приходили живые дикие олени. Народ их подкармливал, а олени гуляли по-соседству, и когда наступала весна, снова уходили в тундру. Поэтому было бы даже странным, если бы в городе так бы и не установили скульптуру оленя. А сделали это в 2006 году. Оленя поставили на разделительной полосе Ленинского проспекта — самой главной городской улицы. Визуально получается, что олень идет как будто среди леса.", mouseenterr: false},
    { id: 13, img: img13, title: "Знак «Поклонный крест»", description: "12-метровый железобетонный поклонный крест на трассе Кайеркан — Норильск.  У подножия креста надпись «Господи, храни град сей»", mouseenterr: false},
    { id: 14, img: img14, title: "Скульптура «Морж»", description: "Скульптура весом 600 кг была изготовлена в Кирове на заводе «Вяткостройдеталь» из мелкозернистого бетона на основе итальянского кварцевого песка, пишет газета «Заполярная правда». Морж создан в рамках проекта «Параллельный мир» на средства гранта Благотворительного Фонда культурных инициатив. Установлена 23 июня 2007 года. Авторы скульптуры - архитекторы Александр и Ирины Соболевы", mouseenterr: false},
    { id: 15, img: img15, title: "Скульптура «Белая медведица Айка»", description: "Скульптура выполненная из мелкозернистого бетона установлена в том районе, где жила и гуляла знаменитая Айка - полярная медведица, которую вырастил и снял в своём знаменитом фильме режиссёр Норильской студии телевидения Юрий Ледин. Третья скульптура, изготовленная в рамках проекта «Параллельный мир. Фауна Таймыра рядом с цивилизацией». Открыта 6 июля 2008 г. Автор А. Соболев.", mouseenterr: false},
    { id: 16, img: img16, title: "Скульптурная композиция «Птицы счастья»", description: "В июне 2013 года на перекрестке улиц Б.Хмельницкого и Советской, как раз на углу родильного дома городские власти открыли новый компактный сквер, где и разместилась скульптурная композиция 'Птицы счастья'.", mouseenterr: false},
  ])
  let visible = ref(true);

  function getAttractions() {
    if (arrayAttractions.value.length == 0) {
      return visible.value = false;
    }
    let spliceArray = arrayAttractions.value.splice(0, 6);
    if (spliceArray.length <= 1) {
      return visible.value = false;

    }
    console.log(spliceArray);
    console.log(arrayAttractions.value);
    
    for (let i = 0; i < spliceArray.length; i++) {
      popularAttractions.value.push(spliceArray[i]);
    }

    

  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        setTimeout(() => {
          getAttractions();
        },500);
      };
    });
  };

  onMounted(() => {
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    })

      const loading = document.querySelector('.loading');
      observer.observe(loading)
  });
</script>