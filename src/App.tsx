import React, { useState } from "react";
import { GEditor } from "grapesjs-react";
import "grapesjs/dist/css/grapes.min.css";
import {
	timerPluginRef,
	previewPluginRef,
	samplePluginRef,
	sampleTwoPluginRef
} from "./constants";
import addTimerPlugin from "./plugins/timerPlugin";
import previewPlugin from "./plugins/previewPlugin";
import samplePlugin from "./plugins/samplePlugin";
import sampleTwoPlugin from "./plugins/sampleTwoPlugin";
import TemplateDisplay from "./components/TemplateDisplay";

const App: React.FC = () => {
	const [htmlString, setHtmlString] = useState(null);
	const [cssString, setCssString] = useState("");
	const [pluginLoaded, setPluginLoaded] = useState(false);

	if (!pluginLoaded) {
		// Pass the state setters to the timer plugin, so that each time the bell is pressed these gets called
		// and the TemplateDisplay gets updated withthe new values
		previewPlugin(setHtmlString, setCssString);
		addTimerPlugin();
		samplePlugin();
		sampleTwoPlugin();
		setPluginLoaded(true);
	}

	return (
		<>
			<GEditor
				id="geditor"
				plugins={[
					timerPluginRef,
					previewPluginRef,
					samplePluginRef,
					sampleTwoPluginRef
				]}
			/>
			<TemplateDisplay jsxString={htmlString} cssString={cssString} />
		</>
	);
};

export default App;
