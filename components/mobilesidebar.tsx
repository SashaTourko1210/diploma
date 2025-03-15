"use client";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar";
import { Menu } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

export const MobileSidebar = () => {
    const { signOut } = useClerk();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100] flex flex-col h-full" side="left">
                <Sidebar classname="w-full flex-1" />

                {/* Кнопка Sign Out */}
                <button
                    onClick={() => signOut()}
                    className="w-full p-4 text-green-500 border-t border-gray-300"
                >
                    Sign Out
                </button>
            </SheetContent>
        </Sheet>
    );
};