import { challengeOptions, challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { Card } from "./card";
import { WordBankChallenge } from "./wordbank";
import { useEffect, useState } from "react";

type Props = {
    options: typeof challengeOptions.$inferSelect[];
    // Для SELECT/ASSIST
    onSelect: (id: number) => void;
    selectedOption?: number;
    // Для WORDBANK
    selectedWords?: string[];
    onWordSelect?: (word: string) => void;
    onWordRemove?: (index: number) => void;
    correctSentence?: string;
    // Общие пропсы
    status: "correct" | "wrong" | "none";
    disabled?: boolean;
    type: typeof challenges.$inferSelect["type"];
};

export const Challenge = ({
    options,
    onSelect,
    selectedOption,
    selectedWords = [],
    onWordSelect,
    onWordRemove,
    correctSentence = "",
    status,
    disabled,
    type,
}: Props) => {
    const [shuffledWords, setShuffledWords] = useState<typeof options>([]);

    useEffect(() => {
        if (type === "WORDBANK") {
            // Перемешиваем исходные объекты options
            const shuffled = [...options].sort(() => Math.random() - 0.5);
            setShuffledWords(shuffled);
        }
    }, [options, type]);

    return (
        <div className="w-full">
            {type === "WORDBANK" ? (
                <WordBankChallenge
                    options={shuffledWords.map(option => ({
                        text: option.text,
                        audioSrc: option.audioSrc || null
                    }))}
                    selectedWords={selectedWords}
                    correctAnswer={correctSentence}
                    onSelect={onWordSelect || (() => { })}
                    onRemove={onWordRemove || (() => { })}
                />
            ) : (

                <div className={cn(
                    "grid gap-2",
                    type === "ASSIST" && "grid-cols-1",
                    type === "SELECT" && "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
                )}>
                    {options.map((option, i) => (
                        <Card
                            key={option.id}
                            id={option.id}
                            text={option.text}
                            imageSrc={option.imageSrc}
                            shortcut={`${i + 1}`}
                            selected={selectedOption === option.id}
                            onClick={() => onSelect(option.id)}
                            status={status}
                            audioSrc={option.audioSrc}
                            disabled={disabled}
                            type={type}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};