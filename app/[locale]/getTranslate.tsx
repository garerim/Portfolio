'use client';

import { useTranslations } from "next-intl";

export const GetTranslate = (page : string, text : string) => {

    const t = useTranslations(page);

    return t(text);
}
