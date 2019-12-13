/**
 *
 * 샘플 grapesjs 컴포넌트
 *
 */
import React from "react";
import ReactDOM from "react-dom";
import SampleTwo from "../../components/SampleTwo";
import { sampleTwoRef } from "../../constants";

export default function(editor, opt = {}) {
	const domc = editor.DomComponents;
	const defaultType = domc.getType("default");
	const defaultModel = defaultType.model;
	const defaultView = defaultType.view;

	domc.addType(sampleTwoRef, {
		model: defaultModel.extend(
			{
				defaults: {
					...defaultModel.prototype.defaults,
					droppable: false
				}
			},
			{
				isComponent(el) {
					//console.log('isComponent', el);
					//debugger;
					if (
						(el.getAttribute &&
							el.getAttribute("data-gjs-type") === sampleTwoRef) ||
						(el.attributes && el.attributes["data-gjs-type"] === sampleTwoRef)
					) {
						return {
							type: sampleTwoRef
						};
					}
				}
			}
		),

		view: defaultView.extend({
			onRender({ el }) {
				const comps = this.model.get("components");
				comps.reset();

				// jsx template
				const compString = `컴포넌트 샘플2`;
				comps.add(compString);

				ReactDOM.render(
					<>
						<SampleTwo />
					</>,
					el
				);
			}
		})
	});
}
