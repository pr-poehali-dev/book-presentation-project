
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const books = [
  {
    title: "Убить пересмешника",
    author: "Харпер Ли",
    year: "1960",
    mainInfo: [
      "Действие романа происходит в вымышленном городке Мейкомб на юге США в 1930-е годы",
      "Повествование ведется от лица девочки Джин-Луизы Финч (Скаут)",
      "Роман рассказывает о расовой дискриминации и потере невинности детства"
    ],
    additionalInfo: [
      "Книга получила Пулитцеровскую премию в 1961 году",
      "Произведение во многом автобиографично",
      "Это единственный роман писательницы до 2015 года, когда была опубликована книга «Пойди поставь сторожа»"
    ],
    image: "https://source.unsplash.com/random/500x300/?mockingbird,book"
  },
  {
    title: "Гордость и предубеждение",
    author: "Джейн Остен",
    year: "1813",
    mainInfo: [
      "Роман о жизни провинциального английского общества конца XVIII века",
      "Главная героиня - умная и независимая Элизабет Беннет",
      "Книга исследует темы брака, репутации и классовых различий"
    ],
    additionalInfo: [
      "Первоначально роман назывался «Первые впечатления»",
      "Написан в стиле реализма с элементами сатиры",
      "Считается одним из самых популярных романов в английской литературе"
    ],
    image: "https://source.unsplash.com/random/500x300/?pride,prejudice,book"
  },
  {
    title: "Дневник Анны Франк",
    author: "Анна Франк",
    year: "1947",
    mainInfo: [
      "Реальный дневник еврейской девочки, написанный в период с 1942 по 1944 год",
      "Описывает жизнь семьи в убежище во время нацистской оккупации Нидерландов",
      "Является документальным свидетельством Холокоста"
    ],
    additionalInfo: [
      "Дневник был найден после ареста семьи и сохранен помощницей отца",
      "Анна Франк умерла в концлагере Берген-Бельзен в 1945 году",
      "Книга переведена более чем на 70 языков мира"
    ],
    image: "https://source.unsplash.com/random/500x300/?diary,anne,frank"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: "1949",
    mainInfo: [
      "Антиутопический роман о тоталитарном обществе под контролем Партии",
      "Главный герой Уинстон Смит пытается противостоять системе",
      "Описывает мир постоянной войны, тотальной слежки и манипуляции историей"
    ],
    additionalInfo: [
      "Книга написана как предупреждение о возможных опасностях тоталитаризма",
      "Ввела в культурный обиход понятия «Большой Брат», «двоемыслие», «новояз»",
      "Считается одним из наиболее влиятельных произведений XX века"
    ],
    image: "https://source.unsplash.com/random/500x300/?1984,dystopia,book"
  },
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: "1997",
    mainInfo: [
      "Первая книга серии о мальчике-волшебнике Гарри Поттере",
      "История сироты, который узнает о своих магических способностях и поступает в школу Хогвартс",
      "Сюжет строится вокруг поиска философского камня, дарующего бессмертие"
    ],
    additionalInfo: [
      "Рукопись была отвергнута 12 издательствами, прежде чем ее опубликовали",
      "Книга положила начало глобальному культурному феномену",
      "Переведена более чем на 80 языков мира"
    ],
    image: "https://source.unsplash.com/random/500x300/?harry,potter,book"
  },
  {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: "1954-1955",
    mainInfo: [
      "Эпическое фэнтези, состоящее из трех томов",
      "Повествует о путешествии хоббита Фродо и его спутников с целью уничтожить Кольцо Всевластия",
      "Создает детально проработанный вымышленный мир Средиземье с собственной мифологией и языками"
    ],
    additionalInfo: [
      "Толкин работал над миром Средиземья более 50 лет",
      "Является одной из самых продаваемых книг в истории - более 150 миллионов копий",
      "Создал основы современного высокого фэнтези как жанра"
    ],
    image: "https://source.unsplash.com/random/500x300/?lord,rings,book"
  },
  {
    title: "Великий Гэтсби",
    author: "Ф. С. Фицджеральд",
    year: "1925",
    mainInfo: [
      "Роман о «веке джаза» в Америке 1920-х годов",
      "История таинственного миллионера Джея Гэтсби и его несбыточной мечты",
      "Исследует темы American Dream, богатства, класса и обреченной любви"
    ],
    additionalInfo: [
      "При жизни автора книга не имела коммерческого успеха",
      "Признание пришло только после Второй мировой войны",
      "Считается одним из величайших американских романов XX века"
    ],
    image: "https://source.unsplash.com/random/500x300/?gatsby,book"
  }
];

const Index = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [showSecondSlide, setShowSecondSlide] = useState(false);
  
  const totalBooks = books.length;
  const currentBook = books[currentBookIndex];
  
  const nextSlide = () => {
    if (showSecondSlide) {
      setShowSecondSlide(false);
      setCurrentBookIndex((prev) => (prev + 1) % totalBooks);
    } else {
      setShowSecondSlide(true);
    }
  };
  
  const prevSlide = () => {
    if (showSecondSlide) {
      setShowSecondSlide(false);
    } else {
      setCurrentBookIndex((prev) => (prev - 1 + totalBooks) % totalBooks);
      setShowSecondSlide(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-[600px] flex">
        {/* Слайд презентации */}
        <div className="w-full bg-[#f7f3e3] rounded-lg shadow-lg overflow-hidden relative flex">
          {/* Левая часть */}
          <div className="w-1/2 p-8 flex flex-col justify-between">
            {!showSecondSlide ? (
              // Первый слайд книги
              <>
                <div>
                  <h1 className="text-5xl font-bold text-red-600 mb-2">{currentBook.title}</h1>
                  <div className="flex items-center gap-2 mb-6">
                    <p className="text-xl">{currentBook.author}</p>
                    <span className="text-gray-600">•</span>
                    <p className="text-xl">{currentBook.year}</p>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-4">
                    {currentBook.mainInfo.map((info, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <p>{info}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              // Второй слайд книги
              <>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Актуальность:</h2>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="border-t border-b border-gray-300 py-6 px-4 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f7f3e3] px-4">
                      <div className="w-16 h-1 bg-red-600"></div>
                    </div>
                    
                    <ul className="space-y-4">
                      {currentBook.additionalInfo.map((info, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <p>{info}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#f7f3e3] px-4">
                      <div className="w-16 h-1 bg-red-600"></div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* Контроль слайдов */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-1">
                <Button 
                  variant="outline" 
                  onClick={prevSlide} 
                  className="h-8 w-8 rounded-full p-0 border-red-600 text-red-600"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={nextSlide} 
                  className="h-8 w-8 rounded-full p-0 border-red-600 text-red-600"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-sm text-gray-600">
                {currentBookIndex + 1}.{showSecondSlide ? 2 : 1} / {totalBooks * 2}
              </div>
            </div>
          </div>
          
          {/* Правая часть */}
          <div className="w-1/2 bg-gray-200 relative">
            {!showSecondSlide ? (
              // Изображение на первом слайде
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentBook.image})` }}
              />
            ) : (
              // Круговая диаграмма на втором слайде
              <div className="absolute inset-0 flex items-center justify-center bg-[#512b1c]/10">
                <div className="w-72 h-72 rounded-full bg-[#f7f3e3] flex flex-col items-center justify-center shadow-md">
                  <div className="text-2xl font-bold text-red-600 mb-2">Идея автора:</div>
                  <div className="text-center px-6">
                    {currentBook.title === "Убить пересмешника" && 
                      "Показать расовую несправедливость через глаза ребенка"}
                    {currentBook.title === "Гордость и предубеждение" && 
                      "Исследовать роль брака и социальных условностей"}
                    {currentBook.title === "Дневник Анны Франк" && 
                      "Сохранить память о человечности среди бесчеловечности"}
                    {currentBook.title === "1984" && 
                      "Предупредить об опасностях тоталитаризма и манипуляций"}
                    {currentBook.title === "Гарри Поттер и философский камень" && 
                      "Создать волшебный мир, где добро побеждает зло"}
                    {currentBook.title === "Властелин колец" && 
                      "Сформировать мифологию для современного мира"}
                    {currentBook.title === "Великий Гэтсби" && 
                      "Показать иллюзорность американской мечты"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
