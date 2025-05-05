
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  year: string;
  description: string;
  facts: string;
  imageSrc: string;
  showDetails: boolean;
  onToggleDetails: () => void;
}

const BookCard = ({
  title,
  author,
  year,
  description,
  facts,
  imageSrc,
  showDetails,
  onToggleDetails
}: BookCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg border-none bg-white/90 backdrop-blur">
      <div className="relative overflow-hidden" style={{ height: "350px" }}>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ 
            backgroundImage: `url(${imageSrc})`,
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        
        <CardHeader className="relative z-10">
          <CardTitle className="text-3xl text-purple-900">{title}</CardTitle>
          <CardDescription className="text-purple-700 text-xl">
            {author}, {year}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="text-gray-800 text-lg">
            {!showDetails ? description : facts}
          </div>
        </CardContent>
      </div>
      
      <CardFooter className="flex justify-end pt-4 pb-5">
        <Button onClick={onToggleDetails} variant="secondary" className="gap-2">
          <BookOpen className="h-4 w-4" />
          {showDetails ? "Описание" : "Интересные факты"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
