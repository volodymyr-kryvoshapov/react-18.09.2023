import {createContext, useCallback, useContext, useState} from "react";
import {LanguageList} from "../../constants";

interface LangContextI {
  lang: LanguageList,
  setLang: (lang: LanguageList) => void,
  translate: (en: string, ua: string) => string
}

export const LanguageContext = createContext<LangContextI>({} as LangContextI);

interface LangPropsI {
  initialLanguage: LanguageList,
  children: React.ReactNode
}

export function useLang() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider')
  }

  return context
}

export function LanguageProvider({ initialLanguage, children }: LangPropsI) {
  const [lang, setLang] = useState<LanguageList>(initialLanguage);

  const translate = useCallback((en: string, ua: string) => {
    return lang === LanguageList.En ? en : ua
  }, [lang])

  const contextValue = {
    lang,
    setLang,
    translate,
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}