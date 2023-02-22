import { Component, ReactNode, createElement } from "react";
import QRCODE from "react-qr-code";
import { QrContainerProps } from "../typings/QrProps";

export class Qr extends Component<QrContainerProps> {
    render(): ReactNode {
        const bgcolor = this.props.bgColor ? this.props.bgColor : "#FFFFFF";
        const fgcolor = this.props.fgColor ? this.props.fgColor : "#000000";
        const value = this.props.attrValue?.displayValue ? this.props.attrValue?.displayValue : this.props.staticValue;
        return (
            <QRCODE value={value} size={this.props.size} bgColor={bgcolor} fgColor={fgcolor} level={this.props.level} />
        );
    }
}
