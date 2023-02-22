/**
 * This file was generated from Qr.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type LevelEnum = "L" | "M" | "Q" | "H";

export interface QrContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    staticValue: string;
    attrValue?: EditableValue<string>;
    bgColor: string;
    fgColor: string;
    size: number;
    level: LevelEnum;
}

export interface QrPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    staticValue: string;
    attrValue: string;
    bgColor: string;
    fgColor: string;
    size: number | null;
    level: LevelEnum;
}
