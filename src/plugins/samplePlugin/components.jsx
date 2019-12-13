/**
 *
 * 샘플 grapesjs 컴포넌트
 *
 */
import React from "react";
import ReactDOM from "react-dom";
import Sample from "../../components/Sample";
import { sampleRef } from "../../constants";

export default function(editor, opt = {}) {
	const domc = editor.DomComponents;
	const defaultType = domc.getType("default");
	const defaultModel = defaultType.model;
	const defaultView = defaultType.view;

	domc.addType(sampleRef, {
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
							el.getAttribute("data-gjs-type") === sampleRef) ||
						(el.attributes && el.attributes["data-gjs-type"] === sampleRef)
					) {
						return {
							type: sampleRef
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
				const compString = `컴포넌트 샘플1`;
				comps.add(compString);

				ReactDOM.render(
					<>
						<Sample />
					</>,
					el
				);
			}
		})
	});
}
