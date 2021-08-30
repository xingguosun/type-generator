import React from "react";
import { getCodeString } from "../common";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
    /**
     * the list of properties
     * @example ../../docs/examples/code.md
     */
    customType: Array<Property>;
}

const Code: React.FC<CodeProps> = ({ customType }: CodeProps) => {
    const code: string = getCodeString(customType);
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <div role="document" aria-label="code"> <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
            {code}
        </SyntaxHighlighter></div>
    )
}

export default Code;