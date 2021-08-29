import React from "react";
import { getCodeString } from "../common";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
    customClass: Array<Property>;
}
const style = vscDarkPlus | 0;

const Code: React.FC<CodeProps> = ({ customClass } : CodeProps) => {
    const code: string = getCodeString(customClass);
    return (
        <SyntaxHighlighter language="typescript" style={style}>
            {code}
        </SyntaxHighlighter>
    )
}

export default Code;