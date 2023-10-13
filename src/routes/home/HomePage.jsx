import React, { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <main>
        <section class="HomePage">
          <div class="HomePageTitle">
            Hi ! Everyone,
            <br />
            My Name is Vince.
          </div>
          <div class="HomePageIntroduction">
            目前正在尋找前端工程師職位的機會。
            <br />
            作為一名擁有兩年平面設計經驗的設計師，我擅長透過溝通需求，設計出具有美感且注重體驗的視覺。然而，為了做出讓更多人使用的產品，決定轉職軟體產業。而因為學習的熱忱與對該領域的興趣，所以選擇攻讀研究所，以快速地瞭解該領域的基礎學科。
            目前擅長透過 React 內的函數搭配 Redux 做狀態管理來開發，也會利用
            Tailwind CSS 來管理元件樣式，以增加開發效率。具有串接平台 API
            的經驗，也會利用有後端服務的平台（比如 Firebase ）來做相關應用。
            目前，我的職業目標是在新的前端工程師職位上，充分發揮我作為設計師的經驗和溝通能力，結合我自學所獲得的前端技術知識，以降低團隊間的溝通成本，達到更有效率的開發，對團隊做出貢獻。
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Home;
