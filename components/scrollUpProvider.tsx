import React, { ReactNode } from "react";
import { ScrollToTop } from 'react-simple-scroll-up'

export default function ScrollUpProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <>
                {children}
            </>
            <ScrollToTop
                offsetTop='100'
                strokeFillColor='#0474f150'
                strokeEmptyColor='#ffffff40'
                bgColor='#0474f1'
            />
        </>
    );
}