import React from "react";
import { Style } from "react-style-tag";
import JsxParser from "react-jsx-parser";
import Timer from "react-compound-timer";
import styled from "styled-components";

interface iTemplate {
	jsxString: string;
	cssString: string;
}

interface iStyle {
	jsxString: string;
}

const Prompt = styled.div`
	font-size: 1.5em;
`;
const LiveTemplate = styled.div<iStyle>`
	margin: 20px;
	padding: 20px;
	border: ${props => (!props.jsxString ? "dashed black" : "none")};
	};
`;

/**
 * Display a react com
 * @param jsxString
 * @param cssString
 * @constructor
 */
const TemplateDisplay = ({ jsxString, cssString }: iTemplate) => {
	if (!jsxString) {
		return (
			<LiveTemplate jsxString={jsxString}>
				<Prompt>
					Press the <span className="fa fa-bell"></span> bell icon in the
					editor's toolbar to copy the template HTML/JSX here to have a live
					version of it!
				</Prompt>
			</LiveTemplate>
		);
	}
	return (
		<LiveTemplate jsxString={jsxString}>
			<Style>{cssString}</Style>
			<JsxParser
				components={{ Timer }}
				jsx={jsxString}
				bindings={{
					// This is called from the formatValue attribute of the Timer coming in htmlString
					formatValue: value => `${value < 10 ? `0${value}` : value}`
				}}
			/>
		</LiveTemplate>
	);
};

export default TemplateDisplay;
