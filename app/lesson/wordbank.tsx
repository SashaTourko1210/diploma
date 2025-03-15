"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useAudio } from "react-use";

// Отдельный компонент для кнопки с аудио
const WordButton = ({
    text,
    audioSrc,
    disabled,
    onClick,
}: {
    text: string;
    audioSrc: string | null;
    disabled: boolean;
    onClick: () => void;
}) => {
    const [audio, _, controls] = useAudio({ src: audioSrc || "" });

    const handleClick = () => {
        controls.play();
        onClick();
    };

    return (
        <>
            {audio}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                disabled={disabled}
                onClick={handleClick}
                className={cn(
                    "p-3 border-2 rounded-lg text-sm",
                    "transition-all hover:bg-gray-50",
                    disabled
                        ? "bg-gray-100 border-gray-300 cursor-not-allowed"
                        : "hover:border-sky-200"
                )}
            >
                {text}
            </motion.button>
        </>
    );
};

type WordBankProps = {
    options: Array<{
        text: string;
        audioSrc: string | null;
    }>;
    selectedWords: string[];
    correctAnswer: string;
    onSelect: (word: string) => void;
    onRemove: (index: number) => void;
};

export const WordBankChallenge = ({
    options,
    selectedWords,
    correctAnswer,
    onSelect,
    onRemove,
}: WordBankProps) => {
    return (
        <div className="space-y-6">
            <div className="min-h-[60px] border-2 rounded-lg p-2 flex flex-wrap gap-2">
                {selectedWords.map((word, index) => (
                    <motion.div
                        key={`selected-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "px-4 py-2 bg-sky-100 rounded-full text-sm",
                            "flex items-center gap-2 cursor-pointer",
                            "hover:bg-sky-200 transition-colors"
                        )}
                        onClick={() => onRemove(index)}
                    >
                        {word}
                        <X className="h-4 w-4 text-sky-600" />
                    </motion.div>
                ))}
                {selectedWords.length === 0 && (
                    <div className="text-gray-400 italic self-center">
                        Click words below to build your sentence
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {options.map((option, index) => (
                    <WordButton
                        key={index}
                        text={option.text}
                        audioSrc={option.audioSrc}
                        disabled={selectedWords.includes(option.text)}
                        onClick={() => onSelect(option.text)}
                    />
                ))}
            </div>
            <div className="text-sm text-white/50 italic">
                Correct sentence: {correctAnswer}
            </div>
        </div>
    );
};