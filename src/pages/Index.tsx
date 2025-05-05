
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const books = [
  {
    title: "Убить пересмешника",
    author: "Харпер Ли",
    year: "1960",
    description: "Роман о взрослении в американском южном городке, рассказанный глазами маленькой девочки Скаут. Произведение затрагивает темы расовой несправедливости и моральной природы человека.",
    facts: "Получил Пулитцеровскую премию и считается классикой американской литературы. Во многом автобиографичен, основан на наблюдениях автора за своей семьей и соседями.",
    imageSrc: "https://source.unsplash.com/random/900x700/?mockingbird,book"
  },
  {
    title: "Гордость и предубеждение",
    author: "Джейн Остен",
    year: "1813",
    description: "История о семье Беннет, в частности о второй дочери Элизабет. Роман исследует темы брака, морали и неправильных первых впечатлений в английском обществе начала XIX века.",
    facts: "Первоначально книга называлась «Первые впечатления». Несмотря на популярность, Джейн Остен получила всего около 140 фунтов за свою работу при жизни.",
    imageSrc: "https://source.unsplash.com/random/900x700/?pride,prejudice,book"
  },
  {
    title: "Дневник Анны Франк",
    author: "Анна Франк",
    year: "1947",
    description: "Реальные записи еврейской девочки, которая вместе с семьей скрывалась от нацистов в Амстердаме во время Второй мировой войны, пока не была обнаружена и отправлена в концентрационный лагерь.",
    facts: "Анна получила дневник на свое 13-летие. Отец Анны, единственный выживший член семьи, опубликовал дневник после войны. Дневник переведен более чем на 70 языков.",
    imageSrc: "https://source.unsplash.com/random/900x700/?diary,anne,frank"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: "1949",
    description: "Антиутопический роман о тоталитарном государстве, где правительство контролирует каждый аспект жизни граждан, включая их мысли. Главный герой Уинстон Смит пытается сопротивляться системе.",
    facts: "Написан сразу после Второй мировой войны как предупреждение о возможных опасностях тоталитаризма. Термины из книги, такие как «Большой Брат», «новояз» и «мыслепреступление», вошли в обиход.",
    imageSrc: "https://source.unsplash.com/random/900x700/?1984,dystopia,book"
  },
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: "1997",
    description: "Первая книга серии о юном волшебнике Гарри Поттере, который узнает о своих магических способностях и поступает в школу чародейства и волшебства Хогвартс.",
    facts: "Рукопись была отвергнута 12 издательствами, прежде чем Bloomsbury согласился её опубликовать. Роулинг писала книгу, будучи матерью-одиночкой, живущей на пособие.",
    imageSrc: "https://source.unsplash.com/random/900x700/?harry,potter,book"
  },
  {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: "1954-1955",
    description: "Эпическое фэнтези о хоббите Фродо и его спутниках, отправившихся в опасное путешествие, чтобы уничтожить могущественное кольцо и спасти Средиземье от тьмы.",
    facts: "Толкин создал полноценные языки для своих вымышленных рас. Изначально планировалась как продолжение детской книги «Хоббит», но превратилась в масштабную трилогию для взрослой аудитории.",
    imageSrc: "https://source.unsplash.com/random/900x700/?lord,rings,book"
  },
  {
    title: "Великий Гэтсби",
    author: "Ф. С. Фицджеральд",
    year: "1925",
    description: "История таинственного миллионера Джея Гэтсби и его любви к Дэйзи Бьюкенен, разворачивающаяся на фоне роскошных вечеринок и «века джаза» в Америке 1920-х годов.",
    facts: "При жизни автора книга не была особенно успешной, популярность пришла только после Второй мировой войны. Сейчас считается одним из величайших американских романов XX века.",
    imageSrc: "https://source.unsplash.com/random/900x700/?gatsby,book"
  }
];

const Index = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  
  const totalBooks = books.length;
  const currentBook = books[currentBookIndex];
  
  const nextBook = () => {
    setShowDetails(false);
    setCurrentBookIndex((prev) => (prev + 1) % totalBooks);
  };
  
  const prevBook = () => {
    setShowDetails(false);
    setCurrentBookIndex((prev) => (prev - 1 + totalBooks) % totalBooks);
  };
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Классические литературные произведения</h1>
          <p className="text-lg text-gray-600">Презентация знаменитых книг мировой литературы</p>
        </div>
        
        <div className="relative">
          <Card className="overflow-hidden shadow-lg border-none bg-white/90 backdrop-blur">
            <div className="relative overflow-hidden" style={{ height: "350px" }}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{ 
                  backgroundImage: `url(${currentBook.imageSrc})`,
                  opacity: 0.3
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl text-purple-900">{currentBook.title}</CardTitle>
                <CardDescription className="text-purple-700 text-xl">
                  {currentBook.author}, {currentBook.year}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="text-gray-800 text-lg">
                  {!showDetails ? currentBook.description : currentBook.facts}
                </div>
              </CardContent>
            </div>
            
            <CardFooter className="flex justify-between pt-4 pb-5">
              <div className="flex gap-2">
                <Button variant="outline" onClick={prevBook} className="rounded-full h-10 w-10 p-0">
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="outline" onClick={nextBook} className="rounded-full h-10 w-10 p-0">
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              
              <Button onClick={toggleDetails} variant="secondary" className="gap-2">
                <BookOpen className="h-4 w-4" />
                {showDetails ? "Описание" : "Интересные факты"}
              </Button>
              
              <div className="text-sm text-gray-500">
                {currentBookIndex + 1} / {totalBooks}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
