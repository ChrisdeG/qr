import { Component, ReactNode, createElement } from "react";
import { QrPreviewProps } from "../typings/QrProps";
import QRCODE from "react-qr-code";

export class preview extends Component<QrPreviewProps> {
    render(): ReactNode {
        const bgcolor = this.props.bgColor ? this.props.bgColor : "#FFFFFF";
        const fgcolor = this.props.fgColor ? this.props.fgColor : "#000000";
        const size = this.props.size ? this.props.size : 128;
        return (
            <QRCODE
                value={this.props.staticValue}
                size={size}
                bgColor={bgcolor}
                fgColor={fgcolor}
                level={this.props.level}
            />
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/Qr.css");
}
