import React from "react";
import "./HomeArticle.css"

export default function HomeArticle() {
  return (
    <div className="container home-article">
      <p>
        Türkiye'nin 81 şehri ve KKTC'de, 50 bini aşkın restoran iş ortağımızla,
        Türkiye’de online yemek siparişi denince ilk akla gelen markayız!
        Restoran zincirleri başta olmak üzere, civarınızdaki en sevdiğiniz
        restoranlardan kolayca sipariş verebilirsiniz.
      </p>
      <p>
        Bunun yanında, hızlı market alışverişine ihtiyacınız varsa, Yemeksepeti
        Market hizmetinizde! Binlerce market ürünü dilediğiniz anda, dakikalar
        içinde gelsin!
      </p>
      <p>
        Restoranınızı seçin, istediğiniz yemekleri sepete ekleyin, online ya da
        kapıda dilediğiniz gibi ödeyin. Gerisi kolay, siparişiniz hızlıca
        kapınızda!
      </p>
      <p>
        Yemeksepeti Mahalle de burada! Çevrenizdeki bildiğiniz, güvendiğiniz
        işletme ve esnaflar; marketten kasaba, şarküteriden manava, balıkçıdan
        petshopa, tüm kampanyaları ve fırsatlarıyla siparişiniz için hazır.
      </p>
      <div className="home-article-list">
        <h2>Yemeksepeti’nde sizi neler bekliyor?</h2>
        <span>
          ✓ Yemek siparişi ya da market alışverişinde onlarca mutfak ve
          kategori, binlerce çeşit ürün!
        </span>
        <span>
          ✓ Yemek ve market ihtiyaçlarınızda her gün on binlerce indirim!
        </span>
        <span>✓ Online ya da kapıda, dilediğiniz gibi ödeme seçeneği!</span>
        <span>
          ✓ Siparişinizle ilgili size her zaman destek olmaya hazır, 7/24 Canlı
          Yardım ekibi!
        </span>
      </div>
      <p>Tek yapmanız gereken ihtiyacınızı düşünmek ve çevrenizdeki seçeneklere göz atmak!</p>
      <h2>Yemeksepeti yanında, aklındaysa kapında!</h2>
    </div>
  );
}
