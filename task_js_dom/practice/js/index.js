let guns = [
    {
        id:1,
        name:"АК-74",
        invented:"1974",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIbtLUoj3mAVqGh-dsGXX0uJfytTwzl3swg&usqp=CAU",
        price: "800$",
        description: "5,45-мм автомат Калашникова, АК74 (Індекс ГРАУ — 6П20, також зустрічаються назви АК-74, АК 74) — автомат калібру 5,45 мм, розроблений у 1970 році та прийнятий на озброєння в 1974 році. Є подальшим розвитком АКМ. Розробка АК74 пов'язана з переходом на новий малоімпульсний патрон 5,45×39 мм."
    },
    {
        id:2,
        name:"M16 Rifle",
        invented:"1965",
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/M16a1m16a2m4m16a45wi.jpg/640px-M16a1m16a2m4m16a45wi.jpg',
        price:"750$",
        description:"узагальнювальна назва сімейства автоматичних гвинтівок, які походять від ArmaLite AR-15 та розроблені компанією Colt в середині XX століття. До сімейства гвинтівок M16 відносять головним чином модифікації M16/A1/A2/A3/A4 — різновиди основної піхотної гвинтівки армії Сполучених Штатів Америки з 1960х років, які використовуються у 15 країнах НАТО та є найбільш розповсюдженими у світі гвинтівками калібру 5.56 мм."
    },
    {
        id:3,
        name:"Winchester Model 1897",
        invented:"1897",
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/97_and_Norinco.JPG/280px-97_and_Norinco.JPG',
        price:"400$",
        description:"«помповое» гладкоствольное ружьё с открытым курком и магазином в виде трубы, разработанное автором революционных нововведений в области огнестрельного оружия, конструктором-изобретателем Джоном Мозесом Браунингом. Ружье было зарегистрировано для продажи в 1897 году, отсюда и название модели. Производился популярный дробовик m97, состоящий из 86 частей, c 1897 по 1957 года американской компанией Winchester Repeating Arms Company названой в честь предпринимателя и политика Оливера Фишера Винчестера."
    },
    {
        id:4,
        name:"Браунінг M1918",
        invented:"1918",
        img:'https://static.turbosquid.com/Preview/2018/02/13__10_21_25/Browning_M1918_600_0001.jpg17BBB5EE-0EF4-4C8F-AF8F-50E95963DA9DLarge.jpg',
        price:"1500$",
        description:" автоматическая винтовка или ручной пулемёт конструкции Джона Мозеса Браунинга, а также одноимённое семейство автоматических винтовок, которые состояли на вооружении армий разных стран мира в течение XX века. Конструктивно представляет собой оружие с воздушным охлаждением ствола, газоотводной автоматикой и магазинным питанием[2]. Первый вариант получил название именно M1918 и использовал для стрельбы патроны .30-06 Springfield (7,62x63 мм): эта автоматическая винтовка была создана в 1917 году Джоном Браунингом специально для Экспедиционного корпуса США в Европе и пошла на замену французским ручным пулемётам типа Шоша и типа Гочкисс (Бене-Мерсье)"
    }
];

let ul = document.getElementById('hidden-menu');
let itemDescription = document.getElementById('description');
let itemName = document.getElementById('name');
let itemPrice = document.getElementById('price');
let itemInvent = document.getElementById('invented');
let image = document.getElementById('img');


for(let i = 0; i < guns.length; i++) {
    let anchor = `<a href="#" id="${guns[i].id}">${guns[i].name}</a>`;
    let liString = `<li class="menu-item">${anchor}</li>`;
    ul.innerHTML += liString;
}

let openItemDescriptionEvent = (e) => {
    if(e.target && e.target.nodeName == 'A') {
        let gunDesc = guns.find(item => item.id == e.target.id);
        console.log(gunDesc);
        console.log(gunDesc.description);

        itemName.textContent = gunDesc.name;
        itemDescription.textContent = gunDesc.description;
        itemPrice.textContent = gunDesc.price;
        itemInvent.textContent = gunDesc.invented;
        image.setAttribute('src', gunDesc.img);
    }
}

let ItemByDefault = () => {
    itemName.textContent = guns[0].name;
    itemDescription.textContent = guns[0].description;
    itemPrice.textContent = guns[0].price;
    itemInvent.textContent = guns[0].invented;
    image.setAttribute('src', guns[0].img);
}

ul.addEventListener('click', openItemDescriptionEvent);
document.addEventListener('DOMContentLoaded', ItemByDefault);


