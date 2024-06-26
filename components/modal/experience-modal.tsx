"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ExperienceModalModalProps {
    isModalOpen: boolean;
    handleClose: () => void;
}

export const ExperienceModal = ({ isModalOpen, handleClose }: ExperienceModalModalProps) => {

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        PERFACTIVE
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Tableau de compétences
                    </DialogDescription>
                </DialogHeader>
                <div className="w-fit mx-auto pb-4">
                    <Image src={'/images/tableau.png'} alt="PERFACTIVE" width={500} height={500} />
                </div>
            </DialogContent>
        </Dialog>
    )
}