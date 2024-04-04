1 - Профіль соціальної мережі 
Необхідно створити компонент <Profile>, за допомогою якого ми могли б відображати інформацію про користувача соціальної мережі. Дані про користувача лежать у файлі user.json.
￼
Опис компонента <Profile> 
Компонент повинен приймати кілька пропсів з інформацією про користувача:
* username — ім'я користувача
* tag — тег в соціальній мережі без @
* location — місто і країна
* avatar — посилання на зображення
* stats — об'єкт з інформацією про активності
Компонент повинен створювати DOM елемент наступної структури.
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
`user.json`
{
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}

Приклад використання 
import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

2- Секція статистики 
Створити компонент <Statistics>, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів, відвідування веб-сторінки користувачами різних країн, фінансові витрати тощо. Дані про статистику лежать у файлі data.json.
￼
Опис компонента <Statistics> 
Компонент повинен приймати два пропи title і stats, в яких вказується заголовок та об'єкт статистики.
* title – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка <h2>.
* stats – масив об'єктів, що містять інформацію про елемент статистики. Може мати довільну кількість елементів.
* Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.

Компонент повинен створювати DOM елемент наступної структури.
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>

`data.json`
[
  { "id": "id-1", "label": ".docx", "percentage": 22 },
  { "id": "id-2", "label": ".pdf", "percentage": 4 },
  { "id": "id-3", "label": ".mp3", "percentage": 17 },
  { "id": "id-4", "label": ".psd", "percentage": 47 },
  { "id": "id-5", "label": ".pdf", "percentage": 10 }
]

Приклад використання 
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />

3 - Список друзів 
Необхідно створити компонент <FriendList>, за допомогою якого ми могли б відображати інформацію про друзів користувача. Інформація про друзів зберігається у файлі friends.json.

Опис компонента <FriendList> 
Компонент повинен приймати один проп friends – масив об'єктів друзів.
Компонент повинен створювати DOM наступної структури.
<ul class="friend-list">
  <!-- Довільна кіл-сть FriendListItem -->
</ul>

Опис компонента <FriendListItem>
￼
 
Компонент повинен приймати кілька пропів:
* avatar - посилання на аватар
* name - ім'я друга
* isOnline - буль, що сигналізує про стан друга: в мережі або ні.
* В компоненті FriendList обов'язково повинен викликатися компонент FriendListItem, який в props буде отримувати інформацію про одного друга і рендерити li з цими даними.
Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.
Компонент повинен створювати DOM наступної структури.
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>

`friends.json`
[
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    "name": "Mango",
    "isOnline": true,
    "id": 1812
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    "name": "Kiwi",
    "isOnline": false,
    "id": 1137
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    "name": "Ajax",
    "isOnline": true,
    "id": 1213
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    "name": "Jay",
    "isOnline": true,
    "id": 1714
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    "name": "Poly",
    "isOnline": false,
    "id": 1284
  }
]

Приклад використання 
import friends from 'path/to/friends.json';

<FriendList friends={friends} />;

4 - Історія транзакцій 
Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.
￼
Дані для списку доступні у форматі JSON у файлі transactions.json. Це масив об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:
* id — унікальний ідентифікатор транзакції
* type — тип транзакції
* amount - сума транзакції
* currency - тип валюти
Опис компонента <TransactionHistory> 
Необхідно створити компонент <TransactionHistory>, який приймає один проп items – масив об'єктів транзакцій з transactions.json. Компонент створює розмітку таблиці. Кожна транзакція – це рядок таблиці. У прикладі наведена розмітка двох транзакцій.
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

————————
`transactions.json`
[
  {
    "id": "1e0700a2-5183-4291-85cc-2065a036a683",
    "type": "invoice",
    "amount": "964.82",
    "currency": "LRD"
  },
  {
    "id": "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
    "type": "payment",
    "amount": "686.50",
    "currency": "WST"
  },
  {
    "id": "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
    "type": "invoice",
    "amount": "828.62",
    "currency": "UGX"
  },
  {
    "id": "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
    "type": "withdrawal",
    "amount": "527.80",
    "currency": "ALL"
  },
  {
    "id": "ea76146a-0b00-4b80-bc02-a8c822176712",
    "type": "withdrawal",
    "amount": "371.43",
    "currency": "MUR"
  },
  {
    "id": "63ca02f9-d637-46b5-9237-f3b24425e029",
    "type": "payment",
    "amount": "862.44",
    "currency": "AUD"
  },
  {
    "id": "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
    "type": "withdrawal",
    "amount": "907.00",
    "currency": "GEL"
  },
  {
    "id": "6013bad0-750c-4691-8bc2-d8f2b43969c4",
    "type": "withdrawal",
    "amount": "352.52",
    "currency": "UGX"
  },
  {
    "id": "252c7be4-8b06-4fa7-8d42-61fb835b70d5",
    "type": "payment",
    "amount": "388.98",
    "currency": "TOP"
  },
  {
    "id": "4eaab41b-b967-40ac-82ed-85fc66f646f1",
    "type": "deposit",
    "amount": "103.10",
    "currency": "BWP"
  },
  {
    "id": "9648a350-8469-42d5-8bf3-18090de5fe67",
    "type": "withdrawal",
    "amount": "322.32",
    "currency": "MRO"
  },
  {
    "id": "9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",
    "type": "invoice",
    "amount": "14.79",
    "currency": "PYG"
  },
  {
    "id": "43ef232c-80e9-4d6f-b48a-b22405620de3",
    "type": "payment",
    "amount": "904.86",
    "currency": "CHF"
  },
  {
    "id": "5161682e-e620-4019-ab0a-24ceb10fbd20",
    "type": "withdrawal",
    "amount": "307.08",
    "currency": "NOK"
  },
  {
    "id": "7b119d71-42e6-4c42-a141-6818b07bb9ff",
    "type": "invoice",
    "amount": "275.07",
    "currency": "AWG"
  },
  {
    "id": "a4f65722-65c4-4c28-b1f4-b8ed988bb205",
    "type": "deposit",
    "amount": "213.10",
    "currency": "STD"
  },
  {
    "id": "c6e5784b-0ca3-48d6-86e5-b5128af5a523",
    "type": "invoice",
    "amount": "116.11",
    "currency": "CUP CUC"
  },
  {
    "id": "c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",
    "type": "invoice",
    "amount": "878.67",
    "currency": "HKD"
  },
  {
    "id": "a4a98b0e-b22c-438b-9f83-de2df52110c8",
    "type": "invoice",
    "amount": "725.03",
    "currency": "UYU UYI"
  },
  {
    "id": "b39bfa7a-0166-4c47-94d6-87d20590f746",
    "type": "payment",
    "amount": "405.45",
    "currency": "MDL"
  }
]
————————


Приклад використання 
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;