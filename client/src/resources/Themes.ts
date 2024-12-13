import { abcdef } from "@uiw/codemirror-themes-all"
import { abyss } from "@uiw/codemirror-themes-all"
import { androidstudio } from "@uiw/codemirror-themes-all"
import { andromeda } from "@uiw/codemirror-themes-all"
import { atomone } from "@uiw/codemirror-themes-all"
import { aura } from "@uiw/codemirror-themes-all"
import { basicDark } from "@uiw/codemirror-themes-all"
import { basicLight } from "@uiw/codemirror-themes-all"

import { Extension } from "@uiw/react-codemirror"

interface EditorTheme {
    [key: string]: Extension
}

export const editorThemes: EditorTheme = {
    Abcdef: abcdef,
    Abyss: abyss,
    "Android Studio": androidstudio,
    Andromeda: andromeda,
    "Atom One": atomone,
    Aura: aura,
    "Basic Dark": basicDark,
    "Basic Light": basicLight,
}
